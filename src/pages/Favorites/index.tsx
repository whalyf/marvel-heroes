import { useEffect } from "react";
import { useMarvelHeroes } from "../../hooks/useMarvel";
import { HeroesGallery, WrapperFavorites } from "./styles";
import { IHeroProps } from "../../types/hero";
import { HeroCard } from "../../components/HeroCard";
import { SpinnerIcon } from "../../components/LoadingSpinner";

export const Favorites = () => {
  const {
    handleLoadFavorites,
    loading,
    isLimitExceeded,

    allFavorites,
  } = useMarvelHeroes({});

  useEffect(() => {
    handleLoadFavorites();
  }, []);

  const uniqueArray = allFavorites.filter((item, index, self) => {
    return index === self.findIndex((t) => t.id === item.id); // Assuming each item has a unique identifier, such as an 'id'
  });

  return (
    <WrapperFavorites>
      <HeroesGallery>
        {!loading &&
          !isLimitExceeded &&
          uniqueArray.length > 0 &&
          uniqueArray.map((item: IHeroProps) => (
            <HeroCard hero={item} key={item.id} />
          ))}

        {loading && <SpinnerIcon size={30} />}

        {isLimitExceeded && <p>{isLimitExceeded}</p>}
      </HeroesGallery>
    </WrapperFavorites>
  );
};
