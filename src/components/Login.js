import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function Login({ onSuccess, onFailure }) {
  return (
    <div className="Login">
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Login with Google"
      />
    </div>
  );
}

export default Login;
