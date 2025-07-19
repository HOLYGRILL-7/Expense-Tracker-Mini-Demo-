import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./Components/Home";
import ListSec from "./Components/ListSec";


function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Redirect from "/" to "/homepage" */}
        <Route path="/" element={<Navigate to="/homepage" replace />} />

        {/* Main route */}
        <Route path="/homepage" element={<Home />}>
          <Route path="ListSec" element={<ListSec />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
