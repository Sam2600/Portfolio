import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Index } from "../pages/Index";
import { AboutMe } from "../pages/AboutMe";
import { ContactMe } from "../pages/ContactMe";
import { Projects } from "../pages/Projects";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/contact-me",
        element: <ContactMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
