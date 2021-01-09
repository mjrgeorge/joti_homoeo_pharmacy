import React from 'react';
import RathinImg from '../../images/rathin_pp.png';
import './About.css';

const About = () => {
    return (
        <section className="container">
            <article className="row shadow-lg mb-4">
                <div className="col-lg-6 p-4">
                    <p className="h2">Hi, I am <span className="h1 text-danger">Rathin</span></p>
                    <p className="text-capitalize text-justify text-muted ml-2">I am a Homoeo Doctor. I give primary treatment of ill patients. Besides this I want to built-up my career as a Web Developer. I love to code modern and responsive layouts for web application. I try to improve Myself in  Every moment.</p>
                    <div className="about_style">
                        <ul className="text-muted">
                            <li><strong>Full Name</strong> Rathin Ray Arya</li>
                            <li><strong>Occupation</strong> Homoeo Doctor</li>
                            <li><strong>Chamber</strong> 09:00am to 10:00pm</li>
                            <li><strong>Languages</strong> Bengali, English</li>
                            <li><strong>Phone</strong> <a href="tel:+8801314942635">+8801314942635</a></li>
                            <li><strong>E-mail</strong> <small><a href="mailto:jotihomoeo32@gmail.com">jotihomoeo32@gmail.com</a></small> </li>
                            <li>
                                <strong>Address</strong>
                                <address>Tistar Hat Bazar, Debiganj, Panchagarh, Bangladesh</address>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 p-4 d-flex justify-content-center align-items-center">
                    <img style={{ height: "430px" }} className="img-fluid" src={RathinImg} alt="Rathin" />
                </div>
            </article>
        </section>
    );
};

export default About;