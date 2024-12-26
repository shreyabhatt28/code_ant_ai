import { useState } from 'react';
import '../layouts/styles/HomeLayout.css';
import { NavLink } from 'react-router-dom';

const menuItems = [
    [
            {
            id:1,
            icon:'',
            title:'Repositories',
            src: '/repositories'
            },
            {
            id:2,
            icon:'',
            title:'AI Code Review',
            src: '/login'
            },
            // {
            // id:3,
            // icon:'',
            // title:'Cloud Security',
            // src: '/repositories'
            // },
            // {
            // id:4,
            // icon:'',
            // title:'How to use',
            // src: '/repositories'
            // },
            // {
            // id:5,
            // icon:'',
            // title:'Settings',
            // src: '/repositories'
            // },
    ],
    [
        {
        id:6,
        icon:'',
        title:'Support',
        src:'/login',
        },
        {
        id:7,
        icon:'',
        title:'Logout',
        src:'/login'
        },
    ]
    ]
const SidebarMenu = () => {


return(
    <div className='sidebar-menu'>
        <div className='user'>
            <p>ShreyaBhatt</p>
            <img style={{cursor:'pointer'}} src='/chevron-down.svg'></img>
        </div>
        <div className='menu-items'>
            {menuItems[0].map(item => (
                <NavLink className={({ isActive }) => isActive ? 'menu-item active-item' : 'menu-item'} to={item.src} key={item.id}>
                    {item.title} 
                </NavLink>
            ))}
        </div>
        <div className='support'>
        {menuItems[1].map(item => (
                <NavLink className={({ isActive }) => isActive ? 'menu-item active-item' : 'menu-item'} to={item.src} key={item.id}>
                {item.title} 
            </NavLink>
            ))}
        </div>
    </div>
)
}

export default SidebarMenu;