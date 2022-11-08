import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbarWrapper">
			<Link to="/">Home</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/about">About</Link>
		</div>	
	)
}

export default Navbar