import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { Home } from "../pages/Home";
import { PostApproval } from "../pages/PostApproval";
import { User } from "../pages/User";
import { Store } from "../pages/Store";

function AllRoutes() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/PostApproval" element={<PostApproval />} />
      <Route path="/user" element={<User />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
}
export default AllRoutes;
