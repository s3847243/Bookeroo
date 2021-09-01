import React, { Component} from 'react'
import DashNav from './Dashboards/DashNav';
import DashContent from './Dashboards/DashContent';

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
            <React.StrictMode>
               <DashNav userType = {this.state.userType} />
               <DashContent currentPage = {this.state.currentPage} /> 
            </React.StrictMode>
            
            
    
        )
    }
}
export default Dashboard;
