import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./root/Root";
import Donations from "./components/Donations/Donations";
import Statistics from "./components/Statistics/Statistics";
import CampaignDetails from "./components/CampaignDetails/CampaignDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <Donations></Donations>,
        loader: () => fetch("../campaigns.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/campaign/:id",
        element: <CampaignDetails></CampaignDetails>,
        loader: () => fetch("../campaigns.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
