import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./loginpage";
import App from "../App";
import RegisterPage from "./registerpage";
import ChangePassword from "./passwordchange";
import WatchList  from "./watchlist";
import History from "./history";

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
  {
    path: "/passwordchange",
    element: <ChangePassword />,
  },
   {
    path: "/watchlist",
    element: <WatchList />,
  },
     {
    path: "/history",
    element: <History />,
  },
]);

export default router;
