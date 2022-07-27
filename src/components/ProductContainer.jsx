import { Container, Grid } from "@mui/material";
import ProductDescription from "./ProductDescription";
import ProductImageSlider from "./ProductImageSlider";

const ProductContainer = (props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ paddingBottom: 3, marginTop: { md: -1, xs: 0 } }}
    >
      <Grid
        container
        flexDirection={{ md: "row", xs: "column-reverse" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={7}
          sx={{
            backgroundColor: { xs: "white", md: "#F5F7FF" },
            paddingX: { md: 6, xs: 0 },
            paddingLeft: { md: 11, xs: 0 },
            position: "relative",
            ":before": {
              content: "''",
              top: 0,
              bottom: 0,
              width: "9600px",
              position: "absolute",
              background: "#F5F7FF",
              right: { xs: "120%", md: "100%" },
            },
          }}
        >
          <ProductDescription />
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={5}>
          <ProductImageSlider />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductContainer;
