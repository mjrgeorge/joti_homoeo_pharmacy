import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div style={{height:"100%"}} className="d-flex justify-content-center align-items-center">
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
            </Card>
        </div>
    );
};

export default Login;
// import React from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode, faStethoscope } from '@fortawesome/free-solid-svg-icons';

// const Login = () => {
//     return (
//         <div style={{ height: "70vh" }} className="row mb-4">
//             <div className="col-lg-6 shadow-lg p-5">
//                 <Form>
//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" />
//                     </Form.Group>
//                     <Form.Group controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" />
//                     </Form.Group>
//                     <Form.Group controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Remember Me" />
//                     </Form.Group>
//                     <Button variant="outline-danger" type="submit">Login</Button>
//                 </Form>
//             </div>
//             <div className="col-lg-6 shadow-lg p-5">
//                 <div style={{ height: "100%" }} className="d-flex justify-content-center align-items-center text-info font-weight-bolder">
//                     <h1 style={{ fontVariant: "small-caps" }}>
//                         <FontAwesomeIcon className="text-danger" icon={faStethoscope} />
//                         Life Test
//                         <FontAwesomeIcon className="text-danger" icon={faCode} />
//                     </h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;