import React from 'react';
import './App.css';
import './Auth.css';
import './Users.css';
import Auth from './Auth';
import { useUser } from 'reactfire';

function App() {
  const user = useUser().data;

  return (
    <div className="App">
      <div className="user-email">
        { user && <p><span>Usuario:</span> {user.email} </p> }
      </div>
      <Auth className="auth" />
    </div>
  );
}

export default App;