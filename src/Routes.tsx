import {
    Routes,
    Route
  } from "react-router-dom";

import App from "./App";
import PaginaTeste from "./PaginaTeste";

export default function RoutesApp() {
    return (
      <Routes>
        <Route path="/teste" element={<PaginaTeste />} />
      </Routes>    
    );
}