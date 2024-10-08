import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceProps, PlacesStateProps } from './places-slice.interface';



const initialState: PlacesStateProps = {
  places: [],
  loading: false,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    fetchPlacesRequest: (state: { loading: boolean; }) => {
      state.loading = true;
    },
    fetchPlacesSuccess: (state: { places: PlaceProps[]; loading: boolean; }, action: PayloadAction<PlaceProps[]>) => {
      state.places = action.payload;
      state.loading = false;
    },
    toggleVisited: (state: { places: PlaceProps[]; }, action: PayloadAction<number>) => {
      const place = state.places.find((p: { id: any; }) => p.id === action.payload);
      if (place) {
        place.visited = !place.visited;
      }
    },
  },
});

export const { fetchPlacesRequest, fetchPlacesSuccess, toggleVisited } = placesSlice.actions;

export default placesSlice.reducer;
