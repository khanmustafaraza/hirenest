import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthAppProvider } from "./store/authcontext/AuthContext.jsx";
import { JobAppProvider } from "./store/jobcontext/JobContext.jsx";
import { UserAppProvider } from "./store/usercontext/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthAppProvider>
      <JobAppProvider>
        <UserAppProvider>
          <App />
        </UserAppProvider>
      </JobAppProvider>
    </AuthAppProvider>
  </BrowserRouter>,
);
