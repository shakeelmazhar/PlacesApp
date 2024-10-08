import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

import Home from '@/screens/home/home.screen';
import PlaceDetails from '@/screens/place/place-details.screen';
import type { RootStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();
	// Define deep linking configuration
	const linking: LinkingOptions = {
	prefixes: ['https://placesapp.com', 'placesapp://',],  // Custom URL scheme, e.g., myapp://
	config: {
		screens: {
			Home: 'Home', // Example: myapp://home
      		PlaceDetails: 'PlaceDetails/:placeId', // Example: myapp://details/123
			// Home: {
			// 	path: 'Home',
			// },
			// PlaceDetails: {
			// 	path: 'PlaceDetails/:placeId?',
			// 	parse: {
			// 	id: (id: String) => `${id}`,
			// 	},
			// },
		},
	},
	};
	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme} linking={linking}>
				<Stack.Navigator key={variant} initialRouteName='Home' screenOptions={{ headerShown: true }}>
					<Stack.Screen name="Home" component={Home} options={{ title: 'Places' }} />
					<Stack.Screen name="PlaceDetails" component={PlaceDetails}  options={{ title: 'Place Details' }}/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;
