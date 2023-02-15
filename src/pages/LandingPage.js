/**
 * The Landing page of the whole website
 * The left side is the sidebar, the right side is the page's content
 * Outlet is being rendered inside App.js through Router
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