import styled from "styled-components";

export const WrapperPagination = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > button {
    background: transparent;
    cursor: pointer;
    border: none;
    &:hover {
      opacity: 0.8;
    }
  }
`;
