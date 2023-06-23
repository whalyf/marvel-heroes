import md5 from "md5";
import { useCallback, useEffect, useState } from "react";
import { IHeroProps } from "../types/hero";
import axios from "axios";

import mock from "../mock/heroes.json";

export const useMarvelHeroes = ({ heroId }: { heroId?: number }) => {
  const publicKey = process.env.REACT_APP_PUBLIC_MARVEL_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_MARVEL_KEY;
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);

  const apiUrl = "https://gateway.marvel.com/v1/public/characters";
  // const params = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  const params =
    "?ts=1687482276638&apikey=cc9fccc74c61aacc44103a79b84efb2d&hash=eb2b91f6cbac6411e4e7cbd54ab15a97";

  const [marvelHeroes, setMarvelHeroes] = useState<IHeroProps[]>([]);
  const [hero, setHero] = useState<IHeroProps>();
  const [favoriteHero, setFavoriteHero] = useState<boolean>(false);

  const [allFavorites, setAllFavorites] = useState<IHeroProps[]>([]);

  // Pagination Control
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [loading, setLoading] = useState(false);
  const [isLimitExceeded, setIsLimitExceeded] = useState<boolean | string>(
    false
  );

  const handleLoadCharacters = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(apiUrl + params);
      const data = response.data;

      // Handle the API response data
      if (data.code === 200) {
        setMarvelHeroes(data?.data?.results);
        setTotalPages(data?.data?.total);
      }

      if (data.code === "RequestThrottled") {
        setIsLimitExceeded(data?.message);
      }

      setLoading(false);
    } catch (error) {
      // Handle error
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // handleLoadCharacters();
    setMarvelHeroes(mock?.data?.data?.results);
  }, []);

  const isFavorite = useCallback((id: IHeroProps["id"]): boolean => {
    const favoriteHeroes = localStorage.getItem("@favorite-heroes");

    if (favoriteHeroes === null || favoriteHeroes.length === 0) {
      return false;
    }

    const parsedFavorites = JSON.parse(favoriteHeroes);

    return parsedFavorites.includes(id);
  }, []);

  const handleLoadHero = useCallback(async (id: IHeroProps["id"]) => {
    setLoading(true);

    try {
      const response = await axios.get(`${apiUrl}/${id}${params}`);
      const data = response.data;

      // Handle the API response data
      if (data.code === 200) {
        setLoading(false);
        setHero(data?.data?.results[0]);
        setFavoriteHero(isFavorite(id));
      }
    } catch (error) {
      // Handle error
      console.log(error);
      setLoading(false);
    }
  }, []);

  const handleFavoriteHero = useCallback(async (id: IHeroProps["id"]) => {
    const favoriteHeroes = localStorage.getItem("@favorite-heroes");

    if (favoriteHeroes === null || favoriteHeroes.length === 0) {
      localStorage.setItem("@favorite-heroes", await JSON.stringify([id]));
    } else {
      const parsedFavorites = await JSON.parse(favoriteHeroes);
      const existingIndex = await parsedFavorites.indexOf(id);

      if (existingIndex !== -1) {
        await parsedFavorites.splice(existingIndex, 1);
      } else {
        await parsedFavorites.push(id);
      }

      localStorage.setItem("@favorite-heroes", JSON.stringify(parsedFavorites));
    }
    setFavoriteHero(isFavorite(id));
  }, []);
  const handleLoadFavorites = useCallback(() => {
    const allFavoriteHeroesIds = localStorage.getItem("@favorite-heroes");

    if (allFavoriteHeroesIds) {
      const favoriteHeroesIdsArray = JSON.parse(allFavoriteHeroesIds);
      const fetchHeros = async () => {
        try {
          setLoading(true);

          const fetchPromises = favoriteHeroesIdsArray.map(
            async (id: string) => {
              try {
                const response = await axios.get(`${apiUrl}/${id}${params}`);
                const data = response.data;

                // Handle the API response data
                if (data.code === 200) {
                  const hero = data?.data?.results[0];
                  if (hero) {
                    setAllFavorites((prevHeroes) => [...prevHeroes, hero]);
                  }
                }
              } catch (error) {
                // Handle error
                console.log(error);
              }
            }
          );
          setLoading(false);
          await Promise.all(fetchPromises);
        } catch (error) {
          // Handle error
          console.log(error);
          setLoading(false);
        }
      };

      fetchHeros();
      setLoading(false);
    }
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    handleLoadCharacters,
    handleLoadHero,
    marvelHeroes,
    hero,
    favoriteHero,
    handleFavoriteHero,
    handleLoadFavorites,
    allFavorites,

    //Pagination
    totalPages,
    handleNextPage,
    handlePreviousPage,

    loading,
    isLimitExceeded,
  };
};
