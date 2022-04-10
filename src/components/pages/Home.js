import React from 'react';
import { Link } from 'react-router-dom';
import food from '../../assets/photo.jpeg';
import '../styles/Home.css';

const Home = () => {
	return (
		<div className='home' style={{ backgroundImage: `url(${food})` }}>
			<div className='header-container'>
				<h1 style={{ fontWeight: 'bold' }}>Christy's Corner</h1>
				<p>Get delicious delicacies on the go!</p>
				<Link to='/menu'>
					<button>Place order now</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
