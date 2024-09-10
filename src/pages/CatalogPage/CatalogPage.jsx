import Button from "../../components/Button/Button";
import FiltersEquipment from "../../components/Catalog/FiltersEquipment/FiltersEquipment";
import FiltersVehicle from "../../components/Catalog/FiltersVehicle/FiltersVehicle";
import Location from "../../components/Catalog/Location/Location";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.CatalogPage}>
      <div className={css.toolbar}>
        <div className={css.location}>
          <Location />
        </div>
        <p>Filters</p>
        <div className={css.filtersEquipment}>
          <FiltersEquipment />
        </div>
        <div className={css.filtersVehicle}>
          <FiltersVehicle />
        </div>
        <Button>Search</Button>
      </div>
      <div className={css.searchResultList}></div>
    </div>
  );
};

export default CatalogPage;
