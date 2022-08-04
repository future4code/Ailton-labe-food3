// import { Restaurant } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalState from "../global/GlobalState";
import AddressPage from "../pages/Address/AddressPage";
import Cart from "../pages/Cart/Cart";
import EditAddressPage from "../pages/EditAddress/EditAddressPage";
import EditUserPage from "../pages/EditUser/EditUserPage";
import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import RestaurantDetailPage from "../pages/RestaurantsDetail/RestaurantDetailPage";
import SignUpPage from "../pages/SignUp/SignUpPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/cart"
          element={
            <GlobalState>
              <Cart />
            </GlobalState>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route
          path="/restaurant/:id/:name"
          element={
            <GlobalState>
              <RestaurantDetailPage />
            </GlobalState>
          }
        />
        <Route path="/edituser" element={<EditUserPage />} />
        <Route path="/editaddress" element={<EditAddressPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
