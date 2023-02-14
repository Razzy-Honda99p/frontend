import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import routes from './routes/sidebarRoutes';
import LandingPage from './pages/LandingPage';


const SidebarRoutes = routes.map((route, index) => (
  <Route
    key={index}
    path={route.path}
    exact={route.exact}
    element={<route.element/>}
  />
))

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page with a Side bar */}
        <Route element = {<LandingPage/>}>
          {SidebarRoutes}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
