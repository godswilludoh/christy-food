import React from 'react';
import { Data } from '../data/Data';
import MenuItem from '../MenuItem';
import '../styles/Menu.css';

const Menu = () => {
	return (
		<div className='menu'>
			<div className='menu-title'>
				<div className='menu-list'>
					{Data.map((menuItem) => {
						return (
							<MenuItem
								key={menuItem.id}
								image={menuItem.image}
								name={menuItem.name}
								price={menuItem.price}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Menu;
