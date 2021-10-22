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
import CustomerOrders from './Dashboards/CustomerOrders';
import TransactionBoughtCustomer from './Dashboards/TransactionBoughtCustomer'
import TransactionSoldCustomer from './Dashboards/TransactionSoldCustomer'
import TransactionShopOwner from './Dashboards/TransactionShopOwner'
class Dashboard extends Component { 


    render() {
        return (    
        <Fragment>
            <Router>
                <Sidebar />
                <Switch>
                    <Route  path ='/AllUsers'  component={AllUsers} /> 
                    <Route  path ='/ApproveUsers' component={ApproveUsers} />
                    <Route  path ='/AllBooks'  component={AllBooks} />
                    <Route  path ='/Transactions'  component={Transactions} />
                    <Route  path ='/Transaction_Shop_Owner'  component={TransactionShopOwner} />
                    <Route  path ='/Reports'  component={Reports} />
                    <Route exact path ="/addBook" component={AddBook} />
                    <Route exact path ="/sellBookCust" component={SellOldBook} />
                    <Route exact path ="/Orders" component={CustomerOrders} />
                    <Route exact path ="/sellBooks" component={SellBook} />
                    <Route exact path = "/TransactionSold" component={TransactionSoldCustomer} />
                    <Route exact path = "/TransactionBought" component={ TransactionBoughtCustomer} />

                </Switch>
            </Router>
        </Fragment>
        )
    }
}
export default Dashboard;
