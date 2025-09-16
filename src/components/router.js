import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./loginpage";
import App from "../App";
import RegisterPage from "./registerpage";
import ChangePassword from "./passwordchange";
import WatchList  from "./watchlist";
import History from "./history";
import Player from "./player";
import HomePage from "./homepage";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
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
     {
  path: "/player/:id",
  element: <Player />,
},
]);

export default router;
