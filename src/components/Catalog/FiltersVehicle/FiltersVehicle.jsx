import FiltersButton from "../FiltersButton/FiltersButton";
import css from "./FiltersVehicle.module.css";

const filters = [
  { filterName: "Van", icon: "#ac" },
  { filterName: "Fully Integrated", icon: "#full" },
  { filterName: "Alcove", icon: "#alcove" },
];

const FiltersVehicle = () => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default FiltersVehicle;
