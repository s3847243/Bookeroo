import React ,{Component}from "react";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import SellOldBook from "./Dashboards/SellOldBook"
import Orders from "./Dashboard/Orders"
import AddBook from "./Dashboards/AddBook";
import SellBook from "./Dashboard/SellBook";
class DashboardShop extends Component{

    render(){
        return(
            <Router>
                <Sidebar />
                <Switch>
                   
                    <Route exact path ="/addBook" component={AddBook} />
                    <Route exact path ="/SellBook" component={SellBook} />


                </Switch>
            </Router>
        )
    }
    

}
export default DashboardShop;