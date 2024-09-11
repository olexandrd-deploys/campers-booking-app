import { useSelector } from "react-redux";
import css from "./FiltersButton.module.css";
import { selectIsChecked } from "../../../redux/filters/selectors";
import clsx from "clsx";

const FiltersButton = ({ filterName, icon, value, handleClick }) => {
  const isChecked = useSelector((state) => selectIsChecked(state, value));

  const filterButtonClass = isChecked
    ? clsx(css.filterButton, css.filterButtonActive)
    : clsx(css.filterButton);

  return (
    <button className={filterButtonClass} onClick={() => handleClick(value)}>
      <svg className={css.icon}>
        <use href={`/icons.svg${icon}`}></use>
      </svg>
      <p className={css.description}>{filterName}</p>
    </button>
  );
};

export default FiltersButton;
