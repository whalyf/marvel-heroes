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
import { Pagination } from "../../components/Pagination";
import { useEffect } from "react";

export const Home = () => {
  const {
    handleLoadCharacters,
    marvelHeroes,
    loading,
    isLimitExceeded,
    currentPage,
    handleNextPage,
    handlePreviousPage,
  } = useMarvelHeroes({});

  useEffect(() => {
    handleLoadCharacters();
  }, [currentPage]);

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

        {isLimitExceeded && !loading && <p>{isLimitExceeded}</p>}
      </HeroesGallery>
      {!isLimitExceeded && (
        <Pagination
          handleNext={handleNextPage}
          handlePrev={handlePreviousPage}
          currentPage={currentPage}
        />
      )}
    </WrapperHome>
  );
};
