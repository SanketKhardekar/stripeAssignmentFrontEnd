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
          top:"2.5rem",
          backgroundColor: "white",
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
              style={{ paddingRight: 20 }}
              alt="logo"
            />
            {navItems.map((item, index) => {
              return (
                <Typography
                  marginLeft={3}
                  key={index}
                  color="black"
                  fontSize="14px"
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
              paddingTop:1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: 25 }}
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
      <div style={{position:"sticky", top:"2.5rem" , zIndex:1200,backgroundColor: "white"}}>
      <Container maxWidth="lg">
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
            sx={{ textDecorationLine:"underline", textDecorationColor:"blue", textUnderlineOffset:"0.3rem", fontWeight:600 }}
            fontSize="14px"
            color="#666666"
            fontFamily="Poppins, sans-serif"
            component="section"
          >
            About Product
          </Typography>
          <ProductBuySection mobileView={false} />
        </Box>
      </Container>
      </div>
      <hr style={{ borderTop:"5px" }}/>
      <AppBar
        position="fixed"
        sx={{
          display: { md: "none", sm: "flex", xs: "flex" },
          background:"white",
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
