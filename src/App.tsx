import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Header />
			<About />
		</ThemeProvider>
	);
};

export default App;
