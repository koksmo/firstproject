import React from "react";
import { BrowserRouter,Routes ,Route }  from "react-router-dom";

import Nav from "./Pages/Nav";
import Hom from "./Pages/Hom";
import Contact from "./Pages/Contact";
import About from "./Pages/Abut";
import Blogs from "./Pages/Blogs";




function Allink(){


    return(<div>
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Nav/>} >
                   <Route index element={<Hom />} />
                   <Route path="Contact" element={<Contact/>}/>
                   <Route path="Blogs" element={<Blogs/>}/>
                   <Route path="About" element={<About/>}/>
              </Route>
            </Routes>
        
        </BrowserRouter>





    </div>)
}
export default Allink;