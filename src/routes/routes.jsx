import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Home/Details";
import Post from "../Pages/Post/Post";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `/posts/:id`,
        element: <Details />,
      },
      {
        path: `/post-page`,
        element: < Post/>,
      },
    ],
  },
]);

export default routes;
