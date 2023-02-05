import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const PayPage = () => {
  const handleClick = () => {
    alert("WOW! Purchase completed!!");
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-basic"
          label="Surname"
          variant="outlined"
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-basic"
          type="number"
          label="card number"
          variant="outlined"
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-basic"
          type="number"
          label="CNN"
          variant="outlined"
        />
      </Box>
      <FormControl sx={{ marginBottom: "20px" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
      {/* <Link to="/"> */}
      <Button
        onClick={handleClick}
        sx={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
        variant="contained"
      >
        BUY
      </Button>
      {/* </Link> */}
    </Container>
  );
};

export default PayPage;
