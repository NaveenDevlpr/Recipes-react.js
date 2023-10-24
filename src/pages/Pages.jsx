import React from "react";
import Home from '../pages/home'
import { Route,Routes} from "react-router-dom";
import Cuisines from "./Cuisines";
import Searched from "./Searched";
import Details from "./Details";
const Pages=()=>{
    return (

         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cuisine/:type' element={<Cuisines/>}/>
            <Route path='/searched/:search' element={<Searched/>}/>

            <Route path='/recipe/:name' element={<Details/>}/>
        </Routes>
       
    )
}

export default Pages;