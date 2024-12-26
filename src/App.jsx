import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
