import { fetchPlacesRequest, toggleVisited } from '@/redux/places-slice';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useHome = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Fetch places from the Redux store
  const places = useSelector((state: any) => state.places.places);
  const loading = useSelector((state: any) => state.places.loading);

  // Fetch places when the component is mounted
  useEffect(() => {
    dispatch(fetchPlacesRequest());
  }, [dispatch]);

  // Toggle the visited status of a place
  const handleToggleVisited = (id: number) => {
    dispatch(toggleVisited(id));
  };

  // Navigate to the details screen
  const navigateToPlaceDetails = (id: string | number) => {
    navigation.navigate('PlaceDetails', { placeId: id });
  };

  // Suggest a random place
  const suggestRandomPlace = () => {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    navigateToPlaceDetails(randomPlace.id);
  };

  // Get place by id
  const getPlcaeById = (id: string | number) => {
    const place = places.filter((item: any) => item.id === id);
    return place[0] || {}
  }

  return {
    places,
    loading,
    handleToggleVisited,
    navigateToPlaceDetails,
    suggestRandomPlace,
    getPlcaeById
  };
};

export default useHome;