export const selectLocation = (state) => state.filters.location;
export const selectType = (state) => state.filters.type;
export const selectFeatures = (state) => state.filters.features;
export const selectIsChecked = (state, feature) =>
  state.filters.features.includes(feature);
