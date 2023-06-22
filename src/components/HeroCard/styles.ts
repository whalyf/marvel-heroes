import styled from "styled-components";

export const WrapperHeroCard = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  width: 200px;
  height: 250px;

  text-align: center;
  color: #fff;
  font-style: italic;
  font-weight: 800;

  background-color: #504a4a;
  border: 2px solid black;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.2);

  > img {
    margin-bottom: 20px;
    border-radius: 8px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
