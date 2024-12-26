import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Repositories from "./Repositories";
import Code from "./Code";
import Cloud from "./Cloud";
import HowTo from "./HowTo";
import Settings from "./Settings";
import Support from "./Support";

const Home = () =>{
return (
    <Routes>
        <Route path="/" element={<HomeLayout/>}>
        <Route path="repositories" element={<Repositories/>}/>
        <Route path="code" element={<Code/>}/>
        <Route path="cloud" element={<Cloud/>}/>
        <Route path="howto" element={<HowTo/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="support" element={<Support/>}/>
        </Route>
    </Routes>
)
}

export default Home;