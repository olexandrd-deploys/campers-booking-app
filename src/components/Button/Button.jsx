import css from "./Button.module.css";

const Button = ({ children, clickHandler = null, type = "button" }) => {
  if (clickHandler) {
    return (
      <button type={type} className={css.button} onClick={clickHandler}>
        {children}
      </button>
    );
  } else {
    return (
      <button type={type} className={css.button}>
        {children}
      </button>
    );
  }
};

export default Button;
