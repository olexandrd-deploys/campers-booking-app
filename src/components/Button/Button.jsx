import css from "./Button.module.css";

const Button = ({ children, clickHandler = null }) => {
  if (clickHandler) {
    return (
      <button className={css.button} onClick={clickHandler}>
        {children}
      </button>
    );
  } else {
    return <button className={css.button}>{children}</button>;
  }
};

export default Button;
