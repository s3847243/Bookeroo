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
            
            

        // <div className="Persons">
        //     <div className="container">
        //         <div className="row">
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
    
        )
    }
}
export default Dashboard;
