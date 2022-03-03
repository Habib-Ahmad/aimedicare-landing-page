import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { Box } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './aos';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Header />
			<Box sx={{ backgroundColor: '#f2ffff' }}>
				<About />
				{/* <Features /> */}
				<Partners />
				<Contact />
				<Footer />
			</Box>
		</ThemeProvider>
	);
};

export default App;
