import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import NavMenu from "../NavMenu/NavMenu";

const AppBar = () => {
  return (
    <div className={css.AppBar}>
      <NavLink to="/" className={css.link}>
        <svg className={css.logo}>
          <use href="/icons.svg#logo"></use>
        </svg>
      </NavLink>
      <NavMenu />
    </div>
  );
};

export default AppBar;
