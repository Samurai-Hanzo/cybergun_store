import React from "react";
import "./Auth.scss";

import Input from "@mui/material/Input";
import { Button, TextField } from "@mui/material";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleSignUp,
    handleLogin,
    handleLogOut,
  } = useAuth();
  if (user) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="">AUTH</h1>
        <TextField
          id="outlined-basic"
          label="LOGIN"
          size="small"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          size="small"
          className="passwordInput"
          id="outlined-basic"
          label="PASSWORD"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "blue",
              },
            }}
            variant="contained"
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </div>
        <Button variant="outlined" onClick={handleSignUp}>
          sign up using email
        </Button>
      </div>
    </div>
  );
};

export default Auth;
