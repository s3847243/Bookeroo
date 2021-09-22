import React, { Component, Fragment} from 'react'
import Sidebar from './Dashboards/Sidebar';
import "../App.css"
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import AllUsers from './Dashboards/AllUsers';
import ApproveUsers from './Dashboards/ApproveUsers';
import AllBooks from './Dashboards/AllBooks';
import Transactions from './Dashboards/Transactions';
import Reports from './Dashboards/Reports';
import AddBook from "./Dashboards/AddBook";
import SellBook from "./Dashboards/SellBook";
import SellOldBook from "./Dashboards/SellOldBook"
import Orders from "./Dashboards/Orders"
class Dashboard extends Component { 


    render() {
        return (
            // <React.StrictMode>
            //    <DashNav userType = {this.state.userType} />
            //    <DashContent currentPage = {this.state.currentPage} /> 
            // </React.StrictMode>
        //     <div className = "side">
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
        //     </div>
            
            

        // // <div className="Persons">
        // //     <div className="container">
        // //         <div className="row">
        //             <div className="col-md-12">
        //                 <h1 className="display-4 text-center">Persons</h1>
        //                 <br />
        //                <CreatePersonButton />
        //                 <br />
        //                 <hr />
        //                 <Person/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    
        //)
        
        
        <Fragment>
            <Router>
                <Sidebar />
                <Switch>
                    <Route  path ='/AllUsers'  component={AllUsers} /> 
                    <Route  path ='/ApproveUsers' component={ApproveUsers} />
                    <Route  path ='/AllBooks'  component={AllBooks} />
                    <Route  path ='/Transactions'  component={Transactions} />
                    <Route  path ='/Reports'  component={Reports} />
                    <Route exact path ="/addBook" component={AddBook} />
                    <Route exact path ="/sellBookCust" component={SellOldBook} />
                    <Route exact path ="/Orders" component={Orders} />
                    <Route exact path ="/SellBook" component={SellBook} />

                </Switch>
            </Router>
        </Fragment>
        )
    }
}
export default Dashboard;
