import { useSelector } from "react-redux";
import css from "./FiltersButton.module.css";
import { selectIsChecked, selectType } from "../../../redux/filters/selectors";
import clsx from "clsx";

const FiltersButton = ({ filterName, icon, value, handleClick }) => {
  const isChecked = useSelector((state) => selectIsChecked(state, value));
  const selectedType = useSelector(selectType);
  const isTypeMatch = selectedType === value;

  const filterButtonClass =
    isChecked || isTypeMatch
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
