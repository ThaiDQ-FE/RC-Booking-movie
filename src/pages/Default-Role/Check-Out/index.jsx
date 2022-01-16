import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOuts from "../../../components/default/check-out";
import Footer from "../../../components/default/footer";
import Header from "../../../components/default/header";
import Loading from "../../../components/loading";
import { changeStatusLoading } from "../../../redux/slices/assetSlice";

function CheckOut() {
  const dispatch = useDispatch();
  return (
    <div className="co__wrapper">
      <Header />
      <CheckOuts />
      <Footer />
    </div>
  );
}

export default CheckOut;
