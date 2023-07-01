import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { WrapperPagination } from "./styles";

export const Pagination = ({
  handleNext,
  handlePrev,
  currentPage,
}: {
  handleNext: () => void;
  handlePrev: () => void;
  currentPage: number;
}) => {
  return (
    <WrapperPagination>
      <button onClick={handlePrev}>
        <FaArrowCircleLeft size={25} />
      </button>
      <span>{currentPage + 1}</span>
      <button onClick={handleNext}>
        <FaArrowCircleRight size={25} />
      </button>
    </WrapperPagination>
  );
};
