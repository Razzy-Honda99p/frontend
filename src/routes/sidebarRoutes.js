/**
 * List of "pages" for the website.
 * The pages display inside the side bar on the left.
 */
import Dashboard from '../pages/Dashboard';
import GlobalView from '../pages/GlobalView';

const routes = [
    {
      path: "/",
      exact: true,
      element: Dashboard
    },
    {
      path: "/global",
      exact: true,
      element: GlobalView
    }
  ];

  export default routes;