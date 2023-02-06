import React from "react";

// import Input from "@mui/material/Input";
import { Button, TextField } from "@mui/material";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const {
    email,
    password,
    user,

    setPassword,
    setEmail,

    handleSignUp,
    handleLogin,
  } = useAuth();
  if (user) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="container">
      <div className="auth-wrapper">
        <h1 className="auth-titile">AUTH</h1>
        <TextField
          sx={{
            maxWidth: "510px",
            width: "100%",
            height: "35px",
            borderRadius: "2px",
            borderColor: "black",
          }}
          id="outlined-basic"
          label="LOGIN"
          size="small"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          sx={{
            maxWidth: "510px",
            width: "100%",
            height: "35px",
            borderRadius: "2px",
            borderColor: "black",
            marginTop: "20px",
          }}
          size="small"
          id="outlined-basic"
          label="PASSWORD"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "rgb(158, 158, 158)",
            },
            backgroundColor: "black",
            maxWidth: "540px",
            width: "100%",
            justifyContent: "center",
            height: "45px",
            borderRadius: "2px",
            fontSize: "16px",
            marginTop: "40px",
          }}
          variant="contained"
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "rgb(158, 158, 158)",
            },
            backgroundColor: "black",
            maxWidth: "540px",
            width: "100%",
            justifyContent: "center",
            height: "45px",
            borderRadius: "2px",
            fontSize: "16px",
            marginTop: "40px",
          }}
          variant="contained"
          onClick={handleSignUp}
        >
          sign up using email
        </Button>
      </div>
    </div>
  );
};

export default Auth;
