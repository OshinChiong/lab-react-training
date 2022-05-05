import React from "react";

const Password = () => {

const [password, setPassword] = React.useState("");
const [errorMessage, setErrorMessage] = React.useState("");

function checkFields(e) {

    e.preventDefault();

     if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
    } else if (password === "password") {
    } else {
        setErrorMessage("password is ok");
    }
}

return (
    <form>
      <label> Password </label>
    <input 
    onChange={(e) => setPassword (e.target.value)}
    name="username"
    type="text"
    value={password}
    />
    </form>
);
}

export default Password; 