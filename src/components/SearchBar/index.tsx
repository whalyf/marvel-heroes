import { useCallback } from "react";
import { useMarvelHeroes } from "../../hooks/useMarvel";
import { WrapperSearchBar } from "./styles";
import { debounce } from "lodash";

import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  const { setSearch, handleSearchHero } = useMarvelHeroes({});

  const debouncedSearch = useCallback(debounce(setSearch, 200), []);

  return (
    <WrapperSearchBar>
      <input
        type="search"
        placeholder="Search a Hero"
        onChange={(e) => {
          debouncedSearch(e.target.value);
        }}
      />
      <button type="button" onClick={handleSearchHero}>
        <FaSearch size={15} />
      </button>
    </WrapperSearchBar>
  );
};
