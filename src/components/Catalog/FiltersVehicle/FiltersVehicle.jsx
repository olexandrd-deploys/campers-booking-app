import { useDispatch } from "react-redux";
import FiltersButton from "../FiltersButton/FiltersButton";
import css from "./FiltersVehicle.module.css";
import { setType } from "../../../redux/filters/slice";

const filters = [
  { filterName: "Van", icon: "#van", value: "van" },
  { filterName: "Fully Integrated", icon: "#full", value: "fullyIntegrated" },
  { filterName: "Alcove", icon: "#alcove", value: "alcove" },
];

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
        {filters.map((filter) => (
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
