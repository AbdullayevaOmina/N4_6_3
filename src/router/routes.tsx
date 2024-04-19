import { Brands, Contact, Products, SignIn, SignUp } from "@pages";

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
  {
    path: "/main/brands",
    element: <Brands />,
    content: "Brands",
  },
  {
    path: "/main/contact",
    element: <Contact />,
    content: "Contact",
  },
];

export default router;