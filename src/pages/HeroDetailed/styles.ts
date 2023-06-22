import styled from "styled-components";

export const WrapperHeroDetailed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 200px;
  gap: 20px;
  position: relative;

  > button {
    position: absolute;
    top: 50px;
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
  border-radius: 20px;
  object-fit: cover;
`;
