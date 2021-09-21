import React, { Fragment, useState } from 'react';
//import '../App.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import {Link} from 'react-router-dom';
import "../Sidebar.css"
import {IconContext} from 'react-icons'
function Sidebar() {
    const [sBar,setSidebar]=useState(false);
    const showSidebar = () => setSidebar(!sBar);

    return(
        <Fragment>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className='sidebar'>
               <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />   
                </Link> 
            </div>
            <nav className={'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    {SidebarData.map((item,index) => {
                        return(
                            <li key = {index} className={item.cName}>
                            <Link to = {item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>
            </IconContext.Provider>
        </Fragment>
    );

    
}
// function Sidebar(){
//     return(
//         <div className="Sidebar">
//             <ul className = "SidebarList">
//                 {
//                     SidebarData.map((val,key) =>{
//                         return (
//                             <li
//                                 key={key}
//                                 className = "row"
//                                 id={window.location.pathname == val.link ? "active" : ""}
//                                 onClick={() => {
//                                     window.location.pathname = val.link;
//                                 }}
//                             >
//                                 <div id="icon">{val.icon}</div>
//                                 <div id = "title">{val.title}</div>
//                             </li>
//                         );
//                     })
//                 }
//             </ul>        
//         </div>
//     );
// }


export default Sidebar;