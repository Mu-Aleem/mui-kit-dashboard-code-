import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  summaryMain: {
    backgroundColor: "rgb(33, 43, 54)",
    color: "rgb(255, 255, 255)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundImage: "none",
    overflow: "hidden",
    position: "relative",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 0px 2px 0px, rgb(0 0 0 / 12%) 0px 12px 24px -4px",
    borderRadius: "16px",
    zIndex: 0,
    marginBottom: "24px",
    padding: "24px 24px 20px",
  },
  Tit: {
    fontSize: "1rem",
    fontFamily: '"Poppins",sans-serif',
    fontWeight: 400,
    color: "#fff",
  },
  SubTotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "15px",
    alignItems: "center",
    "& p": {
      margin: "0px",
      lineHeight: 1.57143,
      fontSize: "0.875rem",
      fontFamily: '"Poppins",sans-serif',
      fontWeight: 400,
      color: "rgb(145, 158, 171)",
    },
    "& h6": {
      margin: "0px",
      fontWeight: 600,
      lineHeight: 1.57143,
      fontSize: "0.875rem",
      fontFamily: '"Poppins",sans-serif',
    },
  },
  DividerfullWidth: {
    margin: "0px",
    flexShrink: 0,
    borderWidth: "0px 0px thin",
    borderStyle: "solid",
    borderColor: "rgba(145, 158, 171, 0.24)",
    margin: "16px 0px 0px",
  },
  Total: {
    fontWeight: "600 !important",
    color: "#fff !important",
  },
  checkButton: {
    color: "rgb(255, 255, 255) !important",
    backgroundColor: "rgb(0, 171, 85) !important",
    lineHeight: " 1.71429 !important",
    textTransform: "capitalize !important",
    marginTop: "15px !important",
    fontSize: "0.875rem !important",
    fontFamily: '"Poppins",sans-serif !important',
  },
}));

const OrderSummary = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.summaryMain}>
        <span className={classes.Tit}>Order Summary</span>
        <div className={classes.SubTotal}>
          <p>Sub Total</p>
          <h6>$14</h6>
        </div>
        <div className={classes.SubTotal}>
          <p>Discount</p>
          <h6>-</h6>
        </div>
        <div className={classes.SubTotal}>
          <p>Shipping</p>
          <h6>Free</h6>
        </div>
        <hr className={classes.DividerfullWidth} />

        <div className={classes.SubTotal}>
          <p className={classes.Total}>Total</p>
          <h6>$555</h6>
        </div>

        <Button
          fullWidth
          size="large"
          variant="contained"
          className={classes.checkButton}
        >
          Check Out
        </Button>
      </div>
    </>
  );
};

export default OrderSummary;
