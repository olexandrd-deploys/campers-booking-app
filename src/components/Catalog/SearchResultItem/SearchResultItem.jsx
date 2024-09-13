import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button/Button";
import css from "./SearchResultItem.module.css";
import { featuredList } from "../../../helpers/constants";
import { selectIsFavorite } from "../../../redux/favorites/selectors";
import { addFavorite, removeFavorite } from "../../../redux/favorites/slice";
import clsx from "clsx";

const SearchResultItem = ({
  camper: { gallery, description, name, price, rating, reviews, location },
  camper,
}) => {
  const isFavorite = useSelector((state) => selectIsFavorite(state, camper.id));
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper.id));
    }
  };

  const favoriteClasses = isFavorite
    ? clsx(css.favoritesButton, css.favoritesButtonActive)
    : css.favoritesButton;

  return (
    <div className={css.itemContainer}>
      <div className={css.itemImageContainer}>
        <img
          className={css.itemImage}
          src={gallery[0].thumb}
          alt={description}
        />
      </div>
      <div className={css.itemInfo}>
        <div className={css.itemInfoWrapper}>
          <div className={css.itemHeaderContainer}>
            <div className={css.itemHeader}>
              <h2>{name}</h2>
              <div className={css.priceContainer}>
                <p className={css.price}>{`€${price}.00`}</p>
                <button
                  onClick={handleFavoriteClick}
                  className={favoriteClasses}
                >
                  <svg className={css.icon}>
                    <use href="/icons.svg#favorites"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className={css.itemSubHeader}>
              <p className={css.rating}>
                <svg>
                  <use href="/icons.svg#rating"></use>
                </svg>
                {rating}({reviews.length} Reviews)
              </p>
              <p className={css.location}>
                <svg>
                  <use href="/icons.svg#map"></use>
                </svg>
                {location.split(", ").reverse().join(", ")}
              </p>
            </div>
          </div>
          <p className={css.description}>{description}</p>
          <div className={css.itemFeatures}>
            <div className={css.feature}>
              <svg className={css.icon}>
                <use href="/icons.svg#transmission"></use>
              </svg>
              <p>
                {camper.transmission.charAt(0).toUpperCase() +
                  camper.transmission.slice(1)}
              </p>
            </div>
            <div className={css.feature}>
              <svg className={css.icon}>
                <use href="/icons.svg#fuel"></use>
              </svg>
              <p>
                {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
              </p>
            </div>
            {featuredList
              .filter((feature) => camper[feature.name])
              .map((feature) => (
                <div key={feature.name} className={css.feature}>
                  <svg className={css.icon}>
                    <use href={`/icons.svg#${feature.icon}`}></use>
                  </svg>
                  <p>
                    {feature.name.charAt(0).toUpperCase() +
                      feature.name.slice(1)}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <NavLink to={`/catalog/${camper.id}`}>
          <Button>Show more</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchResultItem;
