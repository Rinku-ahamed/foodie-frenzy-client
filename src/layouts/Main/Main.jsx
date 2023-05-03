import React from "react";
import Header from "../../shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
