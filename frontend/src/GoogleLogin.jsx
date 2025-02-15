import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

function GoogleLogin() {
  const responseGoogle = async (authResult) => {
    try {
      console.log(authResult);
    } catch (err) {
      console.error("Error while requesting google code: ", err);
    }
  };
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return (
    <div className="App">
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
}

export default GoogleLogin;
