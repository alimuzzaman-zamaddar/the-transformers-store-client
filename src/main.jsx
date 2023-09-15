import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router/Router.jsx";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-gradient-to-r from-black via-indigo-950 to-black">
    <div className="max-w-[1450px] mx-auto overflow-x-hidden">
      <AuthProvider>
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
      </AuthProvider>
    </div>
  </div>
);
