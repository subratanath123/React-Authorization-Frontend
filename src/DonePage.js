import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';

const DonePage = () => {
    const location = useLocation();

    const [state, setState] = useState({
        message: location.state.message
    });

    return (
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
                                        <h1 className="mb-5">
                                            Action Complete
                                        </h1>

                                        <div className="large text-bg-success mt-2">
                                            {state.message}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonePage;
