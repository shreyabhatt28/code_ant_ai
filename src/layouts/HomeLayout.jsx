import './styles/HomeLayout.css'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return(
        <div className="home-layout">
            <div className='side-div'>
                <Sidebar/>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default HomeLayout