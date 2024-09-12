export const selectIsChecked = (state, feature) =>
  state.filters.features.includes(feature);
export const selectType = (state) => state.filters.type;
export const selectSelectedFIlers = (state) => state.filters;
