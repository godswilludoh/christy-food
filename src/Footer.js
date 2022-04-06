import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../src/'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='socials'>
				<TwitterIcon />
				<InstagramIcon />
				<FacebookIcon />
				<LinkedInIcon />
				<p>&copy; 2022 christyscorner.com</p>
			</div>
		</div>
	);
};

export default Footer;
