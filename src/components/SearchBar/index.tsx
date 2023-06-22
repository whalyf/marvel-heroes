import { WrapperSearchBar } from "./styles";

import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <WrapperSearchBar>
      <input type="search" placeholder="Search a Hero" />
      <button type="button" onClick={() => console.log("clicou")}>
        <FaSearch size={15} />
      </button>
    </WrapperSearchBar>
  );
};
