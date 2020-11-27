import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { PostData } from "./PostData";
import { Redirect } from 'react-router-dom';


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
          loading: false,
          message: ""
        };
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.login(this.state.username, this.state.password).then(
            () => {
              this.props.history.push("/dashboard");
              window.location.reload();
            },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
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
                <div className="">
                    <div className="login-logo">
                        <img src="dist/img/admin copy.png" height="70px" />
                        <br />
                        <a href=""><b>Meter Audit</b> Reports</a>
                    </div>


                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>

                            <br />

                            <Form
                                onSubmit={this.handleLogin}
                                ref={c => {
                                    this.form = c;
                                }}
                            >

                                <div className="input-group mb-4">

                                    <Input type="text" name="username" className="form-control" placeholder="username" value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        validations={[required]}
                                    />
                                    <div className=" input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group mb-4">
                                    <Input type="password" name="password" className="form-control" placeholder="Password" value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required]} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <br />


                                <div className="form-group">
                                    <button
                                        className="btn btn-primary btn-block"
                                        disabled={this.state.loading}
                                    >
                                        {this.state.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>Login</span>
                                    </button>
                                </div>


                                {this.state.message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {this.state.message}
                                        </div>
                                    </div>
                                )}
                                <CheckButton
                                    style={{ display: "none" }}
                                    ref={c => {
                                        this.checkBtn = c;
                                    }}
                                />

                            </Form>

                        </div>

                    </div>

                </div>
            </div>


        );
    }
}