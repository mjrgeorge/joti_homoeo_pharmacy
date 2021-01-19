import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhoneAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_3u43qi8', e.target, 'user_Q0FtmF0Kb5FdNJDHSf6yb')
            .then((result) => {
                console.log(result.text);
                alert('Message Successfully Send.');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-lg-6 shadow-lg text-info d-flex justify-content-center align-items-center flex-column">
                    <div className="text-center m-2">
                        <h3><FontAwesomeIcon icon={faPhoneAlt} /></h3>
                        <h5>Call Me On</h5>
                        <h5><a className="text-decoration-none text-muted" href="tel:+8801314942635">+8801314942635</a></h5>
                    </div>
                    <div className="text-center m-2">
                        <h3><FontAwesomeIcon icon={faEnvelopeOpen} /></h3>
                        <h5>Email</h5>
                        <h5><a className="text-decoration-none text-muted" href="mailto:mjrgeorge@gmail.com">jotihomoeo32@gmail.com</a></h5>
                    </div>
                    <div className="text-center m-2">
                        <h3><FontAwesomeIcon icon={faSearchLocation} /></h3>
                        <h5>Location</h5>
                        <h5><Link className="text-decoration-none text-muted" to="/about">Tistar Hat, Debiganj, Panchagarh</Link></h5>
                    </div>
                </div>
                <div className="col-lg-6 shadow-lg">
                    <form className="px-5 py-4" onSubmit={sendEmail}>
                        <div className="form-group mb-2">
                            <label className="h5 text-info">Name</label>
                            <input className="form-control" type="text" name="user_name" placeholder="Enter Your Full Name" required />
                        </div>
                        <div className="form-group mb-2">
                            <label className="h5 text-info">Email</label>
                            <input className="form-control" type="email" name="user_email" placeholder="Enter Your Email Address" required />
                        </div>
                        <div className="form-group mb-2">
                            <label className="h5 text-info">Phone Number</label>
                            <input className="form-control" type="text" name="contact_number" placeholder="Enter Your Phone Number" required />
                        </div>
                        <div className="form-group mb-2">
                            <label className="h5 text-info">Message</label>
                            <textarea className="form-control" name="message" cols="30" rows="4" placeholder="Enter Your Message" required />
                        </div>
                        <div className="form-group mb-2">
                            <input className="btn btn-info btn-block" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}