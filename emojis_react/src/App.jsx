import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Root } from "./Root";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
        errorElement={<h1>Error en Router</h1>}
      ></Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
