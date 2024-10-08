import { useTheme } from '@/theme';
import type { PropsWithChildren } from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function SafeScreen({ children }: PropsWithChildren) {
	const { layout, variant, navigationTheme, backgrounds } = useTheme();
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				layout.flex_1,
				{
					backgroundColor: navigationTheme.colors.background,
					// Paddings to handle safe area
					paddingBottom: insets.bottom,
					paddingLeft: insets.left,
					paddingRight: insets.right,
				},
			]}
		>
			<StatusBar
				barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={navigationTheme.colors.background}
			/>
			{children}
		</View>
	);
}

export default SafeScreen;
