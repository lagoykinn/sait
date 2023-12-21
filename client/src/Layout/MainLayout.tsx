import React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import AuthModal from "../components/AuthModal";
import Background from "../components/UI/Background";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <Body>{children}</Body>
      <Footer />
      <AuthModal />
      <Background />
    </>
  );
};

export default MainLayout;
