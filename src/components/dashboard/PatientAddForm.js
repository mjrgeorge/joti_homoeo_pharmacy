import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Calendar from 'react-calendar';

const PatientAddForm = () => {
    const { register, handleSubmit } = useForm();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [entryDate, setEntryDate] = useState(false);

    const handleDateChange = date => {
        setEntryDate(date);
        handleClose();
    };

    const onSubmit = (data) => {
        if (!entryDate) {
            alert('Please Select Your Date');
        } else {
            data.date = entryDate;
            fetch("https://safe-wildwood-28382.herokuapp.com/addPatient", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(success => {
                    if (success) {
                        alert("Patient Information Successfully Added.");
                        window.history.back();
                    }
                })
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="myForm">
            <div className="row mt-2">
                <div className="col">
                    <input name="drName" ref={register} type="text" className="form-control" placeholder="Doctor Name" defaultValue="Dr. Rathin" required />
                </div>
                <div className="col">
                    <input name="patientName" ref={register} type="text" className="form-control" placeholder="Name" required />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input name="pageNumber" ref={register} type="number" className="form-control mt-3" placeholder="Page" />
                </div>
                <div className="col">
                    <input name="phone" ref={register} type="text" className="form-control mt-3" placeholder="Phone" />
                </div>
                <div className="col">
                    <input name="disease" ref={register} type="text" className="form-control mt-3" placeholder="Disease" required />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <textarea name="treatment" ref={register} type="text" className="form-control mt-3" placeholder="Treatment Details" required />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input name="age" ref={register} type="number" className="form-control mt-3" placeholder="Age" required />
                </div>
                <div className="col">
                    <input name="totalBill" ref={register} type="number" className="form-control mt-3" placeholder="Total" required />
                </div>
                <div className="col">
                    <input name="paidBill" ref={register} type="number" className="form-control mt-3" placeholder="Paid" required />
                </div>
                <div className="col">
                    <Button onClick={handleShow} variant="btn btn-outline-danger" className="form-control mt-3">Date</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select Your Date</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex justify-content-center">
                            <Calendar
                                onChange={handleDateChange}
                                value={new Date()}
                            />
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
            <input type="submit" className="form-control mt-3 btn btn-info" />
        </form>

    );
};

export default PatientAddForm;