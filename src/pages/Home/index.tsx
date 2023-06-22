// COMPONENTS
import { HeroCard } from "../../components/HeroCard";
import { SpinnerIcon } from "../../components/LoadingSpinner";
import { SearchBar } from "../../components/SearchBar";

// HOOKS
import { useMarvelHeroes } from "../../hooks/useMarvel";

// TYPES
import { IHeroProps } from "../../types/hero";

// STYLES
import { HeroesGallery, WrapperHome } from "./styles";

export const Home = () => {
  const { marvelHeroes, loading, isLimitExceeded } = useMarvelHeroes({});

  return (
    <WrapperHome>
      <SearchBar />
      <HeroesGallery>
        {!loading &&
          !isLimitExceeded &&
          marvelHeroes.map((item: IHeroProps) => (
            <HeroCard hero={item} key={item.id} />
          ))}

        {loading && <SpinnerIcon size={30} />}

        {isLimitExceeded && <p>{isLimitExceeded}</p>}
      </HeroesGallery>
    </WrapperHome>
  );
};
