import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({
  children,
  clickHandler = null,
  type = "button",
  customStyles = null,
}) => {
  const buttonClass = clsx(css.button, customStyles ? css[customStyles] : "");

  if (clickHandler) {
    return (
      <button type={type} className={buttonClass} onClick={clickHandler}>
        {children}
      </button>
    );
  } else {
    return (
      <button type={type} className={buttonClass}>
        {children}
      </button>
    );
  }
};

export default Button;
