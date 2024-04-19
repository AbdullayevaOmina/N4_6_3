import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Brands, Products, SignIn, SignUp } from "@pages";
import { MainLayout } from "@layout";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="main/*" element={<MainLayout />}>
          <Route index element={<Products />} />
          <Route path="brands" element={<Brands />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
