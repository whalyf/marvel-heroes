// COMPONENTS
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
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
    totalPages,
    handleNextPage,
    handlePreviousPage,
  } = useMarvelHeroes({});

  // useEffect(() => {
  //   handleLoadCharacters();
  // }, []);

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

        <button
          onClick={() => {
            handleLoadCharacters();
          }}
        >
          aquii
        </button>
      </HeroesGallery>
      <Pagination
        handleNext={handleNextPage}
        handlePrev={handlePreviousPage}
        totalPages={totalPages}
      />
    </WrapperHome>
  );
};
