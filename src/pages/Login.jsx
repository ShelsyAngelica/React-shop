import React, { useRef } from 'react';
import '@styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null);

  {/*funcion que nos permite manejar el submit del formulario */} {/*recibe el evento  */}
  const handleSubmit = (event) => {
    {/*con esto prevenimos el evento que mande lo valores por url y continue con la logica que tenemos*/}
    event.preventDefault();
    {/*FormData nos permite instanciar todos los elementos que se encuentrea dentro de un formulario  y los va a capturar a medida que sean llamados*/}
    const formData = new FormData(form.current);
    {/* creamos un objeto que nos permite ver la informacion  como se la queremos enviar al back*/}
    const data = {
      username : formData.get('email'),
      password : formData.get('password')
    }
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  }


    return (
        <div className="Login">
        <div className="Login-form-container">
            <img src= {logo} alt="logo" className="Login-logo"/>
            {/* creamos la referencia por la cual vamos a obtener lo valores*/}
             <form className="Login-form" ref={form}>
                <label htmlFor="email" className="Login-label">Email address</label>
                <input type="text" name="email" placeholder="camilayokoo@gmail.com" className="Login-input Login-input-email"/>
    
                <label htmlFor="password" className="Login-label">Password</label>
                <input type="password" name="password" placeholder="*********" className="Login-input Login-input-password"/>
    
                <button className="Login-primary-button create-button" onClick={handleSubmit}> Log in </button>
                <a href="/">Forgot my password</a>
             </form>
             <div className="Login-container">
                <button className="Login-secondary-button">Sing up</button>
             </div>
        </div>
      </div>  
    );
}

export default Login;