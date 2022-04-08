import React from 'react';
import food from '../../assets/photo.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
	return (
		<div className='home' style={{ backgroundImage: `url(${food})` }}>
			<div className='headerContainer'>
				<h1>Christy's Corner</h1>
				<p>Get delicious delicacies on the go!</p>
				<Link to='/'>
					<button>Place order now</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
