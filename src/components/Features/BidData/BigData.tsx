import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import bigData from '../../../assets/features/bigData.png';
import dots from '../../../assets/features/dots2.svg';

const BigData = () => {
	const classes = useStyles();

	return (
		<Box className={classes.bigData}>
			<img src={dots} alt="" className={classes.dots} />
			<Typography variant="h3">Big Data Health Analysis</Typography>

			<Box sx={{ width: 'clamp(200px, 70vw, 750px)', margin: '0 auto' }}>
				<img src={bigData} alt="" className={classes.img} />
			</Box>

			<Typography>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
				sollicitudin purus tristique amet. Purus velit tincidunt turpis
				phasellus dolor consectetur augue. Commodo tincidunt tempor elit,
				facilisi porta dictum. Nibh libero augue dui in fusce ac non rhoncus.
				Pharetra duis diam habitant mauris integer. Quis eu mollis sed eu justo,
				quis amet, molestie sapien. Velit in aliquet ultricies et{' '}
			</Typography>
		</Box>
	);
};

export default BigData;
