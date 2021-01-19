import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleLogIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };
    
    return (
        <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 d-flex justify-content-center align-items-center">
            <div style={{ minHeight: "22rem", width: "18rem" }} className="card shadow">
                <div className="card-body d-flex align-items-center block">
                    <Button onClick={googleLogIn} variant="outline-danger" block>Login With Google</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;