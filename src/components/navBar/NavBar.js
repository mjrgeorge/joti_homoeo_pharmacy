import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ParticlesBg from 'particles-bg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    // "color"
    // "ball"
    // "lines"
    // "thick"
    // "circle"
    // "cobweb"
    // "polygon"
    // "square"
    // "tadpole"
    // "fountain"
    // "random"
    // "custom"
    return (
        <div className="container">
            {/* <ParticlesBg type="random" bg={true} /> */}
            <Navbar bg="transparent" expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                        <h2 style={{ fontVariant: "small-caps" }} className="mt-3 text-info font-weight-bolder">
                        <FontAwesomeIcon className="text-danger" icon={faStethoscope} />
                        Life Test
                        <FontAwesomeIcon className="text-danger" icon={faCode} />
                        </h2>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mt-3">
                        <Link className="btn btn-outline-info ml-4" to="/">Home</Link>
                        <Link className="btn btn-outline-info ml-4" to="/about">About</Link>
                        <Link className="btn btn-outline-info ml-4" to="/blogs">Blogs</Link>
                        <Link className="btn btn-outline-info ml-4" to="/contact">Contact</Link>
                        <Link className="btn btn-danger ml-4" to="/Admin">Admin</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;