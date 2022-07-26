import { AppBar, Box, Container, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "../constants/constant";
import { Fragment } from "react";
import ProductBuySection from "./ProductBuySection";
const NavbarComponent = () => {
  return (
    <Fragment>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{
          backgroundColor: "transparent",
          padding: 1,
          borderBottomWidth: 0.1,
          paddingBottom: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              src={require("../assets/logo.png")}
              style={{ marginRight: 20 }}
              alt="logo"
            />
            {navItems.map((item, index) => {
              return (
                <Typography
                  marginLeft={3}
                  key={index}
                  color="black"
                  variant="body2"
                  fontFamily="Poppins, sans-serif"
                  fontWeight="bold"
                  component="div"
                >
                  {item}
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: 30 }}
              src={require("../assets/logo.png")}
              alt="logo"
            />
            <MenuIcon
              className="material-icons"
              fontSize="medium"
              sx={{ fill: "black" }}
            />
          </Box>
        </Container>
      </AppBar>
      <Container sx={{ backgroundColor: "transparent"}} maxWidth="lg">
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 3,
            paddingLeft: 11,
            paddingBottom: 3,
          }}
        >
          <Typography
            sx={{ borderBottom: 1, borderBottomColor: "blue" }}
            variant="body2"
            color="#808080"
            fontWeight="bolder"
            fontFamily="Poppins, sans-serif"
            component="section"
          >
            About Product
          </Typography>
          <ProductBuySection mobileView={false} />
        </Box>
      </Container>
      <hr style={{ borderTop:"5px" }}/>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          display: { md: "none", sm: "flex", xs: "flex" },
          top: "auto",
          bottom: 0,
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ padding: 2 }}>
            <ProductBuySection mobileView={true} />
          </Box>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default NavbarComponent;
