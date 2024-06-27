import React from 'react';
import './sidebar.css';
import SidebarList from './SidebarList';



function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
     
                <SidebarList title ='Dashboard' firstItemName = 'Home' firstItemIcon = 'LineStyle' secondItemName = 'Analytics' secondItemIcon = 'Timeline'/>
        </div>
      </div>
  
    );
  }
  
  
  
  export default Sidebar;
  