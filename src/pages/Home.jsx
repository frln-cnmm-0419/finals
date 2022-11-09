import React from 'react'
import '../stylings/home.scss'
import info from '../assets/images/info.png'
import qm from '../assets/images/qm.png'
import loc from '../assets/images/location.png'
import hero from '../assets/images/hero.png'
// import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className="homeWrapper">
			<div className='blobWrapper'>
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path fill="#F4A900" d="M61.9,-60.7C77.7,-46,86.3,-23,85.7,-0.6C85.2,21.9,75.4,43.8,59.6,52.4C43.8,61.1,21.9,56.4,0.9,55.5C-20,54.5,-40.1,57.3,-54.9,48.7C-69.7,40.1,-79.2,20,-76.8,2.4C-74.5,-15.2,-60.1,-30.5,-45.3,-45.1C-30.5,-59.7,-15.2,-73.7,3.9,-77.6C23,-81.5,46,-75.3,61.9,-60.7Z" transform="translate(100 100)" />
				</svg>
			</div>

			<div className='contentWrapper'>
				<div className='smallNav'>
					<button><img src={ qm } alt='frequently asked question' /></button>
					<button><img src={ info } alt='about us'/></button>
					<button><img src={ loc } alt='stores'/></button>
				</div>

				<div className='name'>
					<h1>ONLINE</h1>
					<h1>TUHOG - TUSOK</h1>
					<p>Taste the yummiest snacks of all the time!</p>
					<p>Easy to order, you don't need to go</p>
					<p>outside for your safety, your food will</p>
					<p>simply knock to your door!</p>
					<div className='cta'>
						<button>ORDER NOW</button>
					</div>
				</div>
			</div>

			<div className="hero">
				<img src={ hero } alt="hero" />
			</div>
		</div>
		
	)
}

export default Home