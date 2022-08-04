import axios from "axios";
import { product_image_url } from "../constants/constant.js";
import { Typography, Button } from "@mui/material";
import QuantityInputComponent from "./QuantityInputComponent.jsx";
import { useSelector } from "react-redux";
const ProductBuySection=(props)=>{
    const quantity=useSelector(state => state.productQuantity.quantity);
    const { mobileView }=props;
    const checkoutClickhandler = async () => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}payment/`, {
            userId: 51100111,
            customername:"Ram",
            cartItems: [
              {
                id: 3001,
                name: "Apple AirPods (3rd Generation)",
                image: product_image_url,
                desc: "This Is New Apple AirPods (3rd Generation )",
                price: 299,
                quantity: quantity,
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
                fontSize={{md:"14px", xs:"12px"}}
                component="section"
                fontWeight={400}
                fontFamily="Poppins, sans-serif"
                color="black"
              >
                Price
              </Typography>
              <Typography
                fontSize={{md:"14px", xs:"12px"}}
                component="section"
                fontWeight="bold"
                fontFamily="Poppins, sans-serif"
                color="black"
                sx={{ marginRight: 3, marginLeft:0.5 }}
              >
                 $299.00
              </Typography>
              <QuantityInputComponent />
              <Button
                variant="contained"
                onClick={checkoutClickhandler}
                sx={{
                  marginLeft: 2,
                  background: "#0156FF",
                  textTransform: "capitalize",
                  padding: 1.5,
                  borderRadius:"50px",
                  width: 150,
                  "&:hover": {
                    backgroundColor: "#0156ff",
                  },
                  fontWeight:"600"
                }}
              >
                Buy Now
              </Button>
            </div>
    )
}

export default ProductBuySection;