/* eslint-disable react-hooks/exhaustive-deps */
import md5 from "md5";
import { useCallback, useState } from "react";
import { IHeroProps } from "../types/hero";
import axios, { isAxiosError } from "axios";

import { useNavigate } from "react-router-dom";

export const useMarvelHeroes = ({ heroId }: { heroId?: number }) => {
  const publicKey = process.env.REACT_APP_PUBLIC_MARVEL_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_MARVEL_KEY;
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  const PAGE_LIMIT = 20;
  const navigate = useNavigate();

  const apiUrl = "https://gateway.marvel.com/v1/public/characters";
  const params = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  const [marvelHeroes, setMarvelHeroes] = useState<IHeroProps[]>([]);
  const [hero, setHero] = useState<IHeroProps>();
  const [favoriteHero, setFavoriteHero] = useState<boolean>(false);
  const [allFavorites, setAllFavorites] = useState<IHeroProps[]>([]);

  const [search, setSearch] = useState<string>("");

  // Pagination Control
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [loading, setLoading] = useState(false);
  const [isLimitExceeded, setIsLimitExceeded] = useState<boolean | string>(
    false
  );

  const handleLoadCharacters = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl + params, {
        params: {
          offset: currentPage,
          limit: PAGE_LIMIT,
        },
      });
      const data = response.data;
      console.log(data);
      // Handle the API response data
      if (data.code === 200) {
        setMarvelHeroes(data?.data?.results);
        setTotalPages(data.data.total);
      }

      if (data.code === "RequestThrottled") {
        setIsLimitExceeded(data?.message);
      }

      setLoading(false);
    } catch (error) {
      // Handle error
      if (
        isAxiosError(error) &&
        error?.response?.data.code === "RequestThrottled"
      ) {
        setIsLimitExceeded(error?.response?.data.message);
      }
      setLoading(false);
    }
  }, [currentPage]);

  const handleSearchHero = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl + params + `&name=${search}`);
      const data = response.data;

      // Handle the API response data
      if (data?.data?.total > 0) {
        navigate(`/hero/${data?.data?.results[0].id}`);
      } else {
        setMarvelHeroes([]);
      }

      if (data.code === "RequestThrottled") {
        setIsLimitExceeded(data?.message);
      }

      setLoading(false);
    } catch (error) {
      // Handle error
      if (
        isAxiosError(error) &&
        error?.response?.data.code === "RequestThrottled"
      ) {
        setIsLimitExceeded(error?.response?.data.message);
      }
      setLoading(false);
    }
  }, [search]);

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
      if (
        isAxiosError(error) &&
        error?.response?.data.code === "RequestThrottled"
      ) {
        setIsLimitExceeded(error?.response?.data.message);
      }
      setLoading(false);
    }
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
                if (
                  isAxiosError(error) &&
                  error?.response?.data.code === "RequestThrottled"
                ) {
                  setIsLimitExceeded(error?.response?.data.message);
                }
              }
            }
          );
          setLoading(false);
          await Promise.all(fetchPromises);
        } catch (error) {
          // Handle error

          setLoading(false);
        }
      };

      fetchHeros();
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

  const handleNextPage = () => {
    if (currentPage + PAGE_LIMIT < totalPages) {
      setCurrentPage(currentPage + PAGE_LIMIT);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage >= PAGE_LIMIT) {
      setCurrentPage(currentPage - PAGE_LIMIT);
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
    handleSearchHero,
    setSearch,

    //Pagination
    currentPage: currentPage / PAGE_LIMIT,
    handleNextPage,
    handlePreviousPage,

    loading,
    isLimitExceeded,
  };
};
