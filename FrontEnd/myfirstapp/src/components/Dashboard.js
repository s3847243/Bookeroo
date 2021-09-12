import React, { Component} from 'react'
import DashNav from './Dashboards/DashNav';
import DashContent from './Dashboards/DashContent';
import Sidebar from './Dashboards/Sidebar';
import "../App.css"
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import AllUsers from './Dashboards/AllUsers';
import ApproveUsers from './Dashboards/ApproveUsers';
import AllBooks from './Dashboards/AllBooks';
import Transactions from './Dashboards/Transactions';
import Reports from './Dashboards/Reports';
class Dashboard extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            userType: "admin",
            currentPage: "allBooks"
        };
    }

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
        
        <>
        <h1 className = 'head-Dash'>Welcome to the Dashboard</h1>
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path ='/AllUsers'  component={AllUsers} />
                    <Route exact path ='/ApproveUsers' component={ApproveUsers} />
                    <Route exact path ='/AllBooks'  component={AllBooks} />
                    <Route exact path ='/Transactions'  component={Transactions} />
                    <Route exact path ='/Reports'  component={Reports} />
                </Switch>
            </Router>
        </>
        )
    }
}
export default Dashboard;
