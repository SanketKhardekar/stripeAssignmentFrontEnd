import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import NavbarComponent from "./components/NavbarComponent";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import ModalComponent from "./components/ModalComponent";
import ProductContainer from "./components/ProductContainer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetQuantity } from "./store/slices/QuantitySlice";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState({ open: false, type: "" });

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      dispatch(resetQuantity());
      setIsModal({ open:true, type:"success" });
      query.delete("success");
      navigate({ search: query.toString() }, { replace: true });
    }
    if (query.get("cancelled")) {
      setIsModal({ open:true, type:"cancelled" });
      query.delete("cancelled");
      navigate({ search: query.toString() }, { replace: true });
    }
  }, [dispatch,navigate]);
  return (
    <Fragment>
      <ModalComponent
        open={isModal.open}
        type={isModal.type}
        onClose={() => {
          setIsModal({ open:false, type:"" });
        }}
      />
      <Appbar />
      <NavbarComponent />
      <ProductContainer />
    </Fragment>
  );
}
