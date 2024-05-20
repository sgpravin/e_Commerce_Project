import React, { useState } from "react";
import "./styles.css";

const Login = ({ onValChange }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const handleLogin = () => {
    if (userName === "admin" && password === "admin") {
      onValChange("pass");
      setValidationMsg("");
    } else {
      setValidationMsg("Invalid username or password");
      onValChange("error");
    }
  };

  return (
    <div className="LoginPage">
      <h2>Login</h2>
      <form>
        <table>
          <tr>
            <td className="left">
              <label for="html">User Name:</label>
            </td>
            <td className="right">
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="left">
              <label for="html">Password:</label>
            </td>
            <td className="right">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="left">
              <button className="LoginBtn" type="button" onClick={handleLogin}>
                Login
              </button>
            </td>
            <td className="right">
              <button className="newAccBtn">Create Account</button>
            </td>
          </tr>
        </table>
        {validationMsg && <p>{validationMsg}</p>}
      </form>
    </div>
  );
};

export default Login;
