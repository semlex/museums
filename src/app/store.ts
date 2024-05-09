import { districtApi } from '@/entities/district';
import { museumApi } from '@/entities/museum';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [districtApi.reducerPath]: districtApi.reducer,
  [museumApi.reducerPath]: museumApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(districtApi.middleware, museumApi.middleware),
});
