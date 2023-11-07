import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import { MantineProvider } from "@mantine/core";
import Criminals from "./pages/Criminals.tsx";
import CriminalDetail from "./pages/CriminalDetail.tsx";
import CriminalForm from "./pages/CriminalForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "criminals", element: <Criminals /> },
      { path: "criminals/new", element: <CriminalForm /> },
      { path: "criminals/:id", element: <CriminalDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
