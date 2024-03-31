import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const el = document.getElementById("root")!;

const root = createRoot(el!);

root.render(<App />);
