import React from 'react';
import '../styles/RecoveryPassword.scss'

const RecoveryPassword = () => {
    return (
        <div className="Recovery-Password">
			<div className="Recovery-Password-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="Recovery-Password-logo" />
				<h1 className="Recovery-Password-title">Password recovery</h1>
				<p className="Recovery-Password-subtitle">Inform the email address used to create your account</p>
				<form action="/" className="Recovery-Password-form">
					<label htmlFor="email" className="Recovery-Password-label">Email address</label>
					<input type="text" id="email" className="Recovery-Password-input Recovery-Password-input-email" />
					<input type="submit" value="Confirm" className="Recovery-Password-primary-button Recovery-Password-login-button" />
				</form>
			</div>
		</div>  
    );
}

export default RecoveryPassword;



