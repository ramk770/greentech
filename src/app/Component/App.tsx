"use client"
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { useState } from 'react';

export default function App() {
   const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
     <>
     <div>
     <div>
      <NavBar toggleSidebar={toggleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} />
      
    </div>
      
       
     </div>
     </>
  );
}
