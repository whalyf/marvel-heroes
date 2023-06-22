import styled from "styled-components";

export const WrapperSearchBar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #504a4a;

  > input {
    width: 35%;
    border: none;
    height: 40px;
    border-radius: 8px;
    padding-left: 10px;
  }

  > button {
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 8px;
    background-color: #000000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      cursor: pointer;
      opacity: .8;
    }
  }
`;
