import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.description}>
        <div className={css.title}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <NavLink to="/catalog">
          <Button>View Now</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
