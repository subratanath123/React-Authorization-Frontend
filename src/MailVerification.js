import React, {Component} from 'react';
import FormInput from "./FormInput";
import Button from "./Button";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]: {value: e.target.value, error: '', errorClass: ''}});
    };


    render = () =>
        <form className={`row g-3 ${ this.state.formState === "invalid" && 'needs-validation' }`}>

            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample photo"
                                            className="img-fluid"
                                            style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem"}}/>

                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h2 className="mb-5 text-uppercase">
                                                Mail Verification
                                            </h2>

                                            <div className="row">
                                                < FormInput type='text' bindPath='firstName' placeholder="First Name"
                                                            isSingleDiv='true'
                                                            error={this.state.firstName.error}
                                                            value={this.state.firstName.value}
                                                            errorClass={this.state.firstName.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>

                                                < FormInput type='text' bindPath='lastName' placeholder="Last Name"
                                                            isSingleDiv='true'
                                                            error={this.state.lastName.error}
                                                            value={this.state.lastName.value}
                                                            errorClass={this.state.lastName.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>
                                            </div>

                                            <div className="row">
                                                < Button type='button' name='Sign Up'
                                                         callback={() => this.handleSignup()}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
}

