import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';

function Layout() {
  return (
    <>
      <TopNav />
      <main>
        <Outlet /> {/* Child routes will be rendered here */}
      </main>
    </>
  );
}

export default Layout;