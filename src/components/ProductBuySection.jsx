import axios from "axios";
import { product_image_url } from "../constants/constant.js";
import { Typography, Button } from "@mui/material";
import QuantityInputComponent from "./QuantityInputComponent.jsx";
const ProductBuySection=(props)=>{
    const { mobileView }=props;
    const checkoutClickhandler = async () => {
        try {
          const response = await axios.post(`http://localhost:5000/api/payment/`, {
            userId: 51100111,
            cartItems: [
              {
                id: 3001,
                name: "Apple AirPods (3rd Generation)",
                image: product_image_url,
                desc: "This Is New Apple AirPods (3rd Generation )",
                price: 299,
                quantity: 2,
              },
            ],
          });
          if (response.data.url) {
            window.location.href = response.data.url;
          }
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: mobileView === true ? "space-between":"flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={13}
                component="section"
                fontWeight="bold"
                fontFamily="Poppins, sans-serif"
                color="black"
                sx={{ marginRight: 5 }}
              >
                Price $299.00
              </Typography>
              <QuantityInputComponent />
              <Button
                variant="contained"
                onClick={checkoutClickhandler}
                sx={{
                  marginLeft: 2,
                  backgroundColor: "#0156FF",
                  textTransform: "capitalize",
                  padding: 1.5,
                  borderRadius: 10,
                  width: 150,
                  fontWeight:"bold"
                }}
              >
                Buy Now
              </Button>
            </div>
    )
}

export default ProductBuySection;