// COMPONENTS
import { HeroCard } from "../../components/HeroCard";
import { SearchBar } from "../../components/SearchBar";

// HOOKS
import { useMarvelHeroes } from "../../hooks/useMarvel";

// TYPES
import { IHeroProps } from "../../types/hero";

// STYLES
import { HeroesGallery, SpinnerIcon, WrapperHome } from "./styles";

export const Home = () => {
  const { marvelHeroes, loading } = useMarvelHeroes({});

  return (
    <WrapperHome>
      <SearchBar />
      <HeroesGallery>
        {!loading &&
          marvelHeroes.map((item: IHeroProps) => (
            <HeroCard hero={item} key={item.id} />
          ))}

        {loading && <SpinnerIcon size={30} />}
      </HeroesGallery>
    </WrapperHome>
  );
};
