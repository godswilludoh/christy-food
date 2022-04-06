import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import '../components/styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
	const [openLinks, setOpenLinks] = useState(false);

	const toggleNavbar = () => {
		setOpenLinks(!openLinks);
	};
	return (
		<div className='navbar'>
			<div className='left' id={openLinks ? 'open' : 'close'}>
				<img src={logo} alt='christy logo' />
				<div className='hiddenLinks'>
					<Link to='/'>Home</Link>
					<Link to='/'>Menu</Link>
					<Link to='/'>About Us</Link>
					<Link to='/'>Contact Us</Link>
				</div>
			</div>
			<div className='right'>
				<Link to='/'>Home</Link>
				<Link to='/'>Menu</Link>
				<Link to='/'>About Us</Link>
				<Link to='/'>Contact Us</Link>
				<button onClick={toggleNavbar}>
					<MenuIcon />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
