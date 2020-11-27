import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Menu from "./Menu";
import Header from "./Header";
import Content from './Content'




export default class Welcome extends Component {
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

    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <div className="hold-transition sidebar-mini layout-fixed">
                <div class="wrapper">
                    <Router>
                        <aside className="main-sidebar sidebar-white-primary elevation-4">
                            {/* Brand Logo */}
                            <Link to="/dashboard" className="brand-link">
                                <img src="dist/img/AdminLTELogo.png" alt="" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                                <span className="brand-text font-weight-light">Kedco Meter Audit</span>
                            </Link>
                            {/* Sidebar */}
                            <div className="sidebar">

                                {/* Sidebar Menu */}
                                <nav className="mt-2">
                                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                        {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                                        <li className="nav-item has-treeview menu-open">
                                            {currentUser && (

                                                <Link to={"/dashboard"} className="nav-link active">
                                                    <i className="nav-icon fas fa-home" />
                                                    <p>
                                                        DASHBOARD
                              <i className="right fas fa-angle-left" />
                                                    </p>
                                                </Link>
                                            )}
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item has-treeview">
                                                    <a href="" class="nav-link">
                                                        <i class="nav-icon fas fa-tachometer-alt text-yellow"></i>
                                                        <p>
                                                            STATISTICS
                                       <i class="fas fa-angle-left right"></i>
                                                        </p>
                                                    </a>
                                                    <ul class="nav nav-treeview">
                                                        <li class="nav-item">

                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/feeder" className="nav-link">
                                                                <i className="nav-icon fas fa-book" />
                                                                <p>
                                                                    Feeder
                                </p>
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/region" className="nav-link">
                                                                <i className="nav-icon fas fa-school" />
                                                                <p>
                                                                    Region
                                </p>
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/transformer" className="nav-link">
                                                                <i className="nav-icon fas fa-th" />
                                                                <p>
                                                                    Transformer
                                </p>
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/csp" className="nav-link">
                                                                <i className="nav-icon fas fa-desktop" />
                                                                <p>
                                                                    Csp
                                </p>
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/state" className="nav-link">
                                                                <i className="nav-icon fas fa-home" />
                                                                <p>
                                                                    State
                                </p>
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/meter" className="nav-link">
                                                                <i className="nav-icon fas fa-calculator" />
                                                                <p>
                                                                    Meter
                                </p>
                                                            </Link>
                                                        </li>
                                                    </ul>

                                                </li>

                                                {showAdminBoard && (
                                                    <li class="nav-item has-treeview">
                                                        <Link to={"/allcaptures"} class="nav-link">
                                                            <i class="nav-icon fas fa-book text-green"></i>
                                                            <p>
                                                                DOWNLOAD REPORTS
                <i class="fas fa-angle-left right"></i>
                                                            </p>
                                                        </Link>

                                                    </li>
                                                )}

                                                {showModeratorBoard && (

                                                    <li class="nav-item has-treeview">
                                                        <Link to={"/allcaptures"} class="nav-link">
                                                            <i class="nav-icon fas fa-book text-green"></i>
                                                            <p>
                                                                REGIONAL REPORTS
                <i class="fas fa-angle-left right"></i>
                                                            </p>
                                                        </Link>

                                                    </li>
                                                )}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                {/* /.sidebar-menu */}
                            </div>
                            {/* /.sidebar */}
                        </aside>
                    </Router>

                    <BrowserRouter>
    
    <Content/>
    </BrowserRouter>

                </div>
            </div>
        );
    }
}