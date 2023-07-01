import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// HOOKS
import { useMarvelHeroes } from "../../hooks/useMarvel";
// COMPONENTS
import { SpinnerIcon } from "../../components/LoadingSpinner";
import { HeroBadge } from "../../components/HeroBadge";

// STYLES
import {
  WrapperHeroDetailed,
  HeroImage,
  Badges,
  ComicsBadges,
  SeriesBadges,
} from "./styles";

export const HeroDetailed = () => {
  const params = useParams();

  const [seeAllComics, setSeeAllComics] = useState(false);
  const [seeAllSeries, setSeeAllSeries] = useState(false);

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
  }, []);

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

          {hero.description.length > 0 && <p>{hero.description}</p>}

          <Badges>
            <ComicsBadges>
              {!seeAllComics &&
                hero.comics?.items &&
                hero.comics?.items
                  .slice(0, 5)
                  .map((item) => <HeroBadge type="comics" text={item.name} />)}

              {seeAllComics &&
                hero.comics?.items &&
                hero.comics?.items.map((item) => (
                  <HeroBadge type="comics" text={item.name} />
                ))}

              {hero.comics?.items.length !== 0 && (
                <button onClick={() => setSeeAllComics(!seeAllComics)}>
                  {seeAllComics ? "- comics" : "+ comics"}
                </button>
              )}
            </ComicsBadges>

            <SeriesBadges>
              {!seeAllSeries &&
                hero.series?.items &&
                hero.series?.items
                  .slice(0, 5)
                  .map((item) => <HeroBadge type="series" text={item.name} />)}

              {seeAllSeries &&
                hero.series?.items &&
                hero.series?.items.map((item) => (
                  <HeroBadge type="series" text={item.name} />
                ))}

              {hero.series?.items.length !== 0 && (
                <button onClick={() => setSeeAllSeries(!seeAllSeries)}>
                  {seeAllSeries ? "- series" : "+ series"}
                </button>
              )}
            </SeriesBadges>
          </Badges>
        </>
      )}

      {loading && <SpinnerIcon size={30} />}

      {isLimitExceeded && <p>{isLimitExceeded}</p>}
    </WrapperHeroDetailed>
  );
};
