import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import bigData from '../../../assets/features/bigData.png';
import dots from '../../../assets/features/dots2.svg';
import blob from '../../../assets/features/blob2.svg';

const BigData = () => {
	const classes = useStyles();

	return (
		<Box className={classes.bigData}>
			<img src={dots} alt="" className={classes.dots} />
			<img src={blob} alt="" className={classes.blob} />
			<Typography variant="h3" data-aos="fade-up">
				Big Data Health Analysis
			</Typography>

			<Box data-aos="fade-up">
				<img src={bigData} alt="" className={classes.img} />
			</Box>

			<Typography className={classes.txt} data-aos="fade-up">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
				sollicitudin purus tristique amet. Purus velit tincidunt turpis
				phasellus dolor consectetur augue. Commodo tincidunt tempor elit,
				facilisi porta dictum. Nibh libero augue dui in fusce ac non rhoncus.
				Pharetra duis diam habitant mauris integer. Quis eu mollis sed eu justo,
				quis amet, molestie sapien. Velit in aliquet ultricies et
			</Typography>
		</Box>
	);
};

export default BigData;
