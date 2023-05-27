import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Toolong</title>
      <meta
        name="description"
        content="Toolong bukan hanya tentang melaporkan kejahatan seksual, tetapi juga tentang membangun kekuatan masyarakat. Dengan bergabung bersama kami, Anda turut memerangi kekerasan seksual dan bersama mewujudkan lingkungan masyarakat yang aman dari kekerasan seksual"
      />
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
