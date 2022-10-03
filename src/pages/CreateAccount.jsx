import React from 'react'
import '../styles/CreateAccount.scss'

const CreateAccount = () => {
    return (
        <div className="create-account-login">
            <div className="create-account-form-container">
                <h1 className="create-account-title">My account</h1> 
                
                <form className="create-account-form">
                        <div>
                            <label htmlFor="name" className="label">Name</label>
                            <input type="text" id="name" placeholder="Camila Yokoo" className="create-account-input create-account-input-name"/>
            
                            <label htmlFor="email address" className="label">Email Adrdress</label>
                            <input type="text" id="email address" placeholder="camilayokoo@gmail.com" className="create-account-input create-account-input-email"/>
            
                            <label htmlFor="new-password" className="label">Password</label>
                            <input type="password" id="new-password" placeholder="*********" className="create-account-input create-account-input-password"/>
            
                        </div>    
                        <input type="submit" value="Create" className="create-account-primary-button create-account-create-button"/>
                </form>
            </div>
      </div>  
    );
}

export default CreateAccount;