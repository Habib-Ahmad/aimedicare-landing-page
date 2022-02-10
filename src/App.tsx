import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Header />
		</ThemeProvider>
	);
};

export default App;
