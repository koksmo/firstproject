import React from "react"
import { Outlet, Link } from "react-router-dom";


function Nav(){


    return(
        <div>
           <ul>
              <li>
           <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/Contact">Contact</Link>
              </li>
              <li>
              <Link to="/Blogs">Blogs</Link>
              </li>
              <li>
              <Link to="/About">About us</Link>
              </li>
            
            </ul>    
     <Outlet/>
        </div>


    )
}
export default Nav;