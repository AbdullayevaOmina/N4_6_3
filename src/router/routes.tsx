import { Products, SignIn, SignUp } from "@pages";

const router = [
  {
    path: "/signin",
    element: <SignIn />,
    content: "SignIn",
  },
  {
    path: "/",
    element: <SignUp />,
    content: "SignUp",
  },
  {
    path: "/main/products",
    element: <Products />,
    content: "Products",
  },
 ];

export default router;