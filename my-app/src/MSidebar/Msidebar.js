import React, { useState, useEffect } from 'react'
import './MSidebar.css'
import {
    FaBars,
    FaCommentAlt,
    FaRegChartBar,
    FaShoppingBag,
    FaTh, FaThList, FaUserAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Msidebar = ({children}) => {
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <FaTh />
        },
        {
            path: '/About',
            name: 'About',
            icon: <FaUserAlt />
        },
        {
            path: '/Analytics',
            name: 'Analytics',
            icon: <FaRegChartBar />
        },
        {
            path: '/Comments',
            name: 'Comments',
            icon: <FaCommentAlt />
        },
        {
            path: '/Product',
            name: 'Product',
            icon: <FaShoppingBag />
        },
        {
            path: '/ProductList',
            name: 'Product List',
            icon: <FaThList />
        }
    ]
    return (
        <div className='MsidebarContainer'>
            <div className='sidebar' style={{width:isOpen?"250px":'46px'}}>
                <div className='top_section'>
                    <h1 className='logo' style={{display:isOpen?"block":"none"}}>Logo</h1>
                    <div style={{marginLeft:isOpen?"50px":"0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>

                {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className='link' activeClassName='active'>
                        <div className='icon'>{item.icon}</div>
                        <div className='link_text' style={{display:isOpen?"block":"none"}}>{item.name}</div>
                        <div></div>
                    </NavLink>
                ))
            }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Msidebar;