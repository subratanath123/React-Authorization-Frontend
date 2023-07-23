import React, {Component} from 'react';
import FormInput from "./FormInput";
import Button from "./Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignUpWrapper = () => {
    const navigate = useNavigate();

    return <SignUp navigate={navigate}/>;
};

export default SignUpWrapper;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formState: '',
            options: ['Male', 'Female'],
            firstName: {value: '', error: '', errorClass: ''},
            lastName: {value: '', error: '', errorClass: ''},
            email: {value: '', error: '', errorClass: ''},
            phone: {value: '', error: '', errorClass: ''},
            gender: {value: '', error: '', errorClass: ''},
            password: {value: '', error: '', errorClass: ''},
            confirmPassword: {value: '', error: '', errorClass: ''},
        }
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]: {value: e.target.value, error: '', errorClass: ''}});
    };

    handleSignup = () => {
        const {firstName, lastName, email, phone, gender, password, confirmPassword} = this.state;

        const signupData = Object.entries({firstName, lastName, email, phone, gender, password, confirmPassword})
            .reduce((acc, [key, value]) => {
                acc[key] = value.value;
                return acc;
            }, {});

        axios
            .post('http://auth-server:8000/public/registration', signupData)
            .then((response) => {
                    const stateData = {email: this.state.email.value};
                    this.props.navigate('/mail-verification', {state: stateData});
                }
            )
            .catch((error) => {
                if (error.response && error.response.status === 400) {

                    error.response.data
                        .fieldErrors
                        .map(error => this.setState({
                            [error.field]: {
                                value: this.state[error.field].value,
                                error: error.message,
                                errorClass: 'is-invalid'
                            }
                        }));

                    this.setState({
                        formState: 'invalid'
                    });

                } else {
                    console.error('Signup failed:', error);
                }
            });
    }

    render = () =>
        <form className={`row g-3 ${this.state.formState === "invalid" && 'needs-validation'}`}>

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
                                            <h2 className="mb-5">
                                                Registration
                                            </h2>

                                            <div className="row">
                                                < FormInput type='text' bindPath='firstName' placeholder="First Name"
                                                            isSingleDiv='false'
                                                            error={this.state.firstName.error}
                                                            value={this.state.firstName.value}
                                                            errorClass={this.state.firstName.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>

                                                < FormInput type='text' bindPath='lastName' placeholder="Last Name"
                                                            isSingleDiv='false'
                                                            error={this.state.lastName.error}
                                                            value={this.state.lastName.value}
                                                            errorClass={this.state.lastName.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>
                                            </div>

                                            <div className="row">
                                                < FormInput type='text' bindPath='email' placeholder="Email"
                                                            error={this.state.email.error}
                                                            value={this.state.email.value}
                                                            errorClass={this.state.email.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>
                                            </div>

                                            <div className="row">
                                                < FormInput type='text' bindPath='phone' placeholder="Phone Number"
                                                            error={this.state.phone.error}
                                                            value={this.state.phone.value}
                                                            errorClass={this.state.phone.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>
                                            </div>

                                            <div className="row">
                                                < FormInput type='radio' bindPath='gender' placeholder="Gender"
                                                            options={this.state.options}
                                                            error={this.state.gender.error}
                                                            value={this.state.gender.value}
                                                            errorClass={this.state.gender.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>
                                            </div>

                                            <div className="row">
                                                < FormInput type='password' bindPath='password' placeholder="Password"
                                                            error={this.state.password.error}
                                                            value={this.state.password.value}
                                                            errorClass={this.state.password.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>
                                            </div>

                                            <div className="row">
                                                < FormInput type='password' bindPath='confirmPassword'
                                                            placeholder="Confirm Password"
                                                            error={this.state.confirmPassword.error}
                                                            value={this.state.confirmPassword.value}
                                                            errorClass={this.state.confirmPassword.errorClass}
                                                            callback={(e) => this.handleInputChange(e)}/>
                                            </div>

                                            <div className="row">
                                                < Button type='button' name='Sign Up'
                                                         align='left'
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