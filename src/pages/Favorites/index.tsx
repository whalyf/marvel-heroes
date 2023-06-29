import { useEffect } from "react";
import { useMarvelHeroes } from "../../hooks/useMarvel";
import { FavoriteHero, HeroesGallery, WrapperFavorites } from "./styles";
import { IHeroProps } from "../../types/hero";
import { HeroCard } from "../../components/HeroCard";
import { SpinnerIcon } from "../../components/LoadingSpinner";
import { AiOutlineDelete } from "react-icons/ai";

export const Favorites = () => {
  const {
    handleLoadFavorites,
    loading,
    isLimitExceeded,
    handleFavoriteHero,

    allFavorites,
  } = useMarvelHeroes({});

  useEffect(() => {
    handleLoadFavorites();
  }, []);

  const uniqueArray = allFavorites.filter((item, index, self) => {
    return index === self.findIndex((t) => t.id === item.id);
  });

  return (
    <WrapperFavorites>
      <HeroesGallery>
        {!loading &&
          !isLimitExceeded &&
          uniqueArray.length > 0 &&
          uniqueArray.map((item: IHeroProps) => (
            <FavoriteHero>
              <HeroCard hero={item} key={item.id} />
            </FavoriteHero>
          ))}

        {loading && <SpinnerIcon size={30} />}

        {isLimitExceeded && !loading && <p>{isLimitExceeded}</p>}
      </HeroesGallery>
    </WrapperFavorites>
  );
};
