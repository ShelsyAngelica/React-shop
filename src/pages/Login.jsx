import React from 'react';
import '../styles/Login.scss'

const Login = () => {
    return (
        <div class="login">
        <div class="login-form-container">
            <img src="./Logos/logo_yard_sale.svg" alt="logo" class="login-logo"/>
             <form class="login-form">
                <label for="email" class="login-label">Email address</label>
                <input type="text" id="email" placeholder="camilayokoo@gmail.com" class="input input-email"/>
    
                <label for="password" class="login-label">Password</label>
                <input type="password" id="password" placeholder="*********" class="login-input login-input-password"/>
    
                <input type="submit" value="Log in" class="login-primary-button create-button"/> <a href="/">Forgot my password</a>
             </form>
             <div class="login-container">
                <button class="login-secondary-button">Sing up</button>
             </div>
        </div>
      </div>  
    );
}

export default Login;