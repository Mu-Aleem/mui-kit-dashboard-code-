import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
// utils
// import { fCurrency } from "../../../utils/formatNumber";
// components
import Label from "../Label";
import { ColorPreview } from "../color-utils";

// ----------------------------------------------------------------------

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  borderRadius: "10px",
});

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  ProductMain: {
    "& .css-bj2p8a-MuiPaper-root-MuiCard-root": {
      backgroundColor: "rgb(33, 43, 54)",
      color: "rgb(255, 255, 255)",
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      backgroundImage: "none",
      overflow: "hidden",
      position: "relative",
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 0px 2px 0px, rgb(0 0 0 / 12%) 0px 12px 24px -4px",
      borderRadius: "16px",
    },
  },
}));

const ShopProductCard = ({ product }) => {
  const classes = useStyles();
  const { name, cover, price, colors, status, priceSale } = product;

  return (
    <div className={classes.ProductMain}>
      <Card>
        <Box sx={{ pt: "100%", position: "relative" }}>
          {/* {status && (
            <Label
              variant="filled"
              color={(status === "sale" && "error") || "info"}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: "absolute",
                textTransform: "uppercase",
              }}
            >
              {status}
            </Label>
          )} */}
          <ProductImgStyle alt={name} src={cover} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link to="#" color="inherit" underline="hover" component={RouterLink}>
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Link>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ColorPreview colors={colors} />
            <Typography variant="subtitle1">
              {/* <Typography
              component="span"
              variant="body1"
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            >
              {priceSale && priceSale}
            </Typography> */}
              ${price}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};
ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default ShopProductCard;
