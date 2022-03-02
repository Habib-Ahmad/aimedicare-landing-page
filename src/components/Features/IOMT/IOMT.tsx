import { useState } from 'react';
import {
	Box,
	Grid,
	IconButton,
	Typography,
	useMediaQuery
} from '@mui/material';
import { useStyles } from './useStyles';
import Slider, { Settings } from 'react-slick';
import watchWithStats from '../../../assets/features/watchWithStats.png';
import watch1 from '../../../assets/features/watch1.png';
import watch2 from '../../../assets/features/watch2.png';
import watch3 from '../../../assets/features/watch3.png';
import watch4 from '../../../assets/features/watch4.png';
import watch5 from '../../../assets/features/watch5.png';
import btn from '../../../assets/features/btn.svg';
import active from '../../../assets/features/active.svg';

const NextArrow = ({ onClick }: any) => {
	const classes = useStyles();
	return (
		<IconButton
			className={`${classes.arrow} ${classes.next}`}
			onClick={onClick}
		>
			<img src={btn} alt="" style={{ width: 10 }} />
		</IconButton>
	);
};

const PrevArrow = ({ onClick }: any) => {
	const classes = useStyles();
	return (
		<IconButton
			className={`${classes.arrow} ${classes.prev}`}
			onClick={onClick}
		>
			<img src={btn} alt="" style={{ width: 10 }} />
		</IconButton>
	);
};

const IOMT = (): JSX.Element => {
	const classes = useStyles();
	const [imageIndex, setImageIndex] = useState(0);

	const watches = [watch1, watch2, watch3, watch4, watch5];
	const isDesktop = useMediaQuery('(min-width: 900px)');

	const settings: Settings = {
		infinite: true,
		vertical: isDesktop ? true : false,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0px',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: () => <PrevArrow />,
		beforeChange: (current: number, next: number) => setImageIndex(next)
	};

	return (
		<Box className={classes.iomt}>
			<Typography variant="h3">Internet of Medical Things</Typography>

			<Grid container alignItems="center" justifyContent="center">
				<Grid item xs={12} md={8}>
					<Box className={classes.leftWrapper}>
						{/* <img src={stats} alt="" style={{ width: 200 }} /> */}
						<img src={watches[imageIndex]} alt="" style={{ width: 300 }} />
						<Typography>
							Real time monitoring of health vitals using wearable technology
							with an option of connecting to your Doctor
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} md={4}>
					<Grid item xs={12} md={10}>
						<Box className={classes.sliderWrapper}>
							<Slider lazyLoad="ondemand" {...settings}>
								{watches.map((img, idx) => (
									<div
										key={img}
										className={
											idx === imageIndex
												? `${classes.slide} ${classes.activeSlide}`
												: classes.slide
										}
									>
										<img src={img} alt={img} />
									</div>
								))}
							</Slider>
							{/* <IconButton className={classes.active}> */}
							<img src={active} alt={active} className={classes.active} />
							{/* </IconButton> */}
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default IOMT;
