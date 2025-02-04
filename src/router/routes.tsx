import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import { Redirect } from "../pages/Redirect";

const routes: Array<RouteObject> = [
  { path: "/", element: <Home /> },
  { path: "/redirect", element: <Redirect /> },
];

export default routes;
