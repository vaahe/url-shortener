import { useRoutes } from "react-router-dom";

import "./styles/App.css";
import routes from "./router/routes";
import { AppLayout } from "./components/layouts/AppLayout";

const App = () => {
  const route = useRoutes(routes);

  return <AppLayout>{route}</AppLayout>;
};

export default App;
