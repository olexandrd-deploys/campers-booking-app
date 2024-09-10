import css from "./FiltersButton.module.css";

const FiltersButton = ({ filterName, icon }) => {
  return (
    <button className={css.filterButton}>
      <svg className={css.icon}>
        <use href={`/icons.svg${icon}`}></use>
      </svg>
      <p className={css.description}>{filterName}</p>
    </button>
  );
};

export default FiltersButton;
