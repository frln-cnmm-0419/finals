import React from 'react'
import imgnf from '../assets/images/404.jpg'
import '../stylings/404.scss'
// import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="notFoundWrapper">
			<img src={imgnf} alt='error-icon' />
			<div className="errorText">
				<h1>Your Requested Page Not Found.</h1>
				<h3>Check the link you're visiting wether there is/are a typo.</h3>
				<button>Go to Home</button>
			</div>
		</div>
	)
}

// exporting the funtion component
export default NotFound