import React from "react";
import Header from "../../shared/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className="text-center text-3xl text-red-600">
        {navigation.state === "loading" ? "Loading data coming" : ""}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
