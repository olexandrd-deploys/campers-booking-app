import { useDispatch, useSelector } from "react-redux";
import { selectFilteredCampers } from "../../../redux/vehicles/selectors";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import Button from "../../Button/Button";
import { selectVisibleCount } from "../../../redux/pagination/selectors";
import { incrementVisibleCount } from "../../../redux/pagination/slice";

const SearchResultList = () => {
  const dispatch = useDispatch();
  const campersArray = useSelector(selectFilteredCampers);
  const visibleCount = useSelector(selectVisibleCount);

  const loadMore = () => {
    dispatch(incrementVisibleCount());
  };

  return (
    <div>
      {campersArray.slice(0, visibleCount).map((camper) => (
        <SearchResultItem key={camper.id} camper={camper} />
      ))}

      {visibleCount < campersArray.length && (
        <Button clickHandler={loadMore}>Load More</Button>
      )}
    </div>
  );
};

export default SearchResultList;
