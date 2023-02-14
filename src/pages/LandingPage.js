/**
 * The Landing page of the whole website
 */
import React from 'react';
import { Outlet } from "react-router-dom";
import '../css/LandingPage.css';
import Sidebar from '../components/Sidebar';



function LandingPage() {
  return (
    <div id="landing-page">
      <Sidebar />

      <div id = "landing-content">
          <Outlet />
      </div>
    </div>
  );
}

export default LandingPage;