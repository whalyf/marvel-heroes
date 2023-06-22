import { useParams } from "react-router-dom";
import { WrapperHeroDetailed, HeroImage } from "./styles";
import { useMarvelHeroes } from "../../hooks/useMarvel";
import { useEffect } from "react";
import { SpinnerIcon } from "../../components/LoadingSpinner";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const HeroDetailed = () => {
  const params = useParams();

  const {
    handleLoadHero,
    hero,
    loading,
    isLimitExceeded,
    handleFavoriteHero,
    favoriteHero,
  } = useMarvelHeroes({});

  useEffect(() => {
    handleLoadHero(Number(params.id));
  }, [handleLoadHero, params]);

  return (
    <WrapperHeroDetailed>
      {!loading && hero && (
        <>
          {favoriteHero ? (
            <button onClick={() => handleFavoriteHero(hero.id)}>
              <AiFillStar />
            </button>
          ) : (
            <button onClick={() => handleFavoriteHero(hero.id)}>
              <AiOutlineStar />
            </button>
          )}
          <HeroImage
            src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`}
            alt={hero?.name}
          />
          <span>{hero.name}</span>

          <p>{hero.description}</p>
        </>
      )}
      {/* 
      <HeroImage
        src="https://media.licdn.com/dms/image/D4D03AQFPKwkC6ojhAw/profile-displayphoto-shrink_800_800/0/1686326139034?e=1692835200&v=beta&t=wqQ-vm6INvwRTi6iTLPVoFQ0scaFZ9iNMkgay54IpRc"
        alt={hero?.name}
      />
      <span>Whalyf</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        officia reiciendis quibusdam inventore beatae! Repudiandae, quibusdam.
        Hic porro, commodi doloribus recusandae incidunt vel quaerat unde minima
        tenetur modi, temporibus aliquid?
      </p> */}

      {loading && <SpinnerIcon size={30} />}

      {isLimitExceeded && <p>{isLimitExceeded}</p>}
    </WrapperHeroDetailed>
  );
};
