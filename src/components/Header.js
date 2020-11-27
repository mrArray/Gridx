import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthService from "../services/auth.service";


    class Header extends Component {

      constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined
        };
      }
    
      componentDidMount() {
    
        //user  stored user information (including JWT) from AuthService class
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.groups.includes("MeterAuditEnumerator"),
            showAdminBoard: user.groups.includes("ROLE_ADMIN")
          });
        }
      }
    
      logOut() {
        AuthService.logout();
      }

    render(){
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <Router>
                     {/* {currentUser && ( */}

        <nav className="main-header navbar navbar-expand navbar-yellow navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav" >
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
               
            </ul>
            {/* SEARCH FORM */}
           
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                {/* Messages Dropdown Menu */}
               
                {/* Notifications Dropdown Menu */}
                
                {/* <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"  onClick={this.logout} role="button">
                        <i className="fas fa-user badge-danger" />Sign out
                    </a>
                </li> */}
            </ul>
        </nav>
                     {/* )} */}
</Router>
    )
}
    }
    export default Header;
