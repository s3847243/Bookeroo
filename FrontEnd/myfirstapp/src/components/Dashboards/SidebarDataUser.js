import React from 'react'
import * as FaIcons from 'react-icons/fa';
export const SidebarDataUser = [
    {
        title : "Transactions - Sold",
        icon: <FaIcons.FaEnvelope />,
        path: "/TransactionSold",
        cName:'nav-text'
    },
    {
        title : "Transactions - Bought",
        icon: <FaIcons.FaEnvelope />,
        path: "/TransactionBought",
        cName:'nav-text'
    },
    {
        title : "Orders",
        icon: <FaIcons.FaEnvelope />,  
        path: "/Orders",
        cName:'nav-text'
    },
    {
        title : "Sell old Book",
        icon: <FaIcons.FaEnvelope />,
        path: "/sellBookCust",
        cName:'nav-text'
    },


];