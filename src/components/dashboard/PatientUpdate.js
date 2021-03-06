import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import SideBar from './SideBar';

const PatientEdit = () => {
    const [loggedInUser, setLoggedInUser, patientData, setPatientData] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    let { patientId } = useParams();
    let singlePatient = patientData.find(patient => patient._id === patientId);

    const onSubmit = (data) => {
        data.date = new Date().toLocaleDateString();
        fetch(`http://localhost:30001/updatePatient/${singlePatient._id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Patient Information Successfully Updated.");
                    window.history.back();
                }
            })
    };
    return (
        <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5">
            <div className="row">
                <div className="col-lg-2">
                    <SideBar />
                </div>
                <div className="col-lg-10">
                    <form onSubmit={handleSubmit(onSubmit)} id="myForm">
                        <div className="row">
                            <div className="col">
                                <input name="drName" ref={register} type="text" className="form-control" defaultValue="Dr. Rathin Arya" required />
                            </div>
                            <div className="col">
                                <input name="patientName" ref={register} type="text" className="form-control" defaultValue={singlePatient.patientName} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input name="pageNumber" ref={register} type="number" className="form-control mt-3" defaultValue={singlePatient.pageNumber} required />
                            </div>
                            <div className="col">
                                <input name="phone" ref={register} type="text" className="form-control mt-3" defaultValue={singlePatient.phone} />
                            </div>
                            <div className="col">
                                <input name="disease" ref={register} type="text" className="form-control mt-3" defaultValue={singlePatient.disease} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <textarea name="treatment" ref={register} type="text" className="form-control mt-3" defaultValue={singlePatient.treatment} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input name="age" ref={register} type="number" className="form-control mt-3" defaultValue={singlePatient.age} required />
                            </div>
                            <div className="col">
                                <input name="totalBill" ref={register} type="number" className="form-control mt-3" defaultValue={singlePatient.totalBill} required />
                            </div>
                            <div className="col">
                                <input name="paidBill" ref={register} type="number" className="form-control mt-3" defaultValue={singlePatient.paidBill} required />
                            </div>
                        </div>
                        <input type="submit" className="form-control mt-3 btn btn-outline-info" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PatientEdit;