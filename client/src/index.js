import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Appbar from "./components/appbar";
import Sidebar from "./components/sidebar";
import { Grid } from "@mui/material";
import Frontdesk from "./pages/frontdesk";
import Guest from "./pages/guest";
import Rooms from "./pages/rooms";
import Deal from "./pages/deal";
import Rate from "./pages/rate";
import Footer from "./components/footer";

export default function App() {
  return (
    <div style={{ backgroundColor: "#eef0f2" }}>
      <Appbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sx={{ backgroundColor: "white" }}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/frontdesk" element={<Frontdesk />} />
              <Route path="/guest" element={<Guest />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/deal" element={<Deal />} />
              <Route path="/rate" element={<Rate />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
