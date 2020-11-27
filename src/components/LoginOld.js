import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { PostData } from "./PostData";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'



class Login extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false,
            loading: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);

    }



    login() {

        this.setState({ loading: true });

        if (this.state.username && this.state.password) {
            PostData(this.state).then((result) => {
                let responseJson = result;

                if (responseJson.token) {
                    sessionStorage.setItem('token', JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });

                }
                else {
                    console.log(responseJson.non_field_errors);
                }


            });

        }

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    componentDidMount() {

    }



    render() {

        const {loading} = this.state;

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/dashboard'} />)
        }

        if (sessionStorage.getItem('token')) {
            return (<Redirect to={'/dashboard'} />)
        }


        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <img src="./assets/img/kedco-logo-web.png" height="70px" />
                        <br />
                        <a href=""><b>Meter Audit</b> Reports</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>

                            <br />
                            <div className="input-group mb-3" align="center">
                                <input type="text" name="username" className="form-control" placeholder="username" onChange={this.onChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                
                                {/* /.col */}

                                <div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block" value="Login"   onClick={this.login} >Sign In
                                {
                                    loading && 
                                    <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                  />

                                }

                                
                                </button>



                                {/* <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
    </div>*/}
                                {/* /.col */}
                            </div>

                            <div className="social-auth-links text-center mb-3">

                            </div>
                            {/* /.social-auth-links */}

                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
                {/* /.login-box */}



            </div>

        )
    }
}
export default Login;


