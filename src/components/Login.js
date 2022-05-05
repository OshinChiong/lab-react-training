import React from "react";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  
  function checkFields(e) {

    e.preventDefault();

    if (username.length < 4) {
      setErrorMessage("Username must be at least 4 characters");
    } 
}


  return (
    <form>
    <label>Username</label>
    <input
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      name="username"
      value={username}
    />
       
      </form>
  )

}


export default Login;