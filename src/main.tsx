import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initZoomLock } from "./utils/zoomLock";

// Initialize viewport locking and zoom prevention for app-like mobile experience
initZoomLock();

createRoot(document.getElementById("root")!).render(<App />);
