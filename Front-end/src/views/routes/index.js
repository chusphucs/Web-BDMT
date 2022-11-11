import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";
import { Home } from "../pages/home";
import { PostApproval } from "../pages/PostApproval";
import { User } from "../pages/user";
import { Store } from "../pages/store";

function AllRoutes() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/post-approval" element={<PostApproval />} />
      <Route path="/user" element={<User />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
}
export default AllRoutes;
