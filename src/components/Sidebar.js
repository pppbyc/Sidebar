import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "./Sidebar.css"



function Sidebar() {

  return (
    <>
        <div className="sidebar">
          <Link to="/">
            <ul className='back-home'>REALM HOME</ul>
          </Link>
          
            <ul className="list">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </ul>
        </div>
     
    </>
  );
}

export default Sidebar;