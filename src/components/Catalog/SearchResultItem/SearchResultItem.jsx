import Button from "../../Button/Button";
import css from "./SearchResultItem.module.css";

const SearchResultItem = () => {
  return (
    <div className={css.itemContainer}>
      <div className={css.itemImage}>
        <img src="https://via.placeholder.com/150" alt="product" />
      </div>
      <div className={css.itemInfo}>
        <div className={css.itemHeaderContainer}>
          <div className={css.itemHeader}>
            <h2>Name</h2>
            <div className={css.priceContainer}>
              <p>Price</p>
              <button>Favorites</button>
            </div>
          </div>
          <div className={css.itemSubHeader}>
            <p>Rating</p>
            <p>Location</p>
          </div>
        </div>
        <p className={css.description}>Description</p>
        <div className={css.itemFeatures}>itemFeatures</div>
        <Button>Show more</Button>
      </div>
    </div>
  );
};

export default SearchResultItem;
