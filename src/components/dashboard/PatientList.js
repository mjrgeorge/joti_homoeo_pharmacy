import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import SideBar from './SideBar';
import loading from '../../images/loading.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser, patientData, setPatientData] = useContext(UserContext);

    useEffect(() => {
        fetch("https://safe-wildwood-28382.herokuapp.com/viewAllPatient")
            .then(res => res.json())
            .then(data => setPatientData(data))
    }, [patientData]);

    const handleDelete = (id) => {
        console.log("clicked", id);
        fetch(`http://localhost:30001/deletePatient/${id}`,{
            method:  'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert("Patient Data Successfully Deleted.")
            }
        })
        
    };

    return (
        <>
            {
                patientData.length > 0 ?
                    <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5 text-capitalize">
                        <div className="row">
                            <div className="col-lg-2">
                                <SideBar />
                            </div>
                            <div className="col-lg-10 table-responsive">
                                <div className="table-responsive">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th>S/R</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Disease</th>
                                                <th>Treatment</th>
                                                <th>Total Bill</th>
                                                <th>Paid Bill</th>
                                                <th>Due Bill</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                patientData.map((data) =>
                                                    <tr key={data._id}>
                                                        <td>{data.serialNumber}</td>
                                                        <td>{data.createdDate}</td>
                                                        <td>{data.patientName}</td>
                                                        <td>{data.age}</td>
                                                        <td>{data.disease}</td>
                                                        <td>{data.treatment}</td>
                                                        <td>${data.totalBill}</td>
                                                        <td>${data.paidBill}</td>
                                                        <td>${data.totalBill - data.paidBill}</td>
                                                        <td role="button"><FontAwesomeIcon icon={faTrashAlt} onClick={()=>handleDelete(`${data._id}`)} /></td>
                                                    </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div style={{ minHeight: "70vh" }} className="container text-center shadow-lg mb-4 p-5">
                        <img className="img-fluid" src={loading} alt="Loading..." />
                    </div>
            }
        </>
    );
};

export default Dashboard;