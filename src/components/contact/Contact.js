import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhoneAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_pdv5r1m', e.target, 'user_gFp94HYTeS4e2LERlKmJe')
            .then((result) => {
                console.log(result.text);
                alert('Message Successfully Send.');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="container">
            <div className="row shadow-lg mb-4">
                <div className="col-lg-6 text-danger d-flex justify-content-center align-items-center flex-column">
                    <div className="text-center m-3">
                        <h5><FontAwesomeIcon icon={faPhoneAlt} /></h5>
                        <h5>Call Me On</h5>
                        <h5><a className="ml-3" href="tel:+8801314942635">+8801314942635</a></h5>
                    </div>
                    <div className="text-center m-3">
                        <h5><FontAwesomeIcon icon={faEnvelopeOpen} /></h5>
                        <h5>Email</h5>
                        <h5><a href="mailto:mjrgeorge@gmail.com">jotihomoeo32@gmail.com</a></h5>
                    </div>
                    <div className="text-center m-3">
                        <h5><FontAwesomeIcon icon={faSearchLocation} /></h5>
                        <h5>Location</h5>
                        <h5><Link to="/about">Debiganj, Panchagarh</Link></h5>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form className="px-5 py-4" onSubmit={sendEmail}>
                        <div className="form-group pb-1">
                            <input className="form-control" type="hidden" name="contact_number" required />
                        </div>
                        <div className="form-group pb-1">
                            <label className="h5 text-muted">Name</label>
                            <input className="form-control" type="text" name="user_name" required />
                        </div>
                        <div className="form-group pb-1">
                            <label className="h5 text-muted">Email</label>
                            <input className="form-control" type="email" name="user_email" required />
                        </div>
                        <div className="form-group pb-1">
                            <label className="h5 text-muted">Message</label>
                            <textarea className="form-control" name="message" cols="30" rows="3" required />
                        </div>
                        <div className="form-group pb-1">
                            <input className="btn btn-info btn-block" type="submit" value="Send" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}