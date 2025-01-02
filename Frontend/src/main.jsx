import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./context/taskContext.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <BrowserRouter>
   <TaskProvider>
    <Routes>
     <Route path="/" element={<App />} />
    </Routes>
   </TaskProvider>
  </BrowserRouter>
 </StrictMode>
);
