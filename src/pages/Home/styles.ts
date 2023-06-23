import styled from "styled-components";
import { scrollbarThin } from "../../components/atoms/scrollbars";

export const WrapperHome = styled.div``;

export const HeroesGallery = styled.div`
  display: flex;
  padding: 50px;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  max-height: 800px;
  overflow-y: auto;

  ${scrollbarThin}

  > p {
    text-align: justify;
    font-weight: 600;
  }
`;
