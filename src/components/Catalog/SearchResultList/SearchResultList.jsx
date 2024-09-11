import { useSelector } from "react-redux";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import { selectCampers } from "../../../redux/vehicles/selectors";

const SearchResultList = () => {
  const campersArray = useSelector(selectCampers);

  return (
    <div>
      {campersArray.length > 0 &&
        campersArray.map((camper) => (
          <SearchResultItem key={camper.id} camper={camper} />
        ))}
    </div>
  );
};

export default SearchResultList;
