import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "leaflet/dist/leaflet.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
     </Provider>
  </React.StrictMode>
);
