import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar_main'>
      <p className='sidebar_pTag'>Home</p>
      <p className='sidebar_pTag'>Contact</p>
      <p className='sidebar_pTag'>About us</p>
      <p className='sidebar_pTag'>Address</p>
    </div>
  )
}

export default Sidebar;