import Particles from 'react-tsparticles';

const Particle = () => {
	return (
		<Particles
			options={{
				background: {
					color: undefined
				},
				fpsLimit: 60,
				interactivity: {
					detectsOn: 'window',
					events: {
						onHover: {
							enable: true,
							mode: 'repulse'
						},
						resize: true
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 20
						},
						push: {
							quantity: 4
						},
						repulse: {
							distance: 100,
							duration: 0.4
						}
					}
				},
				particles: {
					color: {
						value: '#fff'
					},
					links: {
						color: '#fff',
						distance: 100,
						enable: true,
						opacity: 0.1,
						width: 1
					},
					collisions: {
						enable: false
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: false,
						speed: 1,
						straight: false
					},
					number: {
						density: {
							enable: true,
							value_area: 1000
						},
						value: 30
					},
					opacity: {
						value: 0.1
					},
					shape: {
						type: 'circle'
					},
					size: {
						random: true,
						value: 30
					}
				},
				detectRetina: true
			}}
		/>
	);
};

export default Particle;
