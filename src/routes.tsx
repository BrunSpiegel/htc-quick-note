import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Login } from "./pages/auth/Login";
import { SignIn } from "./pages/auth/SignIn";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
