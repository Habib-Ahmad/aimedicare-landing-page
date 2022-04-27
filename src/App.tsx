import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import About from './components/About/About';
import TriageSystem from './components/TriageSystem/TriageSystem';
import BigData from './components/BigData/BigData';
import Security from './components/Security/Security';
import EarlyAccess from './components/EarlyAccess/EarlyAccess';
import Contact from './components/Contact/Contact';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import './aos';
import IOMT from './components/IOMT/IOMT';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Header />
			<Features />
			<About />
			<IOMT />
			<TriageSystem />
			<BigData />
			<Security />
			<EarlyAccess />
			<Contact />
			<Partners />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
