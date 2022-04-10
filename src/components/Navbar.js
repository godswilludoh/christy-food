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
				<Link to='/'>
					<img src={logo} alt='christy logo' />
				</Link>

				<div className='hiddenLinks'>
					<Link to='/'>Home</Link>
					<Link to='/menu'>Menu</Link>
					<Link to='/about'>About Us</Link>
					<Link to='/contact'>Contact Us</Link>
				</div>
			</div>
			<div className='right'>
				<Link to='/'>Home</Link>
				<Link to='/menu'>Menu</Link>
				<Link to='/about'>About Us</Link>
				<Link to='/contact'>Contact Us</Link>
				<button onClick={toggleNavbar}>
					<MenuIcon />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
