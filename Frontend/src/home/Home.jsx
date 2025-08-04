import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Schemes from "../components/Schemes";  // ✅ Import Schemes Component
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      
      <Schemes />   {/* ✅ Add Schemes Section Here */}
      <Footer />
    </>
  );
}

export default Home;
