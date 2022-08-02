// import { Restaurant } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddressPage from "../pages/Address/AddressPage";
import Cart from "../pages/Cart/Cart";
import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import MenuPage from "../pages/Menu/MenuPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import RestaurantDetailPage from "../pages/RestaurantsDetail/RestaurantDetailPage";
import SearchPage from "../pages/Search/SearchPage";
import SignUpPage from "../pages/SignUp/SignUpPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route
          path="/restaurant/:id/:name"
          element={<RestaurantDetailPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
