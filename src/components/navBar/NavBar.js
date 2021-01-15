import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <div className="container">
            <Navbar bg="transparent" expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                        <h2 style={{ fontVariant: "small-caps" }} className="mt-2 text-info font-weight-bolder">
                        <FontAwesomeIcon className="text-danger" icon={faStethoscope} />
                        Life Test
                        <FontAwesomeIcon className="text-danger" icon={faCode} />
                        </h2>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mt-2">
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/">Home</Link>
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/about">About</Link>
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/blogs">Blogs</Link>
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/contact">Contact</Link>
                        <Link className="btn btn-outline-danger ml-4" to="/Admin"><big>Admin</big></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;