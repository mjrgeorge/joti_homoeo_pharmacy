import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const PatientAddForm = () => {
    const [loggedInUser, setLoggedInUser, patientData, setPatientData] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        data.createdDate = new Date();

        fetch("http://localhost:30001/addPatient", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Patient Data Successfully Added');
                    document.getElementById("myForm").reset();
                }
            })

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="myForm">
            <div className="row">
                <div className="col">
                    <input name="drName" ref={register} type="text" className="form-control" placeholder="Doctor Name" defaultValue={loggedInUser.displayName} required />
                </div>
                <div className="col">
                    <input name="patientName" ref={register} type="text" className="form-control" placeholder="Patient Name" required />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input name="phone" ref={register} type="number" className="form-control mt-3" placeholder="Patient Phone Number" required />
                </div>
                <div className="col">
                    <input name="disease" ref={register} type="text" className="form-control mt-3" placeholder="Patient Disease" required />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <textarea name="treatment" ref={register} type="text" className="form-control mt-3" placeholder="Patient Treatment Details" required />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input name="age" ref={register} type="number" className="form-control mt-3" placeholder="Patient Age" required />
                </div>
                <div className="col">
                    <input name="totalBill" ref={register} type="number" className="form-control mt-3" placeholder="Total Bill" required />
                </div>
                <div className="col">
                    <input name="paidBill" ref={register} type="number" className="form-control mt-3" placeholder="Paid Bill" required />
                </div>
            </div>
            <input type="submit" className="form-control mt-3 btn btn-outline-info" />
        </form>

    );
};

export default PatientAddForm;