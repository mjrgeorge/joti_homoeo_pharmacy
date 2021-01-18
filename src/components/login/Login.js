import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStethoscope } from '@fortawesome/free-solid-svg-icons';
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

    const googleSignIn = () => {
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
        <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5">
            <div style={{ height: "100%" }} className="d-flex justify-content-center align-items-center">
                <Card style={{ width: '18rem', border: "none" }} className="bg-transparent">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="outline-danger" type="submit">Login</Button>
                    </Form>
                    <hr />
                    <span className="h6 text-muted text-center">Or</span>
                    <Button onClick={googleSignIn} variant="outline-info">Google</Button>
                </Card>
            </div>
        </div>
    );
};

export default Login;