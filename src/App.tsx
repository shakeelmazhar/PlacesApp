import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';

import store from '@/redux/store';
import { Provider } from 'react-redux';
import ApplicationNavigator from './navigators/navigation';
import './translations';

export const queryClient = new QueryClient();

export const storage = new MMKV();

const App = () => {

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<ThemeProvider storage={storage}>
					<ApplicationNavigator />
				</ThemeProvider>
			</Provider>
		</QueryClientProvider>
	);
}

export default App;
