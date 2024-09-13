import Select, { components } from "react-select";
import css from "./Location.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRawLocation } from "../../../redux/vehicles/selectors";
import { setLocation } from "../../../redux/filters/slice";
import { selectLocation } from "../../../redux/filters/selectors";

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
    paddingLeft: 42,
    color: "#101828",
  }),
  placeholder: (styles) => ({
    ...styles,
    paddingLeft: 42,
  }),
  singleValue: (styles) => ({
    ...styles,
    paddingLeft: 42,
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const Location = () => {
  const options = useSelector(selectRawLocation);
  const selectedLocation = useSelector(selectLocation);
  const dispatch = useDispatch();

  const selectedOption =
    options.find((option) => option.value === selectedLocation) || null;

  const handleChange = (e) => {
    if (!e) {
      dispatch(setLocation(""));
      return;
    }
    dispatch(setLocation(e.value));
  };

  return (
    <div className={css.locationContainer}>
      <svg className={css.mapIcon}>
        <use href="/icons.svg#map"></use>
      </svg>
      <p>Location</p>
      <Select
        value={selectedOption}
        options={options}
        components={{ DropdownIndicator }}
        placeholder="City"
        styles={customStyles}
        isClearable={true}
        onChange={handleChange}
      ></Select>
    </div>
  );
};

export default Location;
