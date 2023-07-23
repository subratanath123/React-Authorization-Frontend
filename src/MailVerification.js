import React from 'react';
import FormInput from "./FormInput";
import Button from "./Button";
import {useLocation, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";

const MailVerification = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [state, setState] = useState({
        verificationCode: '',
        formState: '',
        email: location.state.email,
        submitted: false
    });

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleMailVerify = (e) => {
        const {email, verificationCode} = state;

        setState({
            ...state,
            submitted: true
        });

        axios
            .post('http://auth-server:8000/public/mail-verification', {email, verificationCode})
            .then((response) => {
                    const stateData = {message: state.email + " has been verified successfully"};
                    navigate('/done', {state: stateData});

                    console.log('Verification successfully');
                }
            )
            .catch((error) => {
                console.log('Verification failed:', error);
            });
    };

    return (
        <form className={`row g-3 ${state.formState === "invalid" && 'needs-validation'}`}>

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
                                            <h2 className="mb-5" hidden={state.submitted}>
                                                Be Friend Me
                                            </h2>

                                            <div className="text-center spinner-container" hidden={!state.submitted}>
                                                <div className="spinner-border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>

                                            <div className="row" hidden={state.submitted}>
                                                < FormInput type='text' bindPath='verificationCode'
                                                            placeholder={state.verificationCode}
                                                            isSingleDiv='false'
                                                            required='true'
                                                            value={state.verificationCode}
                                                            callback={(e) => handleInputChange(e)}/>

                                                <div className="small text-success-emphasis mt-2">
                                                    We have sent you verification code on your email ({state.email})
                                                </div>
                                            </div>

                                            <div className="row" hidden={state.submitted}>
                                                < Button type='button' name='Verify'
                                                         callback={() => handleMailVerify()}/>
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
    )
}

export default MailVerification;
