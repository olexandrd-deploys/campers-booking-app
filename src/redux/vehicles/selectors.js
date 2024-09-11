import { createSelector } from "@reduxjs/toolkit";
import { selectFeatures, selectType } from "../filters/selectors";

export const selectCampers = (state) => state.vehicles.items;
export const selectIsLoading = (state) => state.vehicles.loading;
export const selectError = (state) => state.vehicles.error;

export const selectLocation = createSelector([selectCampers], (campers) =>
  campers
    .map((item) => ({
      value: item.location,
      label: item.location.split(", ").reverse().join(", "),
    }))
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.value === item.value)
    )
);

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocation, selectType, selectFeatures],
  (campers, location, type, features) => {
    return campers.filter(
      (camper) =>
        (location === "" || camper.location === location) &&
        (type === "" || camper.type === type) &&
        (features.length === 0 ||
          features.every((f) => camper.features.includes(f)))
    );
  }
);
