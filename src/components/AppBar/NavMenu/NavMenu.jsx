import clsx from "clsx";
import css from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

const isActiveLink = (path, isActive) => {
  return path === window.location.pathname && isActive;
};

const buildLinkClass = ({ isActive, isPending }) => {
  return clsx(css.link, isActive && css.active, isPending && css.pending);
};

const NavMenu = () => {
  return (
    <nav className={css.navigationContainer}>
      <ul className={css.navigationList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              buildLinkClass({ isActive: isActiveLink("/", isActive) })
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              buildLinkClass({ isActive: isActiveLink("/catalog", isActive) })
            }
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
