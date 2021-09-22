import React ,{Component}from "react";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import SellOldBook from "./Dashboards/SellOldBook"
import Orders from "./Dashboards/Orders"
import Sidebar from "./Dashboards/Sidebar";
class DashboardCust extends Component{

    render(){
        return(
            <Router>
                <Sidebar />
                <Switch>
                   
                    <Route exact path ="/sellBookCust" component={SellOldBook} />
                    <Route exact path ="/Orders" component={Orders} />


                </Switch>
            </Router>
        )
    }
    

}
export default DashboardCust;