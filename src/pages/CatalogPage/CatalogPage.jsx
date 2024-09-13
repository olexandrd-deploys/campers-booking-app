import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import FiltersEquipment from "../../components/Catalog/FiltersEquipment/FiltersEquipment";
import FiltersVehicle from "../../components/Catalog/FiltersVehicle/FiltersVehicle";
import Location from "../../components/Catalog/Location/Location";
import SearchResultList from "../../components/Catalog/SearchResultList/SearchResultList";
import css from "./CatalogPage.module.css";
import { setFilters } from "../../redux/appliedFilters/slice";
import { selectSelectedFIlers } from "../../redux/filters/selectors";
import { resetVisibleCount } from "../../redux/pagination/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectSelectedFIlers);

  const handleSearch = () => {
    dispatch(setFilters(filters));
    dispatch(resetVisibleCount());
  };

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
        <Button clickHandler={handleSearch}>Search</Button>
      </div>
      <div className={css.searchResultList}>
        <SearchResultList />
      </div>
    </div>
  );
};

export default CatalogPage;
