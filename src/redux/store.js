import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { vehiclesReducer } from "./vehicles/slice";
import { filtersReducer } from "./filters/slice";
import { favoritesReducer } from "./favorites/slice";
import { appliedFiltersReducer } from "./appliedFilters/slice";
import { paginationReducer } from "./pagination/slice";

const persistConfig = {
  key: "favoriteCampers",
  storage,
};

const persistedFavoriteReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
  filters: filtersReducer,
  favorites: persistedFavoriteReducer,
  appliedFilters: appliedFiltersReducer,
  pagination: paginationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
