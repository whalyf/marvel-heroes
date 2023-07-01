import styled from "styled-components";
import { scrollbarThin } from "../../components/atoms/scrollbars";

export const WrapperHeroDetailed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 200px 0;
  gap: 20px;
  position: relative;

  > button {
    position: absolute;
    top: 30px;
    right: 290px;
    padding: 8px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }

  > span {
    font-size: 2rem;
    text-align: center;
    font-style: italic;
    font-weight: 800;
  }

  > p {
    text-align: justify;
    font-weight: 600;
  }
`;

export const HeroImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
`;

export const Badges = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  max-height: 175px;
  overflow: auto;
  padding: 20px;

  ${scrollbarThin}

  button {
    background: transparent;
    border-radius: 10px;
    border: none;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 25px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    font-size: 10px;
  }
`;
export const ComicsBadges = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;

export const SeriesBadges = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;
