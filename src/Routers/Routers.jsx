import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefDetail from "../shared/ChefDetail/ChefDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "chef/:id",
        element: <ChefDetail></ChefDetail>,
        loader: ({ params }) =>
          fetch(
            `https://foodie-frenzy-server-rinku-ahamed.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
