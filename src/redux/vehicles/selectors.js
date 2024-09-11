import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.vehicles.items;
export const selectIsLoading = (state) => state.vehicles.loading;
export const selectError = (state) => state.vehicles.error;

export const selectLocation = createSelector([selectCampers], (campers) =>
  campers
    .map((item) => ({
      value: item.location,
      label: item.location,
    }))
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.value === item.value)
    )
);
