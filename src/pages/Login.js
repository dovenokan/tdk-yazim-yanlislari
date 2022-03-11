/* eslint-disable no-unused-vars */
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
import { auth } from './firebases/firestore'
import Hero from './Hero';
import Admin from './Admin';
import Footer from './skeleton/Footer';
import Navbar from './skeleton/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Login() {
    const [user] = useAuthState(auth);
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className="App">
            {
            user ? 
            <> 
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" children={<Admin userData={user}/>} />
                    </ Switch>
                    <Footer />
                </ Router>
            </>
            :
            <>
                <Hero login={signInWithGoogle} />
            </>
            }
        </div>
    );
}

export default Login