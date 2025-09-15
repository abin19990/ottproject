import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./loginpage";
import App from "../App";
import RegisterPage from "./registerpage";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
   {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
