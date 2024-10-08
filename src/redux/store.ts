import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchPlacesEpic } from './epics';
import placesReducer from './places-slice';

// Create the Epic Middleware
const epicMiddleware = createEpicMiddleware();

// Configure the store
const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  // Using getDefaultMiddleware to add epicMiddleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

// Run the Epics
epicMiddleware.run(combineEpics(fetchPlacesEpic));

export default store;
