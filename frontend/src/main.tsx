import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import NavBar from "./components/SideBar";
import DashboardShell from "./components/layout/DashboardShell";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <DashboardShell />
    <NavBar />
    <App />
  </BrowserRouter>
);
