import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { updateQuantity } from "../store/slices/QuantitySlice";
import { useDispatch, useSelector } from "react-redux";
const QuantityInputComponent = (props) => {
  const storeQuantity=useSelector(state => state.productQuantity.quantity);
  const dispatch=useDispatch();
  const [quantity, setQuantity] = useState(storeQuantity);
  useEffect(()=>{
    dispatch(updateQuantity(quantity))
  },[dispatch,quantity])
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius:2,
        height: "10px",
        padding: 2,
        flexDirection: "row",
        backgroundColor: "#F5F7FF",
        justifyContent: "space-between",
        color: "black",
        alignItems: "center",
      }}
    >
      <Typography fontSize={14} fontFamily="Poppoins, sans-serif" fontWeight="normal" >{quantity}</Typography> 
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <span
          style={{ height: "15px", color: quantity === 3 ? "#D3D3D3":"black" }}
          onClick={ quantity < 3 ? () => {setQuantity(quantity + 1)} : ()=>{}}
        >
          <ExpandLessIcon  fontSize="small" />
        </span>
        <span
          style={{ height: "15px", color: quantity === 1 ? "#D3D3D3":"black" }}
          onClick={ quantity > 1 ? () => {setQuantity(quantity - 1)} : ()=>{}}
        >
          <ExpandMoreIcon fontSize="small" />
        </span>
      </div>
    </Box>
  );
};

export default QuantityInputComponent;
