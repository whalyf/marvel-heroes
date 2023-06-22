import md5 from "md5";
import { useCallback, useEffect, useState } from "react";
import { IHeroProps } from "../types/hero";
import { useNavigate } from "react-router-dom";

export const useMarvelHeroes = ({ heroId }: { heroId?: number }) => {
  const publicKey = process.env.REACT_APP_PUBLIC_MARVEL_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_MARVEL_KEY;
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);

  const apiUrl = "https://gateway.marvel.com/v1/public/characters";
  const params = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  const [marvelHeroes, setMarvelHeroes] = useState<IHeroProps[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoadCharacters = useCallback(async () => {
    setLoading(true);
    fetch(apiUrl + params)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data
        if (data.code === 200) {
          setMarvelHeroes(data?.data?.results);
        }
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleLoadCharacters();
  }, [handleLoadCharacters]);

  const handleLoadAHero = useCallback(async (id: IHeroProps["id"]) => {
    // fetch(`${apiUrl}/${id}${params}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the API response data
    //     if (data.code === 200) {
    //       setMarvelHeroes(data?.data?.results);
    //     }
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.log(error);
    //   });
  }, []);

  return {
    handleLoadCharacters,
    handleLoadAHero,
    marvelHeroes,

    loading,
  };
};
