import createStyleSheet from "@/theme/scaled-sheet.styles";
import { Backgrounds } from "@/types/theme/backgrounds";
import { Colors } from "@/types/theme/colors";
import { Fonts } from "@/types/theme/fonts";
import { Gutters } from "@/types/theme/gutters";
import { moderateScale, verticalScale } from "react-native-size-matters";

const homeStyles = (colors: Colors, fonts: Fonts, gutters: Gutters, backgrounds: Backgrounds) => createStyleSheet({
    container: 
        [gutters.paddingHorizontal_32, gutters.marginTop_12],
    cardContainer: { 
        marginVertical: verticalScale(12), 
        flexDirection: 'row', 
        alignItems: "center",
        backgroundColor: colors.gray100,
        padding: moderateScale(8, 0.3),
        borderRadius: moderateScale(8, 0.3)
    },
    image: {
        width: moderateScale(100, 0.3), 
        height: moderateScale(100, 0.3), 
        borderRadius: moderateScale(8, 0.3)
    },
    detailsView: {
        marginHorizontal: moderateScale(8, 0.3),
        flex: 1,
    },
    headingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewDetailsBtn: {
        borderRadius: moderateScale(4, 0.3),
        borderWidth: moderateScale(1),
        borderColor: colors.gray800,
        padding: moderateScale(2, 0.3),
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(14)
    },
    placeName: {
        fontSize: fonts.size_16.fontSize,
    },
    checkboxText: {
        fontSize: fonts.size_12.fontSize,
        marginStart: moderateScale(4, 0.3)
    },
    suggestedPlaceView: {
        alignSelf: "flex-end",
        marginVertical: moderateScale(8),
        paddingVertical: moderateScale(4),
        paddingHorizontal: moderateScale(8, 0.4),
        borderRadius: moderateScale(4, 0.3),
        borderWidth: moderateScale(1),
    },
    suggestedPlaceText: {
        fontSize: fonts.size_16.fontSize,
        fontWeight: fonts.bold.fontWeight
    }
})

export default homeStyles;