import React from 'react'
import loadingvid from '../assets/videos/loading.gif'
import '../stylings/loading.scss'
import '../stylings/global.scss'

const LoadSignup = () => {
	return (
	  <div className="loading">
		  <img src={ loadingvid } alt="loading" />
			<div className="loadingText">
			  <p>Connecting to Firebase Server. This may take a couple of seconds. Please Wait.</p>
			</div>
		</div>
	)
}

export default LoadSignup