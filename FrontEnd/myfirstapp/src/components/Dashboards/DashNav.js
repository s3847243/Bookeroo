import React from 'react'

function DashNav({userType}) {
    
        if (userType === "admin") {
            return (
                <ul>
                    <li>
                        All Users
                    </li>
                    <li>
                        Approve Users
                    </li>
                    <li>
                        All Books
                    </li>
                    <li>
                        Transactions
                    </li>
                    <li>
                        Report
                    </li>
                </ul>  
            )
        } else if (userType === "public") {
            return (
                <ul>
                    <li>
                        Sold
                    </li>
                    <li>
                        Bought
                    </li>
                    <li>
                        Orders
                    </li>
                    <li>
                        Sell
                    </li>
                </ul> 
                
            )
        } else if (userType === "business") {
            return (
                <ul>
                    <li>
                        All Books
                    </li>
                    <li>
                        Transactions
                    </li>
                    <li>
                        Orders
                    </li>
                    <li>
                        Add Books
                    </li>
                    <li>
                        Sell
                    </li>
                </ul>  
            )
        }
        
    
}

export default DashNav;
