import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import About from "./components/About";
import Res from "./components/Res";
import Error from "./components/Error";
import TestClassComp from "./components/TestClassComp";
import UserContext from "./utils/UserContext";
import Body from "./components/Body";
import dotenv from "dotenv";
import { Provider } from "react-redux";
const Contact = lazy(() => import("./components/Contact")); // Lazy Loading Contact Component to implement Code Splitting in the Bundle
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import appStore from "./utils/redux/appStore";
import Cart from "./components/Cart";
dotenv.config();

// Main Code Starts -
root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  console.log(userName);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: userName, setUserName }}>
        <div className="m-0 p-0">
          <Navbar />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Body />} />
      <Route path="about" element={<About />} />
      <Route path="class" element={<TestClassComp />}></Route>
      <Route
        path="contact"
        element={
          <Suspense fallback={<h1 className="mt-[120px]">Loading...</h1>}>
            <Contact />
          </Suspense>
        }
      >
        <Route path=":testId" element={<h1>HAHAHAHHA</h1>} />
      </Route>
      <Route
        path="restaurant/:resId"
        element={<Res />}
        loader={({ params }) => {
          return fetch(`${process.env.RES_DEETS}${params.resId}`);
        }}
      />
      <Route path="test" element={<Test />} />
      <Route path="cart" element={<Cart />}></Route>
    </Route>
  )
);

root.render(<RouterProvider router={router} />);
