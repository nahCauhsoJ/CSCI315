import React, { useState } from 'react';



const UserForm = (props) => {
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cfpassword, setCfPassword] = useState("");
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
	
	const [firstname_error, setFirstNameError] = useState("");
	const [lastname_error, setLastNameError] = useState("");
	const [email_error, setEmailError] = useState("");
	const [password_error, setPasswordError] = useState("");
	const [cfpassword_error, setCfPasswordError] = useState("");
	
	const [d_firstname, dispFirstName] = useState("");
	const [d_lastname, dispLastName] = useState("");
	const [d_email, dispEmail] = useState("");
	const [d_password, dispPassword] = useState("");
	const [d_cfpassword, dispCfPassword] = useState("");
	
	const validateFirstName = (e) => {
		setFirstName(e);
		dispFirstName(e);
		if (e.length < 1) {
			setFirstNameError("What. Nobody gave you a first name?");
		} else if (e.length < 2) {
			setFirstNameError("C'mon... Who the h*** name their child with 1 character?");
		} else {
			setFirstNameError("");
			return true;
		}
		return false;
	};
	
	const validateLastName = (e) => {
		setLastName(e);
		dispLastName(e);
		if (e.length < 1) {
			setLastNameError("What. You don't have a last name?");
		} else if (e.length < 2) {
			setLastNameError("Name me a family name with only 1 character. Wait, you did? Nonsense!");
		} else {
			setLastNameError("");
			return true;
		}
		return false;
	};
	
	const validateEmail = (e) => {
		setEmail(e);
		dispEmail(e);
		if (e.length < 5) {
			setEmailError("Name me an email with less than 5 characters. Wait, you did? NONSENSE");
		} else if (!e.includes('@') || !e.includes('.')) {
			setEmailError("You know what an email address is, right...?");
		} else {
			setEmailError("");
			return true;
		}
		return false;
	};
	
	const validatePassword = (e) => {
		setPassword(e);
		dispPassword(e);
		if (e.length < 8) {
			setPasswordError("C'mon. I'm sure you don't wanna be hacked... Make it longer than 7 words!");
		} else {
			setPasswordError("");
			return true;
		}
		return false;
	};
	
	const validateCfPassword = (e) => {
		setCfPassword(e);
		dispCfPassword(e);
		if (e != password) {
			setCfPasswordError("What. You already forgot the password?");
		} else {
			setCfPasswordError("");
			return true;
		}
		return false;
	};
	
	const validateAll = (e) => {
		e.preventDefault();
		var vfn = validateFirstName(firstname);
		var vln = validateLastName(lastname);
		var ve = validateEmail(email);
		var vp = validatePassword(password);
		var vcp = validateCfPassword(cfpassword);
		
		if (vfn && vln && ve && vp && vcp) {
			createUser(e);
		}
	};
	
	const createUser = (e) => {
		alert("Assume something has been submited successfully...");
		setHasBeenSubmitted(true);
		
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setCfPassword("");
		dispFirstName("");
		dispLastName("");
		dispEmail("");
		dispPassword("");
		dispCfPassword("");
	};
	
	const formMessage = () => {
		if( hasBeenSubmitted ) {
			return "Thank you for submitting the form!";
		} else {
			return "Welcome, please submit the form";
		}
	};



	return(
	<div>
		<form onSubmit={ validateAll }>
		
			{
				hasBeenSubmitted ?
				<h3>Thank you for submitting the form!</h3>:
				<h3>Welcome, please submit the form.</h3>
			}

		
			<div className="formbox_1">
				<label>First Name </label>
				<input type="text" onChange={
						(e) => validateFirstName(e.target.value)
					} value={firstname} id="form_firstname"
				/>
			</div>
			{ firstname_error ?
				<span className='formbox_error'>{ firstname_error }</span> : ''
			}
			<br/>
			
			<div className="formbox_1">
				<label>Last Name </label>
				<input type="text" onChange={
						(e) => validateLastName(e.target.value)
					} value={lastname} id="form_lastname"
				/>
			</div>
			{ lastname_error ?
				<span className='formbox_error'>{ lastname_error }</span> : ''
			}
			<br/>
			
			<div className="formbox_1">
				<label>Email </label>
				<input type="text" onChange={
						(e) => validateEmail(e.target.value)
					} value={email} id="form_email"
				/>
			</div>
			{ email_error ?
				<span className='formbox_error'>{ email_error }</span> : ''
			}
			<br/>
			
			<div className="formbox_1">
				<label>Password </label>
				<input type="text" onChange={
						(e) => validatePassword(e.target.value)
					} value={password} id="form_password"
				/>
			</div>
			{ password_error ?
				<span className='formbox_error'>{ password_error }</span> : ''
			}
			<br/>
			
			<div className="formbox_1">
				<label>Confirm Password </label>
				<input type="text" onChange={
						(e) => validateCfPassword(e.target.value)
					} value={cfpassword} id="form_cfpassword"
				/>
			</div>
			{ cfpassword_error ?
				<span className='formbox_error'>{ cfpassword_error }</span> : ''
			}
			<br/>
			
			<input id="submit_btn" type="submit" value="Create User" />
						
		</form>
		
			<div className="formbox_2">
				<p>Your Form Data</p>
				
				<div>
					<div>
						<label>First Name</label>
						<span>{d_firstname}</span>
					</div>
					<div>
						<label>Last Name</label>
						<span>{d_lastname}</span>
					</div>
					<div>
						<label>Email</label>
						<span>{d_email}</span>
					</div>
					<div>
						<label>Password</label>
						<span>{d_password}</span>
					</div>
					<div>
						<label>Confirm Password</label>
						<span>{d_cfpassword}</span>
					</div>
				</div>
			</div>
	</div>		
		
	);
};



export default UserForm;