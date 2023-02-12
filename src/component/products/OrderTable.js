import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import product_22 from "../../assets/images/product_22.jpg";

import SimpleBar from "simplebar-react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    minWidth: 100,
  },
  table: {
    minWidth: "730px",
  },
  TableHead: {
    "& tr th": {
      lineHeight: "1.5rem",
      fontSize: "0.875rem",
      fontFamily: '"Poppins",sans-serif',
      fontWeight: 500,
      display: "table-cell",
      verticalAlign: "inherit",
      textAlign: "left",
      padding: "16px",
      borderBottom: "none",
      color: "rgb(145, 158, 171)",
      backgroundColor: "rgba(145, 158, 171, 0.16)",
    },
  },
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
  ProductCell: {
    display: "flex !important",
    alignItems: "center !important",
    "& span": {
      lineHeight: 1,
      display: "block",
      overflow: "hidden",
      position: "relative",
      width: "80px",
      height: "60px",
      borderRadius: "12px",
      marginRight: "10px",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
  },
  ProductName: {
    lineHeight: 1.5,
    fontSize: "14px",
    fontFamily: '"Poppins",sans-serif',
    fontWeight: 400,
    color: "rgb(255, 255, 255)",
  },
  quantityMin: {
    width: "96px",
    textAlign: "right",
  },
  quantitybtn: {
    display: "flex",
    flexDirection: "row",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "4px",
    padding: "4px 6px",
    width: "96px",
    borderRadius: "8px",
    border: "1px solid rgba(145, 158, 171, 0.32)",
    "& .css-1drgtl0-MuiButtonBase-root-MuiIconButton-root": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      outline: "0px",
      border: "0px",
      margin: "0px",
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      appearance: "none",
      textDecoration: "none",
      textAlign: "center",
      flex: "0 0 auto",
      borderRadius: "50%",
      overflow: "visible",
      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      padding: "5px",
      fontSize: "1.125rem",
      color: "rgb(145, 158, 171)",
      "& svg": {
        width: "16px",
        height: "16px",
      },
    },
  },
  deleteBtn: {
    color: "rgb(145, 158, 171) !important",
    "& svg": {
      width: "20px",
      height: "20px",
    },
  },
}));

const OrderTable = () => {
  const classes = useStyles();
  const styles = {
    // maxWidth: 100,
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div className={classes.EmptyCardMain}>
        <div className={classes.EmptyCardHeadr}>
          <h6 className={classes.CardTit}>
            Cart <span>&nbsp;(0 item)</span>
          </h6>
        </div>

        <div className={classes.TableMain}>
          <SimpleBar style={styles}>
            <Table className={classes.table}>
              <TableHead className={classes.TableHead}>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell colSpan={2}>Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={classes.ProductCell}>
                    <span>
                      <img src={product_22} alt="productimg" />
                    </span>
                    <div className={classes.ProductName}>
                      ZX A-ZX Series sneakers
                    </div>
                  </TableCell>
                  <TableCell> $39.60</TableCell>
                  <TableCell>
                    <div className={classes.quantityMin}>
                      <div className={classes.quantitybtn}>
                        <IconButton aria-label="MinimizeIcon">
                          <RemoveIcon />
                        </IconButton>
                        {"2"}
                        <IconButton aria-label="AddIcon">
                          <AddIcon />
                        </IconButton>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>$79.20</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      className={classes.deleteBtn}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SimpleBar>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
