import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import { Box } from '@mui/material';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Header />
			<Box sx={{ backgroundColor: '#f2ffff' }}>
				<About />
				<Features />
			</Box>
		</ThemeProvider>
	);
};

export default App;
