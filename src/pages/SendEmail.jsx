import React from 'react'
import '../styles/SendEmail.scss'

const SendEmail = () => {
    return (
        <div className="send-email-login">
            <div className="send-email-form-container">
                <img src="./Logos/logo_yard_sale.svg" alt="logo" className="send-email-logo"/>

            <h1 className="send-email-title">Email has been sent!</h1> 
            <p className="send-email-subtitle">Please check your inbox for instructions on how to reset the password</p>

            <div className="send-email-image">
                    <img src="./Icons/email.svg" alt="email"/>
            </div>
            <button className="send-email-primary-button send-email-login-button">Login</button> 

            <p className="send-email-resend">
                    <span>Didn´t receive the email?</span>
                    <a href="/">Resend</a>
            </p>
            </div>
            
        </div>
    );
}

export default SendEmail;