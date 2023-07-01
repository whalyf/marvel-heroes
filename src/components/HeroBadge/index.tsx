import { WrapperHeroBadge } from "./styles";

interface IHeroBadgeProps {
  type: "comics" | "series";
  text: string;
}

export const HeroBadge = ({ type, text }: IHeroBadgeProps) => {
  return (
    <WrapperHeroBadge type={type}>
      <span>{text}</span>
    </WrapperHeroBadge>
  );
};
