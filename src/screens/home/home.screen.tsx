import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    Text,
    View
} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import homeStyles from './home.styles';
import useHome from './use-home.hook';


const Home = () => {

	const {
		colors,
		gutters,
		fonts,
		backgrounds,
	} = useTheme();
    const styles = homeStyles(colors, fonts, gutters, backgrounds );

  const { places, loading, handleToggleVisited, navigateToPlaceDetails, suggestRandomPlace } = useHome();

  const renderPlace = ({ item }: any) => (
    <View style={styles.cardContainer}>
        <Image source={{uri: item.image}} style={styles.image}/>
        <View style={styles.detailsView}>
            <View style={styles.headingView}>
                <Text style={styles.placeName}>{item.name}</Text>
                <Pressable
                    style={styles.viewDetailsBtn}
                    onPress={() => navigateToPlaceDetails(item.id)}
                >
                    <Text>{"View Details"}</Text>
                </Pressable>
            </View>
            <Pressable style={styles.checkbox}
             onPress={() => handleToggleVisited(item.id)}>
                <MaterialIcons
                    name={item.visited ? 'check-box' : 'check-box-outline-blank'}
                    size={moderateScale(20)}
                    color={item.visited ? colors.green100 : colors.gray800}
                />
                <Text style={styles.checkboxText}>{item.visited ? 'Visited' : 'Not Visited'}</Text>
            </Pressable>
      </View>
    </View>
  );

	return (
		<SafeScreen>
			<ScrollView>
                {loading && <ActivityIndicator color={colors.gray50} />}
			    <View style={styles.container}>
                    <Pressable style={styles.suggestedPlaceView}
                        onPress={() => suggestRandomPlace()}>
                        <Text style={styles.suggestedPlaceText}>{'Suggested Place'}</Text>
                    </Pressable>
                    <FlatList
                        data={places}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderPlace}
                    />
                </View>
            </ScrollView>
        </SafeScreen>
    );
}

export default Home;
