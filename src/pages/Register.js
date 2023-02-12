import React, { useState } from "react";
import { Grid, Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoginImag from "../assets/images/login.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  // ImageMain: {},
  authimg: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  fromMain: {
    padding: " 240px 64px 0px",
    fontFamily: '"Poppins",sans-serif',
    "& h4": {
      marginBottom: "6px",
      fontSize: "17px",
    },
  },
  haveaccount: {
    "& p": {
      color: "rgba(255, 255, 255,0.8)",
      fontSize: "14px",
    },
    "& a": {
      color: "rgb(32, 101, 209)",
      fontSize: "14px",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  },
  FormMain: {
    marginTop: "20px",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
        border: "1px solid #fff",
        fontFamily: '"Poppins",sans-serif !important',
      },
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#fff",
    },
  },
  inputsStyle: {
    fontFamily: '"Poppins",sans-serif !important',
    marginBottom: "20px !important",
    fontSize: "14px",
  },
  ButtonMain: {
    "& .css-mcxzsz-MuiButtonBase-root-MuiButton-root": {
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(33, 43, 54)",
    },
    "& .css-mcxzsz-MuiButtonBase-root-MuiButton-root:hover": {
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(33, 43, 54)",
    },
  },
  "@media only screen and (max-width:600px)": {
    fromMain: {
      padding: "10px 20px 0px",
    },
  },
}));

const Register = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submission logic here
  };
  return (
    <>
      <Grid container fluid={true}>
        <Grid item xs={12} md={8}>
          <Box className={classes.ImageMain}>
            <img src={LoginImag} alt="auth" className={classes.authimg} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.fromMain}>
            <h4>Get started absolutely free.</h4>
            <Box className={classes.haveaccount}>
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </Box>
            <Box className={classes.FormMain}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  fullWidth
                  className={classes.inputsStyle}
                  variant="outlined"
                  // InputProps={{
                  //   style: {
                  //     border: "1px solid rgba(0, 0, 0, 0.23) !important",
                  //     borderRadius: "4px",
                  //     "&:focused": {
                  //       border: "1px solid blue",
                  //       boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
                  //     },
                  //   },
                  // }}
                />
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  fullWidth
                  className={classes.inputsStyle}
                />
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  fullWidth
                  className={classes.inputsStyle}
                />
                <Box className={classes.ButtonMain}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Create account
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
