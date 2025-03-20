import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Package from "./components/Package";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Carousel from "./components/Carousol";
import Destination from "./components/Destination";
import Services from "./components/Services";
import Staff from "./components/Staff";
import Instagram from "./components/Instagram";
import Testimonial from "./components/Testimonial";
import PackageDetails from "./components/PackageDetails";
import logo from "./assets/logo.jpg";
import ScrollHandler from "./components/ScrollHandler";
import WhatsApp from "./components/WhatsApp";
import ServiceCards from "./components/ServiceCards";

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="font-sans">
        <Head />
        <Navbar />
        <main className="mt-20">
          <Routes>
            {/* Home Page Layout */}
            <Route
              path="/"
              element={
                <>
                  <section
                    id="home"
                    className="min-h-screen relative flex flex-col items-center overflow-hidden justify-center bg-gray-100 bg-cover bg-center"
                  >
                    <Carousel />
                  </section>
                  <section
                    id="about"
                    className="min-h-screen relative flex flex-col justify-center items-center bg-white"
                  >
                    <Contact layout="row" />
                    <About />
                  </section>
                  <section
                    id="packages"
                    className="min-h-screen flex items-center justify-center"
                  >
                    <Package />
                  </section>
                  <section
                    id="destination"
                    className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
                  >
                    <Destination />
                    <Services />
                  </section>
                  {/* <section
                    id="products"
                    className="min-h-screen flex items-center justify-center"
                  >
                    <ServiceCards />
                  </section> */}
                  <section
                    id="contact"
                    className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
                  >
                    <div className=" w-[80%] flex flex-col md:flex-row justify-center items-center gap-10 bg-black rounded-2xl p-2 md:p-8">
                      <img
                        src={logo}
                        className={`w-full md:w-[40%] object-cover rounded-full transition-transform duration-1000 `}
                        alt="Fidelity Travels Logo"
                      />
                      <Contact />
                    </div>
                  </section>
                  <section
                    id="other"
                    className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
                  >
                    <Staff />
                    <Testimonial />
                    <Instagram />
                  </section>
                </>
              }
            />

            {/* Package Details Page */}
            <Route path="/package/:id" element={<PackageDetails />} />
            <Route path="/package" element={<Package />} />
          </Routes>
        </main>
        <Footer />
        <WhatsApp />
      </div>
    </Router>
  );
}

export default App;
