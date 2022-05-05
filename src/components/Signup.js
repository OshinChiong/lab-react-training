import React from 'react';

const Signup = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [email, setEmail] = React.useState("");

    function checkFields(e) {
        e.preventDefault();
    
        if (username.length < 4) {
          setErrorMessage("Username must be at least 4 characters");
        } else if (password.length < 6) {
          setErrorMessage("Password must be at least 6 characters");
        } else if (password === "password") {
          setErrorMessage("You cant call the password password");
        } else if (confirmPassword === "password") {
            setErrorMessage ("Password Must be match");
        } else if (email === "!email") {
            setErrorMessage ("Email is taken");
        }   else  {
          //success
          setErrorMessage(`Welcome ${username}!`);
      }
    }

return (
    <form onSubmit={checkFields} >
      <label> Email </label>
    <input 
    onChange={(e) => setEmail (e.target.value)}
    name="Email"
    value={email}
    />
    <label> Username </label>
    <input 
    onChange={(e) => setUsername(e.target.value)}
    name="username"
    value={username}
    />
      <label> Password </label>
    <input 
    onChange={(e) => setPassword (e.target.value)}
    name="username"
    value={password}
    />
     <label> Confirm Password </label>
    <input 
    onChange={(e) => setConfirmPassword (e.target.value)}
    name="confirmPassword"
    value={confirmPassword}
    />
   
     <button> Create </button>
     <p> {errorMessage} </p>
    </form>
);
};



export default Signup;