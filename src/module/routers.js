import Index from "../components/Index";
import New from "../pages/new/new";
import NewList from "../components/NewList";
import NewContent from "../components/NewContent";

const routes = [
  {
    path: "/",
    component: Index,
    exact: true,
  },
  {
    path: "/new",
    component: New,
    routes: [
      {
        path: "/new/",
        component: NewContent,
      },
      {
        path: "/new/newList",
        component: NewList,
      },
    ],
  },
];

export default routes;
