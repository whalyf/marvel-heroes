import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e23636;
  padding: 0 50px;
  align-items: center;
  
  > span {
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
    cursor: default;
  }
`;

export const RedirectLink = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
