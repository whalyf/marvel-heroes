import { useParams } from "react-router-dom";
import { WrapperHeroDetailed } from "./styles";
import { useMarvelHeroes } from "../../hooks/useMarvel";

export const HeroDetailed = () => {
  const params = useParams();
  console.log(params);
  const { handleLoadAHero } = useMarvelHeroes({});

  return <WrapperHeroDetailed>Heroi</WrapperHeroDetailed>;
};
