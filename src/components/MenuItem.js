import React from 'react';

const MenuItem = ({ image, name, price }) => {
	return (
		<div>
			<div className='menu-item'>
				<div style={{ backgroundImage: `url(${image})` }}>
					<h1>{name}</h1>
					<p>#{price}</p>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
