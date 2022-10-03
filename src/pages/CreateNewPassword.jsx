import React from 'react';
import '../styles/CreateNewPassword.scss'
import logo from '@logos/logo_yard_sale.svg';

const CreateNewPassword = () => {
    return (
        <div className="create-newPassword-login">
        <div className="create-newPassword-form-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="create-newPassword-title">Create a new password</h1> 
            <p className="create-newPassword-subtitle">Enter a new password for you account</p>
            <form className="create-newPassword-form"> 
                <label htmlFor="password" className="create-newPassword-label">Password</label>
                <input type="password" id="password" placeholder="*********" className="create-newPassword-input create-newPassword-input-password"/> 
                <label htmlFor="new-password" className="lcreate-newPassword-abel">Password</label>
                <input type="password" id="new-password" placeholder="*********" className="create-newPassword-input create-newPassword-input-password"/>
                <input type="submit" value="Confirm" className="create-newPassword-primary-button create-newPassword-login-button"/> 
            </form>
        </div>
      </div> 
    )
}

export default CreateNewPassword;