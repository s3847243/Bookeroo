import React, { Component, Fragment } from 'react'
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";
import { getType } from '../../actions/securityActions';

 class Header extends Component {

    onLogout(e) {
        logout();
    }
    doClick(){
        if(getType() === "USER"){
            window.location.href = "DashboardCust";
        }else if(getType() === "BUSINESS"){
            window.location.href = "DashboardShop";
        }else if (getType() === "ADMIN"){
            window.location.href = "dashboard";
        }else{
            window.location.href = "ErrorPage";
        }
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Bookeroo
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
    
                <div className="collapse navbar-collapse" id="mobile-nav">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">
                                Dashboard
                            </a>
                        </li>
                    </ul> */}
                    
                    <ul className="navbar-nav ml-auto">
                    {
                        localStorage.jwtToken ? 

                        <li className="nav-item">
                            <a id="logout" className="nav-link" href="/" onClick={this.onLogout}>
                                Logout
                            </a>
                        </li>
                        : 
                        <Fragment>
                        <li className="nav-item">
                            <a id="signup" className="nav-link " href="/register">
                                Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id="login" className="nav-link" href="/login">
                                Login
                            </a>
                        </li>
                        </Fragment>
                    }
                    {
                        (getType() == "USER" || getType() == "NONE") 
                        ?
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart
                            </a>
                        </li>
                        :
                        <Fragment/>
                    }
                        

                        <li className="nav-item">
                            <a id="contact" className="nav-link" href="/contact">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id="about" className="nav-link" href="/about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id="dashboard" className="nav-link" href="/ErrorPage">
                                Dashboard
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <nav>
            {/* <navDropdown title = "UserName">

            </navDropdown> */}
        </nav>
            </div>
        )
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    security: state.security,
  errors: state.errors
});

export default connect(
mapStateToProps,
{ logout }
)(Header);

