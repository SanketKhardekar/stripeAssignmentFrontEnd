import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import { productImages } from "./constants/constant";
import Appbar from "./components/Appbar";
import NavbarComponent from "./components/NavbarComponent";
import { Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Autoplay,Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);

  //   if (query.get("success")) {
  //     setMessage("Order placed! You will receive an email confirmation.");
  //   }

  //   if (query.get("canceled")) {
  //     setMessage(
  //       "Order canceled -- continue to shop around and checkout when you're ready."
  //     );
  //   }
  // }, []);
  return (
    <Fragment>
      <Appbar />
      <NavbarComponent />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: -1 }}
      >
        <Grid
          item
          xs={10}
          sm={10}
          md={8}
          lg={6}
          sx={{ backgroundColor: "#f8f8ff" }}
        >
          <Container maxWidth="xs">
            sdfdsifsdj;ofisdofjpasdiopgjsdauio
          </Container>
        </Grid>
        <Grid item xs={10} sm={10} md={8} lg={5}>
          <Container maxWidth="sm">
          <Swiper
            spaceBetween={50}
            effect={"fade"}
            pagination={{
              clickable: false,
            }}
            autoplay={{
              delay: 900,
              disableOnInteraction: true,
            }}
            modules={[EffectFade,Autoplay,Pagination]}
          >
            {productImages.map((item, index) => {
              return(
              <SwiperSlide key={index}>
                <img src={item} alt="product_images" />
              </SwiperSlide>);
            })}
          </Swiper>
          </Container>
        </Grid>
      </Grid>
    </Fragment>
  );
}
