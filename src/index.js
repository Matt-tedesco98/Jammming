import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

const root = createRoot(document.getElementById('App'));
root.render(
    <React.StrictMode>
<App />
</React.StrictMode>);

