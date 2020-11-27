import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';
import AuthService from "../services/auth.service";
import authHeader from '../services/auth-header';
import { PostData } from "./PostData";



class Menu extends Component {
    

   

   
    render() {
        
        return (

            <Switch>

                {/* {currentUser && ( */}

                    <aside className="main-sidebar sidebar-light-yellow elevation-4">

                        {/* Brand Logo */}
                        <Link to="/dashboard" className="brand-link">
                       <center> <img src="dist/img/LoadReading.png" alt="" className="" style={{ opacity: '.9' }} /></center><br/>
                       <center> <span className="brand-text font-weight-light text-yellow"><h3><b>GRIDX</b></h3></span></center>
                    </Link>
                        {/* Sidebar */}
                        <div className="sidebar">

                            {/* Sidebar Menu */}
                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                                    <li className="nav-item has-treeview menu-open">

                                    <li class="nav-item has-treeview">

                                    <Link to="/dashboard" className="nav-link active">
                                    <i class="nav-icon fas fa-home text-yellow"></i>
                                        <p>
                                            Dashboard
                                            
                                        </p>
                                    </Link>
                                    </li>

                                    </li>
                                    <li className="nav-item has-treeview menu-open">

                                        <ul class="nav nav-treeview">
                                        <li class="nav-item has-treeview">
                                            <Link to="/loadreadings" className="nav-link ">
                                                    <i class="nav-icon fas fa-tachometer-alt text-red"></i>
                                                    <p>
                                                    HT Load Readings
                                       {/* <i class="fas fa-arrow-circle-left right text-red">  </i> */}
                                                    </p>
                                                    </Link>
                                                
                                       
                                                    
                                                   

                                            </li>

                                        </ul>
                                        <ul class="nav nav-treeview">
                                            
                                            
                                        </ul>
                                        <ul class="nav nav-treeview">
                                            <li class="nav-item has-treeview">
                                            <Link to="/operationht" className="nav-link ">
                                                    <i class="nav-icon fas fa-gavel text-blue"></i>
                                                    <p>
                                                            HT  Operations
                                                    </p>
</Link>                                               
                                            

                                            </li>

                                        </ul> 
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item has-treeview">
                                            <Link to="/loadreadings" className="nav-link ">
                                                <i class="nav-icon fas fa-flash text-green"></i>
                                                <p>
                                                   HT Reports
                                       <i class="fas fa-arrow-circle-left right text-red">  </i>
                                                </p>
                                            </Link>


                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">

                                                </li>
                                                <li class="nav-item">
                                                    <Link to="/hourly" className="nav-link">
                                                        <i className="nav-icon fas fa-clock" />
                                                        <p>
                                                            Operation
                                </p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="/daily" className="nav-link">
                                                        <i className="nav-icon fas fa-clock" />
                                                        <p>
                                                             Load Readings
                                </p>
                                                    </Link>
                                                </li>
                                                



                                            </ul>

                                        </li>

                                        </ul>
                                        
                                       
                                       
                                    </li>
                                    
                                </ul>
                                
                                
                            </nav>
                            {/* /.sidebar-menu */}
                        </div>
                        {/* /.sidebar */}

                    </aside>

                {/* )} */}
            </Switch>

        )
    }
}

export default Menu;