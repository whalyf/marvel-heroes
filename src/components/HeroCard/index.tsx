import { useNavigate } from "react-router-dom";
import { IHeroProps } from "../../types/hero";
import { WrapperHeroCard } from "./styles";

interface IHeroCardProps {
  hero: IHeroProps;
}

export const HeroCard = ({ hero }: IHeroCardProps) => {
  const navigate = useNavigate();
  return (
    <WrapperHeroCard onClick={() => navigate(`/hero/${hero.id}`)}>
      <img
        src={`${hero.thumbnail.path}/portrait_medium.${hero.thumbnail.extension}`}
        alt={hero.name}
      />

      <span>{hero.name}</span>
    </WrapperHeroCard>
  );
};
