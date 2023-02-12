import React from "react";
import { Layout } from "../component";
import ProductEmptyCard from "../component/products/ProductEmptyCard";
import OrderSummary from "../component/products/OrderSummary";
import OrderTable from "../component/products/OrderTable";
import { Grid } from "@mui/material";

const CheckOut = () => {
  return (
    <Layout>
      <h6
        style={{
          fontSize: "16px",
          marginLeft: "10px",
          marginBottom: "20px",
          fontFamily: '"Poppins",sans-serif',
          fontWeight: 600,
        }}
      >
        Checkout
      </h6>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8}>
          {/* <ProductEmptyCard /> */}
          <OrderTable />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CheckOut;
