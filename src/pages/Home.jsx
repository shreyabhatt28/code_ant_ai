import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Repositories from "./Repositories";

const Home = () =>{
return (
    <Routes>
        <Route path="" element={<HomeLayout/>}>
        <Route path="repositories" element={<Repositories/>}/>
        </Route>
    </Routes>
)
}

export default Home;