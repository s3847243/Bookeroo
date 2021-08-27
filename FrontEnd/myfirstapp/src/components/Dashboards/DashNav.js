import React from 'react'

function DashNav({userType}) {
    
        if (userType === "admin") {
            return (
                <ul>
                    <button>
                        All Users
                    </button>
                    <button>
                        Approve Users
                    </button>
                    <button>
                        All Books
                    </button>
                    <button>
                        Transactions
                    </button>
                    <button>
                        Report
                    </button>
                </ul>  
            )
        } else if (userType === "public") {
            return (
                <ul>
                    <button>
                        Sold
                    </button>
                    <button>
                        Bought
                    </button>
                    <button>
                        Orders
                    </button>
                    <button>
                        Sell
                    </button>
                </ul> 
                
            )
        } else if (userType === "business") {
            return (
                <ul>
                    <button>
                        All Books
                    </button>
                    <button>
                        Transactions
                    </button>
                    <button>
                        Orders
                    </button>
                    <button>
                        Add Books
                    </button>
                    <button>
                        Sell
                    </button>
                </ul>  
            )
        }
        
    
}

export default DashNav;
