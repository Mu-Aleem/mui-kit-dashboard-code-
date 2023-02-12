import React from "react";
import { makeStyles } from "@mui/styles";

import empty_cart from "../../assets/images/empty_cart.svg";

const useStyles = makeStyles((theme) => ({
  EmptyCardMain: {
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
  },
  EmptyCardHeadr: {
    display: "flex",
    alignItems: "center",
    padding: "24px 24px 0px",
    marginBottom: "24px",
  },
  CardTit: {
    fontSize: "15px",
    color: "white",
    "& span": {
      margin: "0px",
      lineHeight: 1.5,
      fontSize: "1rem",
      fontFamily: '"Poppins",sans-serif',
      fontWeight: 400,
      color: "rgb(145, 158, 171)",
    },
  },
  image: {
    textAlign: "center",
    lineHeight: 1,
    display: "block",
    overflow: "hidden",
    position: "relative",
    height: "240px",
    marginBottom: "24px",
    "& span": {
      width: "100%",
      height: "100%",
      backgroundSize: "cover !important",
      color: "transparent",
      display: "inline-block",
    },
    "& img": {
      width: "46%",
      height: "auto",
      objectFit: "cover",
    },
  },
  footer: {
    textAlign: "center",
    paddingBottom: "30px",
    "& h6": {
      margin: "0px",
      lineHeight: 1.5,
      fontSize: "1rem",
      fontFamily: '"Poppins",sans-serif',
      fontWeight: 600,
      color: "#fff",
    },
    "& p": {
      margin: "0px",
      lineHeight: 1.5,
      fontSize: "15px",
      fontFamily: '"Poppins",sans-serif',
      fontWeight: 400,
      color: "rgb(145, 158, 171)",
    },
  },
}));

const ProductEmptyCard = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.EmptyCardMain}>
        <div className={classes.EmptyCardHeadr}>
          <h6 className={classes.CardTit}>
            Cart <span>&nbsp;(0 item)</span>
          </h6>
        </div>
        <div className={classes.image}>
          <span>
            <img src={empty_cart} alt="empty_cart" />
          </span>
        </div>
        <div className={classes.footer}>
          <h6>Cart is empty</h6>
          <p>Look like you have no items in your shopping cart.</p>
        </div>
      </div>
    </>
  );
};

export default ProductEmptyCard;
