import createStyleSheet from "@/theme/scaled-sheet.styles";
import { Colors } from "@/types/theme/colors";
import { Fonts } from "@/types/theme/fonts";
import { moderateScale, verticalScale } from "react-native-size-matters";

const placeDetailsStyles = (colors: Colors, fonts: Fonts) => createStyleSheet({
    image: {
        width: moderateScale(320, 0.3),
        height: verticalScale(120),
        borderRadius: moderateScale(8, 0.3) 
    },
    container: {
        flex: 1,
        marginHorizontal: moderateScale(24, 0.3)
    },
    textCard: {
        width: moderateScale(330, 0.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(8),
        padding: moderateScale(8, 0.3),
        backgroundColor: colors.gray100,
        borderRadius: moderateScale(8, 0.3)
    },
    headingStyle: {
        fontSize: fonts.size_16.fontSize,
        fontWeight: fonts.bold.fontWeight,
        marginBottom: moderateScale(4, 0.3)
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(8),
        alignSelf: 'flex-end',
        marginEnd: moderateScale(26, 0.3),
        marginBottom: verticalScale(12)
    },
    checkboxText: {
        fontSize: fonts.size_12.fontSize,
        marginStart: moderateScale(4, 0.3)
    },
    placeHolder: {
        fontSize: fonts.size_16.fontSize,
    },
    descriptionView: {
        padding: moderateScale(8, 0.3),
        backgroundColor: colors.gray100,
        borderRadius: moderateScale(8, 0.3),
         marginBottom: verticalScale(8)
    }
})

export default placeDetailsStyles;