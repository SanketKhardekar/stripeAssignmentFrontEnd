import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { product_description } from "../constants/constant";

const ProductDescription = (props) => {
  return (
    <Fragment>
      <Box
        sx={{ paddingY: { md: 8, xs: 2 }, paddingBottom: { md: 14, xs: 10 } }}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "flex" },
            paddingBottom: { xs: 0, md: 3 },
          }}
          color="#A2A6B0"
          fontSize="12px"
          fontWeight="normal"
          fontFamily="Poppins, sans-serif"
          component="section"
          gutterBottom
        >
          APPLE PRODUCTS
        </Typography>
        <Typography
          sx={{
            textDecorationLine: "underline",
            textDecorationColor: "blue",
            textUnderlineOffset: "0.3rem",
            fontWeight: 600,
            display: { xs: "flex", md: "none" },
            paddingBottom: 3,
          }}
          align="left"
          fontSize="12px"
          color="#666666"
          fontFamily="Poppins, sans-serif"
          component="section"
        >
          About Product
        </Typography>
        <Typography
          align="left"
          sx={{ fontWeight: 500, fontSize: { xs: "22px", md: "30px" } }}
          fontFamily="Poppins, sans-serif"
          component="section"
          gutterBottom
        >
          New Apple AirPods (3rd Generation)
        </Typography>
        <Typography
          sx={{ display: { lg: "block", xs: "none" } }}
          align="left"
          fontSize="12px"
          fontFamily="Poppins"
          component="section"
          gutterBottom
        >
          It's magic, remastered!
        </Typography>
        <ul>
          {product_description.map((item, index) => {
            return (
              <li key={index}>
                <Typography
                  align="left"
                  fontSize="12px"
                  sx={{ fontFamily:"Poppins, sans-serif" }}
                  component="section"
                  gutterBottom
                >
                  {item}
                </Typography>
              </li>
            );
          })}
        </ul>
        <Typography
          align="left"
          sx={{ paddingTop: "12px" }}
          fontSize="12px"
          fontFamily="Poppins, sans-serif"
          component="section"
          gutterBottom
        >
          SKU D5515AI
        </Typography>
      </Box>
    </Fragment>
  );
};
export default ProductDescription;
