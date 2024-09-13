import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import FiltersEquipment from "../../components/Catalog/FiltersEquipment/FiltersEquipment";
import FiltersVehicle from "../../components/Catalog/FiltersVehicle/FiltersVehicle";
import Location from "../../components/Catalog/Location/Location";
import SearchResultList from "../../components/Catalog/SearchResultList/SearchResultList";
import css from "./CatalogPage.module.css";
import { setFilters } from "../../redux/appliedFilters/slice";
import { selectSelectedFIlers } from "../../redux/filters/selectors";
import { resetVisibleCount } from "../../redux/pagination/slice";

import { fetchCampers } from "../../redux/vehicles/operations";
import { selectError, selectIsLoading } from "../../redux/vehicles/selectors";
import Loader from "../../components/Loader/Loader";
import LoadError from "../../components/LoadError/LoadError";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectSelectedFIlers);
  const isLoading = useSelector(selectIsLoading);
  const requestError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(setFilters(filters));
    dispatch(resetVisibleCount());
  };

  return (
    <>
      {isLoading && <Loader />}
      {requestError && <LoadError />}
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
    </>
  );
};

export default CatalogPage;
