import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination } from "swiper";
import { productImages } from "../constants/constant";
const ProductImageSlider = () => {
  return (
    <Swiper
      centeredSlides={true}
      style={{height:"100%", width:{md:"100%", xs:"100%" }, padding:"1.5rem" }}
      effect="fade"
      pagination={{
        clickable: false,
      }}
      slidesPerView={1}
      autoplay={{
        delay: 900,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay, Pagination]}
    >
      {productImages.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={item}
              alt="product_images"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductImageSlider;
