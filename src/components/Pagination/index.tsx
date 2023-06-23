import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { WrapperPagination } from "./styles";

export const Pagination = ({
  handleNext,
  handlePrev,
  totalPages,
}: {
  handleNext: () => void;
  handlePrev: () => void;
  totalPages: number;
}) => {
  return (
    <WrapperPagination>
      <button onClick={handlePrev}>
        <FaArrowCircleLeft size={25} />
      </button>
      <span>{totalPages}</span>
      <button onClick={handleNext}>
        <FaArrowCircleRight size={25} />
      </button>
    </WrapperPagination>
  );
};
