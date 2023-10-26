import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import {  createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./components/AboutUS/About";
import About from "./components/AboutUS/About";
import "./components/Contact/Contact";
import "./components/Cart/Cart";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage"; 

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);
