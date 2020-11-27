import React from 'react'
import { Link } from 'react-router-dom';

export default function Landing() {



    return (

        <div class="landing-page sidebar-collapse"  >
            <link href="./assets/css/material-kit.css?v=2.0.7" rel="stylesheet" />

            <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
                <div className="container">
                    <div className="navbar-translate">
                        <img src="./assets/img/kedco-logo-web.png" height="70px" />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon" />
                            <span className="navbar-toggler-icon" />
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="dropdown nav-item">
                            <Link to="/login" className="dropdown-toggle nav-link" data-toggle="">
                                    <i className="nav-icon fas fa-th" /> Admin
                           </Link>
                            </li></ul>
                    </div>
                </div>
            </nav>
            <div className="page-header header-filter" data-parallax="true" style={{ backgroundImage: 'url("./assets/img/transformer.jpg")' }}>
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="title">GRIDX </h1>
                            <h4> providing database for collection, storing and processing grid data including energy reading, load reading, operations and maintenance both on low tension and high tension
</h4>
                            <hr />
                            <Link to="/dashboard"  className="btn btn-secondary btn-raised btn-lg">
                                <i className="fa fa-dashboard" />  Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main main-raised">
                <div className="container">
                    <div className="section text-center">


                    </div></div></div></div>




    )
}