import React from 'react';
import RathinImg from '../../images/rathin_pp.png';

const About = () => {
    return (
        <section className="container">
            <article className="row">
                <div className="col-lg-6 p-4">
                    <h2 className="display-4 p-4 text-center text-muted text-capitalize">About</h2>
                    <p className="h5 text-justify text-muted text-capitalize">
                        I want to built-up my career as a Web Developer. I love to code modern and responsive layouts for web application. My core skill is based on JavaScript and I love to do most interesting things using React.Js And Node.Js. I think I have enough Knowledge In The HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.Js, React-Router, React-Bootstrap, Material-UI, Firebase, Netlify And Also Comfortable With Node.JS, Express.JS, MongoDB.
                    </p>
                </div>
                <div className="col-lg-6 p-4 d-flex justify-content-center align-items-center">
                    <img style={{ height: "430px" }} className="img-fluid" src={RathinImg} alt="Rathin" />
                </div>
            </article>
        </section>
    );
};

export default About;