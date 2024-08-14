import { GoogleLogin } from '@react-oauth/google';

function LoginButton() {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle successful login here (e.g., send the token to your server)
  };

  const onFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onFailure={onFailure}
      useOneTap
    />
  );
}
