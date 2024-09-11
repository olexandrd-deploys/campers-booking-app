import { useDispatch } from "react-redux";
import FiltersButton from "../FiltersButton/FiltersButton";
import css from "./FiltersEquipment.module.css";
import { toggleFeature } from "../../../redux/filters/slice";

const filters = [
  { filterName: "AC", icon: "#ac", value: "AC" },
  { filterName: "Automatic", icon: "#transmission", value: "automatic" },
  { filterName: "Kitchen", icon: "#kitchen", value: "kitchen" },
  { filterName: "TV", icon: "#tv", value: "TV" },
  { filterName: "Bathroom", icon: "#bathroom", value: "bathroom" },
];

const FiltersEquipment = () => {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(toggleFeature(value));
  };

  return (
    <div className={css.VehicleEquipment}>
      <h3>Vehicle equipment</h3>
      <hr className={css.separator} />
      <div className={css.filterlist}>
        {filters.map((filter) => (
          <FiltersButton
            key={filter.value}
            filterName={filter.filterName}
            icon={filter.icon}
            value={filter.value}
            handleClick={handleClick}
            className={css.filterButtonActive}
          />
        ))}
      </div>
    </div>
  );
};

export default FiltersEquipment;
