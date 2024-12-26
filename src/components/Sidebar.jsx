import '../layouts/styles/HomeLayout.css'
import darkLogo from '../assets/dark-logo.svg'
import { useState } from 'react';
import SidebarMenu from './SidebarMenu/'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
return (
    <div className='sidebar'>
        {/* nav portion */}
        <div className='nav-bar'>
            <div className='logo-title'>
                <img src={darkLogo}/>
                <p>CodeAnt AI</p>
            </div>
            <img className='menu-icon' src='/menu-icon.svg'/>
        </div>

        {/* side bar content */}
        <div className='menu-div'>
            <SidebarMenu/>
        </div>

    </div>
)
}

export default Sidebar;