import { Image, Pressable, Text, View } from 'react-native';

import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

import useHome from '@/screens/home/use-home.hook';
import type { RootScreenProps } from '@/types/navigation';
import { moderateScale } from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import placeDetailsStyles from './place-details.style';

const PlaceDetails = ({ navigation, route }: RootScreenProps<'PlaceDetails'>) => {
	const { layout, gutters, fonts, colors } = useTheme();
	const { placeId } = route.params;
	const styles = placeDetailsStyles(colors, fonts)
	const { handleToggleVisited, getPlcaeById } = useHome();
	const place = getPlcaeById(placeId)

	return (
		<SafeScreen>
			<View
				style={[
					layout.flex_1,
					layout.col,
					layout.itemsCenter,
					// layout.justifyCenter,
					gutters.marginTop_24
				]}
			>
				<Image source={{uri: place.image}} style={styles.image}  />
				<Pressable style={styles.checkbox}
					onPress={() => handleToggleVisited(place.id)}>
					<MaterialIcons
						name={place.visited ? 'check-box' : 'check-box-outline-blank'}
						size={moderateScale(20)}
						color={place.visited ? colors.green100 : colors.gray800}
					/>
					<Text style={styles.checkboxText}>{place.visited ? 'Visited' : 'Not Visited'}</Text>
				</Pressable>

				<View style={styles.container}>

					<View style={styles.textCard}>
						<Text style={styles.placeHolder}>{"Place Name"}</Text>
						<Text>{place.name}</Text>
					</View>

					<View style={styles.textCard}>
						<Text style={styles.placeHolder}>{"Country"}</Text>
						<Text>{place.country}</Text>
					</View>


					<View style={styles.descriptionView}>
						<Text style={styles.headingStyle}>{"Best time to visit"}</Text>
						<Text>{place.best_time_to_visit}</Text>
					</View>


					<View style={styles.descriptionView}>
						<Text style={styles.headingStyle}>{"Short description"}</Text>
						<Text>{place.description}</Text>
					</View>
				</View>
			</View>
		</SafeScreen>
	);
}

export default PlaceDetails;
