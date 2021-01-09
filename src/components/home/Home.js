import React from 'react';
import Rathin from '../../images/rathin.png';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className="container">
            <section className="row shadow-lg mb-4">
                <div className="col-lg-6 p-4">
                    <h2 className="display-4">Hello I'm</h2>
                    <h1 className="text-warning">Rathin Arya</h1>
                    <h3 className="text-danger">
                        <Typical
                            steps={['A Homoeo Doctor', 2000, 'A Web Developer', 2000, 'A Entrepreneur', 2000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h3>
                    <p className="text-capitalize text-justify text-muted h5">I am a Homoeo Doctor. I give primary treatment of ill patients. Besides this I want to built-up my career as a Web Developer. I love to code modern and responsive layouts for web application. I try to improve Myself in  Every moment.</p>
                    <Link className="btn btn-outline-info font-weight-bold" to="/contact"><big>Contact Us</big></Link>
                </div>
                <div className="col-lg-6 p-4 d-flex justify-content-center align-items-center">
                    <img style={{ height: "430px" }} className="img-fluid" src={Rathin} alt="Rathin" />
                </div>
            </section>
        </header>
    );
};

export default Home;