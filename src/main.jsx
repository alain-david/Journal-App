import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import { JournalApp } from "./JournalApp";
import { AppTheme } from "./theme/AppTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
);
