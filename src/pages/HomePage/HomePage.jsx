import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.description}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
      </div>
    </div>
  );
};

export default HomePage;
