import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./App";

import "./index.css";

const el = document.getElementById("root");

const root = createRoot(el!);

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
