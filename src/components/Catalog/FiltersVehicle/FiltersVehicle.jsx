import { useDispatch } from "react-redux";
import FiltersButton from "../FiltersButton/FiltersButton";
import css from "./FiltersVehicle.module.css";
import { setType } from "../../../redux/filters/slice";
import { vehicleTypeFilters } from "../../../helpers/constants";

const FiltersVehicle = () => {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setType(value));
  };

  return (
    <div className={css.VehicleEquipment}>
      <h3>Vehicle type</h3>
      <hr className={css.separator} />
      <div className={css.filterlist}>
        {vehicleTypeFilters.map((filter) => (
          <FiltersButton
            key={filter.filterName}
            filterName={filter.filterName}
            icon={filter.icon}
            value={filter.value}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FiltersVehicle;
