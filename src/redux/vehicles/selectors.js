import { createSelector } from "@reduxjs/toolkit";
import {
  selectFeatures,
  selectLocation,
  selectType,
} from "../appliedFilters/selectors";

export const selectCampers = (state) => state.vehicles.items;
export const selectIsLoading = (state) => state.vehicles.loading;
export const selectError = (state) => state.vehicles.error;
export const selectCamperById = (state, camperId) =>
  state.vehicles.items.find((item) => item.id === camperId);

export const selectRawLocation = createSelector([selectCampers], (campers) =>
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
    if (location === "" && type === "" && features.length === 0) {
      return campers;
    }

    return campers.filter((camper) => {
      const locationMatch = location === "" || camper.location === location;
      const typeMatch = type === "" || camper.form === type;
      const featuresMatch =
        features.length === 0 ||
        features.every((feature) => {
          if (feature === "automatic" || feature === "manual") {
            return camper.transmission === feature;
          }
          return camper[feature] === true;
        });

      return locationMatch && typeMatch && featuresMatch;
    });
  }
);
