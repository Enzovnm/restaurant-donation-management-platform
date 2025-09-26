import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { CreateDonation } from "./components/CreateDonation";
import { CreateRestaurant } from "./components/CreateDonation/steps/create-restaurant";
import { CreateMeal } from "./components/CreateDonation/steps/create-meal";
import { LatestDonations } from "./components/LatestDonations/LatestDonations";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="create-donation" element={<CreateDonation />}>
            <Route index element={<CreateRestaurant />} />
            <Route path="restaurant" element={<CreateRestaurant />} />
            <Route path="meal" element={<CreateMeal />} />
          </Route>
        </Route>
        <Route path="latest-donations" element={<LatestDonations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
