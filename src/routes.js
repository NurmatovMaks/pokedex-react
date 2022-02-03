import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailsPage from "./pages/DetailsPage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
