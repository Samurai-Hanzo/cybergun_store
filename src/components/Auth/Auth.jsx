import React from "react";
import "./Auth.scss";

import Input from "@mui/material/Input";
import { Button, TextField } from "@mui/material";

const Auth = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h1 className="">AUTH</h1>
                <TextField id="outlined-basic" label="LOGIN" size="small" />
                <TextField
                    size="small"
                    className="passwordInput"
                    id="outlined-basic"
                    label="PASSWORD"
                />
                <div>
                    <Button variant="contained">Contained</Button>
                </div>
                <p>sign up using email</p>
            </div>
        </div>
    );
};

export default Auth;
