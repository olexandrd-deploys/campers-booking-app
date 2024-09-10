import Select, { components } from "react-select";
import css from "./Location.module.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg className={css.mapIcon}>
        <use href="/icons.svg#map"></use>
      </svg>
    </components.DropdownIndicator>
  );
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    backgroundColor: "#f7f7f7",
    boxShadow: "none",
    width: 360,
    height: 56,
    "&:hover": {
      border: "none",
    },
  }),
  input: (styles) => ({
    ...styles,
    paddingLeft: 48,
    color: "#101828",
  }),
  singleValue: (styles) => ({
    ...styles,
    paddingLeft: 48,
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const Location = () => {
  return (
    <div className={css.locationContainer}>
      <svg className={css.mapIcon}>
        <use href="/icons.svg#map"></use>
      </svg>
      <p>Location</p>
      <Select
        options={options}
        components={{ DropdownIndicator }}
        defaultValue={options[0]}
        styles={customStyles}
        isClearable={false}
      ></Select>
    </div>
  );
};

export default Location;
