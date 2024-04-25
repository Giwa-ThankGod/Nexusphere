import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
