import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: "1",
    perPage: "4",
    visibleCount: 4,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    incrementVisibleCount: (state) => {
      state.visibleCount += 4;
    },
    resetVisibleCount: (state) => {
      state.visibleCount = 4;
    },
  },
});

export const { setPage, setPerPage, incrementVisibleCount, resetVisibleCount } =
  paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
