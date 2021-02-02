import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="container bg-transparent text-center">
            <a className="h4 m-2 text-info" href="https://www.facebook.com/rathin.ray.5/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a className="h4 m-2 text-info" href="tel:+8801314942635"><FontAwesomeIcon icon={faPhone} /></a>
            <a className="h4 m-2 text-info" href="mailto:jotihomoeo32@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen} /></a>
            <a className="h4 m-2 text-info" href="https://www.facebook.com/messages/t/100004411566767" target="_blank"><FontAwesomeIcon icon={faFacebookMessenger} /></a>
            <p className="text-dark m-2">Copyright © {year} LifeTest. Created by <a className="text-info" href="https://mjrgeorge.netlify.app/" target="_blank">mjrgeorge</a></p>
        </footer>
    );
};

export default Footer;