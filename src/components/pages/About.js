import React from 'react';
import AboutImage from '../../assets/aboutimage.jpg';
import '../styles/About.css';

const About = () => {
	return (
		<div className='about'>
			<div
				className='about-top'
				style={{ backgroundImage: `url(${AboutImage})` }}
			></div>
			<div className='about-bottom'>
				<h1>About Us</h1>
				<p>
					Welcome to Christy's corner - order luxury food with just a click...
				</p>
				<p>
					The <strong>Christy's corner</strong> story began in 2019 when the
					very need of a mobile restaurant was paramount in Nigeria, but the
					stage was set long before…
				</p>
			</div>
		</div>
	);
};

export default About;
