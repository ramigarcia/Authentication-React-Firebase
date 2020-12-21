import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

export default (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebaseApp();
  const user = useUser().data;

  const createUser = async ()=>{
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  const loginUser = async ()=>{
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  const logout = async ()=>{
    await firebase.auth().signOut();
  }

  return(
    <div>
      {
        !user && 
        <div className="form">
          <label className="label" htmlFor="email">Correo Electronico</label>
          <input className="input" type="email" id="email" onChange={ (ev)=> setEmail(ev.target.value) }/>
          <label className="label" htmlFor="password">Contraseña</label>
          <input className="input" type="password" id="password" onChange={ (ev)=> setPassword(ev.target.value) } />
          <button className="button sign-up" onClick={createUser}>Crear Cuenta</button>
          <button className="button log-in" onClick={loginUser}>Iniciar Sesión</button>
        </div>
      }
      {
        user && <button className="log-out" onClick={logout}>Cerrar Sesion</button>
      }
    </div>
  )
}