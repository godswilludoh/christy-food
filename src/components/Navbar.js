import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import '../components/styles/Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='left'>
				<img src={logo} alt='christy logo' />
			</div>
			<div className='right'>
				<Link to='/'>Home</Link>
				<Link to='/'>Menu</Link>
				<Link to='/'>About Us</Link>
				<Link to='/'>Contact Us</Link>
			</div>
		</div>
	);
};

export default Navbar;
