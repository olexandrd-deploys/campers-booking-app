import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import css from "./SearchResultItem.module.css";

const featuredList = [
  { name: "AC", icon: "ac" },
  { name: "bathroom", icon: "bathroom" },
  { name: "kitchen", icon: "kitchen" },
  { name: "TV", icon: "tv" },
  { name: "radio", icon: "radio" },
];

const SearchResultItem = ({
  camper: { gallery, description, name, price, rating, reviews, location },
  camper,
}) => {
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
                <button className={css.favoritesButton}>
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
