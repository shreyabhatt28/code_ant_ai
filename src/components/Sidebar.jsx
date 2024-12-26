import '../layouts/styles/HomeLayout.css'
import darkLogo from '../assets/dark-logo.svg'
import { useState } from 'react';
import SidebarMenu from './SidebarMenu/'
import MenuModal from './MenuModal/'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
return (
    <div className='sidebar'>
        <div className='nav-bar'>
            <div className='logo-title'>
                <img src={darkLogo}/>
                <p>CodeAnt AI</p>
            </div>
            <img className='menu-icon' src='/menu-icon.svg' onClick={()=>setIsOpen(prev => !prev)}/>
        </div>

        <div className='menu-div'>
            <SidebarMenu/>
        </div>

        {isOpen && <MenuModal/>}

    </div>
)
}

export default Sidebar;