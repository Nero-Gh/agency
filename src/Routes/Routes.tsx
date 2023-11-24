import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

const Routes = () => {
  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
