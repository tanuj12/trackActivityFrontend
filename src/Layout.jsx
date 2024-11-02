import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};
