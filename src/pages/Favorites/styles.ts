import styled from "styled-components";

export const WrapperFavorites = styled.div``;

export const HeroesGallery = styled.div`
  display: flex;
  padding: 50px;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  height: 100vh;
  
  > p {
    text-align: justify;
    font-weight: 600;
  }
`;
export const FavoriteHero = styled.div`
  display: flex;
  flex-direction: column;
  > .remove-favorite {
    background-color: transparent;
    color: #e23636;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      color: #d23636;
    }
  }
`;
