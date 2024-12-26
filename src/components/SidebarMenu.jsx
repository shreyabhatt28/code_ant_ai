import '../layouts/styles/HomeLayout.css';
import { NavLink } from 'react-router-dom';

const menuItems = [
    [
            {
            id:1,
            icon:'/home-dark.svg',
            title:'Repositories',
            src: '/repositories'
            },
            {
            id:2,
            icon:'/code.svg',
            title:'AI Code Review',
            src: '/code'
            },
            {
            id:3,
            icon:'/cloud.svg',
            title:'Cloud Security',
            src: 'cloud'
            },
            {
            id:4,
            icon:'/book.svg',
            title:'How to use',
            src: '/howto'
            },
            {
            id:5,
            icon:'/gear.svg',
            title:'Settings',
            src: 'settings'
            },
    ],
    [
        {
        id:6,
        icon:'/phone.svg',
        title:'Support',
        src:'/support',
        },
        {
        id:7,
        icon:'/sign-out.svg',
        title:'Logout (SignUp Page)',
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
                    <img src= {item.icon}/>
                    {item.title} 
                </NavLink>
            ))}
        </div>
        <div className='support'>
        {menuItems[1].map(item => (
                <NavLink className={({ isActive }) => isActive ? 'menu-item active-item' : 'menu-item'} to={item.src} key={item.id}>
                <img src= {item.icon}/>
                {item.title} 
            </NavLink>
            ))}
        </div>
    </div>
)
}

export default SidebarMenu;