import React from "react";
import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "15px",
    color: "white",
    fontFamily: '"Public Sans", sans-serif',
  },
}));

const DashBoard = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
        <h4 className={classes.heading}>Hi, Welcome back</h4>
      </Container>
    </>
  );
};

export default DashBoard;
