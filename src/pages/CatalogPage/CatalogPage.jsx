import Button from "../../components/Button/Button";
import Location from "../../components/Catalog/Location/Location";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.CatalogPage}>
      <div className={css.toolbar}>
        <div className={css.location}>
          <Location />
        </div>
        <div className={css.filters}></div>
        <div className={css.filtersType}></div>
        <Button>Search</Button>
      </div>
      <div className={css.searchResultList}></div>
    </div>
  );
};

export default CatalogPage;
