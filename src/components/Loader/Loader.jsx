import { LineWave } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <LineWave
      color="#e44848"
      height={150}
      width={150}
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
