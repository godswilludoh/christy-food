import React from 'react';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='left'>Left</div>
			<div className='right'>
				<h1>Contact Us</h1>
				<form id='contact-form' method='Post'>
					<label htmlFor='name'>Full Name</label>
					<input type='text' name='name' placeholder='Enter your name' />

					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						placeholder='Enter your email address'
					/>
					<label htmlFor='message'>Message</label>
					<textarea
						name='message'
						rows='7'
						placeholder='Enter your message'
					></textarea>
					<button type='submit'>Send Message</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
