import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../pages/users/Users";
import Products from "../pages/products/Products";
import Comments from "../pages/comments/Comments";
import Likes from "../pages/likes/Likes";
import Layout from "../pages/layout/Layout";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Users />} />
          <Route path="/product" element={<Products />} />
          <Route path="/comment" element={<Comments />} />
        </Route>
        <Route path="/like" element={<Likes />} />
      </Routes>
    </>
  );
};

export default Routers;
