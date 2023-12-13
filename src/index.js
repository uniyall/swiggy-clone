import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Res from "./components/Res";
import Error from "./components/Error";
import Contact from "../src/components/Contact";
import Body from "./components/Body";
import dotenv from "dotenv";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

dotenv.config();

root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="m-0 p-0">
    <Navbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Body />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="restaurant/:resId"
        element={<Res />}
        loader={({ params }) => {
          console.log(`${process.env.RES_DEETS}${params.resId}`);
          return fetch(`${process.env.RES_DEETS}${params.resId}`);
        }}
      />
    </Route>
  )
);

root.render(<RouterProvider router={router} />);
