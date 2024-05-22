import React from 'react'
import './MyProjects.css';
import { Link, NavLink } from 'react-router-dom';
import Msidebar from './MSidebar/Msidebar';
const MyProjects = () => {
    return (
        <div style={{ margin: '0 10px 0px 10px' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome to my projects</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Resume'><div className='projectTab'>Resume</div></NavLink>
                <NavLink to='/BeautyPage'><div className='projectTab'>BeautyPage</div></NavLink>
                <NavLink to='/Calc'><div className='projectTab'>Calc</div></NavLink>
                <NavLink to='/PieChart'><div className='projectTab'>PieChart</div></NavLink>
                <NavLink to='/UnsplashClone'><div className='projectTab'>UnsplashClone</div></NavLink>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                <NavLink to='/MyComponent'><div className='projectTab'>Tooltip</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
                <NavLink to='/Msidebar'><div className='projectTab'>SideBar</div></NavLink>
            </div>
        </div>
    )
}

export default MyProjects
