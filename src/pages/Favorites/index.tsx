import { useEffect } from "react";
import { useMarvelHeroes } from "../../hooks/useMarvel";
import { HeroesGallery, WrapperFavorites } from "./styles";
import { IHeroProps } from "../../types/hero";
import { HeroCard } from "../../components/HeroCard";
import { SpinnerIcon } from "../../components/LoadingSpinner";

export const Favorites = () => {
  const { handleLoadFavorites, loading, isLimitExceeded, marvelHeroes } =
    useMarvelHeroes({});

  useEffect(() => {
    handleLoadFavorites();
  }, [handleLoadFavorites]);
 
  return (
    <WrapperFavorites>
      <HeroesGallery>
        {!loading &&
          !isLimitExceeded &&
          marvelHeroes.length > 0 &&
          marvelHeroes.map((item: IHeroProps) => (
            <HeroCard hero={item} key={item.id} />
          ))}

        {loading && <SpinnerIcon size={30} />}

        {isLimitExceeded && <p>{isLimitExceeded}</p>}
      </HeroesGallery>
    </WrapperFavorites>
  );
};
