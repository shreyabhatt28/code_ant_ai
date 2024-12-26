import { Sidebar } from 'lucide-react';
import './MenuModalStyles.css';
import SidebarMenu from './SidebarMenu/'

const MenuModal = () => {
    return(
        <div className="modal-div">
            <div className='sidebar-content'>
            <SidebarMenu/>
            </div>
        </div>
    )
}

export default MenuModal