import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from "./SignUp";
import MailVerification from "./MailVerification";
import DonePage from "./DonePage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/mail-verification" element={<MailVerification/>}/>
                <Route path="/done" element={<DonePage/>}/>
            </Routes>
        </Router>
    );
};

export default App;