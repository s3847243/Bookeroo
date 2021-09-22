import React, { Fragment, useState } from 'react';
//import '../App.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import {Link} from 'react-router-dom';
import "../Sidebar.css"
import {IconContext} from 'react-icons'
import {getType} from "../../actions/securityActions"
import { SidebarDataBus } from './SidebarDataBus';
import { SidebarDataUser } from './SidebarDataUser';

function Sidebar() {
    const [sBar,setSidebar]=useState(false);
    const showSidebar = () => setSidebar(!sBar);
    console.log(getType());
   if(getType() ==="USER"){

        return(
            <Fragment>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className='sidebar'>
                   <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />   
                    </Link> 
                </div>
                <nav className={sBar ? 'nav-menu active':'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='sbar-toggle'>
                            <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineCloseCircle />   
                            </Link> 
                        </li>

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
    else if(getType() === "ADMIN"){
        return(
            <Fragment>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className='sidebar'>
                   <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />   
                    </Link> 
                </div>
                <nav className={sBar ? 'nav-menu active':'nav-menu'}>
                     <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='sbar-toggle'>
                            <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineCloseCircle />   
                            </Link> 
                        </li>
                        {SidebarDataUser.map((item,index) => {
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
    else if(getType() === "BUSINESS"){
        return(
            <Fragment>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className='sidebar'>
                   <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />   
                    </Link> 
                </div>
                <nav className={sBar ? 'nav-menu active':'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='sbar-toggle'>
                            <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineCloseCircle />   
                            </Link> 
                        </li>
                        {SidebarDataBus.map((item,index) => {
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

   

    
}

export default Sidebar;