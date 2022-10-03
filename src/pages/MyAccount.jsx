import React from 'react';
import '../styles/MyAccount.scss'

const MyAccount = () => {
    return (
        <div class="my-account-login">
            <div className="my-account-form-container">
            <h1 className="my-account-title">My account</h1> 
            
            <form className="my-account-form">
                    <div>
                        <label for="name" className="my-account-label">Name</label>
                        <p className="my-account-value">Camila Yokoo</p>

                        <label for="email address" className="my-account-label">Email Adrdress</label>
                        <p className="my-account-value">Camilayokoo@gmail.com</p>

                        <label for="new-password" className="my-account-label">Password</label>
                        <p className="my-account-value">*********</p>

                    </div>
                    

                    <input type="submit" value="Edit" className="my-account-secondary-button my-account-create-button"/> 
            </form>

            </div>
        </div>  
    );
}

export default MyAccount;