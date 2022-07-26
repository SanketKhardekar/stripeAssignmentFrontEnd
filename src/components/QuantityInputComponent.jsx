import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const QuantityInputComponent = (props) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius:2,
        height: "10px",
        padding: 2,
        flexDirection: "row",
        backgroundColor: "#f8f8ff",
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
          justifyContent: "flex-start   ",
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
