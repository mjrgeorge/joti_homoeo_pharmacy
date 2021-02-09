import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

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
            <div style={{ minHeight: "22rem", width: "18rem" }} className="card bg-transparent shadow-lg border-danger">
                <div className="card-body d-flex align-items-center block">
                    <Button onClick={googleLogIn} variant="outline-danger" className="d-flex justify-content-around align-items-center" block>
                    <FontAwesomeIcon icon={faGoogle} className="display-4 text-info" />
                        Login With Google
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;