import FiltersButton from "../FiltersButton/FiltersButton";
import css from "./FiltersEquipment.module.css";

const filters = [
  { filterName: "AC", icon: "#ac" },
  { filterName: "Automatic", icon: "#transmission" },
  { filterName: "Kitchen", icon: "#kitchen" },
  { filterName: "TV", icon: "#tv" },
  { filterName: "Bathroom", icon: "#bathroom" },
];

const FiltersEquipment = () => {
  return (
    <div className={css.VehicleEquipment}>
      <h3>Vehicle equipment</h3>
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

export default FiltersEquipment;
