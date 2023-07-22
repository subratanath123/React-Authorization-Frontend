import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from "./SignUp";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/" element={<MailVerification/>}/>
            </Routes>
        </Router>
    );
};

export default App;