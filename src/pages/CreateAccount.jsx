import React from 'react'
// import { Link } from 'react-router-dom' // importing the router button for redirection
import { useRef, useState } from 'react' // importing the useref to reference the value of textfield when clicking the button
import { signup } from '../firebase' // importing the signup function inside the firebase.jsx
import '../stylings/global.scss' //importing global style to apply the reset
import '../stylings/createAccount.scss' // importing the style to apply the styling for this component
import LoadSignup from '../components/SignupLoading' // importing the loading component

const CreateAccount = () => {
	// creating an instance of email ref and password reference
	const emailRef = useRef()
	const passwordRef = useRef()

	const [ loading, setLoading ] = useState(false)

	// creating the function that will run when the user click the signup button
	async function handleSignup() {
		try {
			setLoading(!(loading))
			await signup(emailRef.current.value, passwordRef.current.value)
		} catch { // this is to handle errors when creatng new account using the same email address
		  console.log("Something went wrong. Please try again.")
			setLoading(!(loading))
		}
    setLoading(!(loading))
	}
  /*
  const [ load, setLoad ] = useState(false)
  function handleLoad() {
    console.log("update")
		setLoad(!(load))
	} */
	
	return (
		// entire container for the signup page  
		<div className="container">
			{loading === true ? <LoadSignup /> : ""}
			<div className="signupWrapper">
				
				<div className="comp-desc">
					<div className='desc'>
						<h1>TUHOG TUSOK</h1>
						<h6>Masarap pati Stick</h6>
					</div>
					<div className="sub-desc">
						<h5>Please Sign Up to Continue</h5>
					</div>
				</div>

				<div className="inputArea">
					<div className="formArea">
						<input type="text" placeholder="Nickname" />
						<input type="number" placeholder="Age"/>
						<input ref={emailRef} placeholder="Email" type="email" />
						<input ref={passwordRef} placeholder="Password" type="password" />
						<button className="submit"onClick={handleSignup}>Sign Up</button>
					</div>

					<div className="noAccount">
						<h3>Already have an Account?</h3>
						<button className="toLi">Log In</button>
					</div>
				</div>
			</div>
	  </div>
	)
}

// export the component
export default CreateAccount