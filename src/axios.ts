import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://aimedicare-test-backend.herokuapp.com/api/v1',
	headers: {
		'content-type': 'application/json'
	}
});

export default instance;
