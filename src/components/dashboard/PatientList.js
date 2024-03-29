import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SideBar from './SideBar';
import loading from '../../images/loading.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faArrowCircleUp, faHome, faPrint } from '@fortawesome/free-solid-svg-icons';
import Patient from './Patient';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [patientData, setPatientData] = useContext(UserContext);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("https://safe-wildwood-28382.herokuapp.com/viewAllPatient")
            .then(res => res.json())
            .then(data => setPatientData(data))
    }, []);

    const allTotalPrice = patientData.map(data => data.totalBill);
    const allTotalPaid = patientData.map(data => data.paidBill);

    const totalPrice = allTotalPrice.reduce(
        (previousScore, currentScore) => Number(previousScore) + Number(currentScore), 0);

    const totalPaid = allTotalPaid.reduce(
        (previousScore, currentScore) => Number(previousScore) + Number(currentScore), 0);

    const totalDue = totalPrice - totalPaid;

    return (
        <>
            {
                patientData.length > 0 ?
                    <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5 text-capitalize">
                        <div id="top" className="text-right">
                            <a href="#down" className="text-warning">
                                <FontAwesomeIcon className="h4" icon={faArrowCircleDown} />
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <SideBar />
                                <div className="input-group mb-3">
                                    <input type="text" className="list-group-item list-group-item-action list-group-item-danger" placeholder="Search..." onChange={(e) => setSearchText(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="table-responsive">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th>Page</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Disease</th>
                                                <th>Treatment</th>
                                                <th className="text-info">Total Bill</th>
                                                <th className="text-success">Paid Bill</th>
                                                <th className="text-danger">Due Bill</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                patientData.filter((val) => {
                                                    if (searchText === "") {
                                                        return val
                                                    } else if (val.patientName.toLowerCase().includes(searchText.toLowerCase())) {
                                                        return val
                                                    }
                                                })
                                                    .map((data) => <Patient key={data._id} data={data} />)
                                            }
                                            <tr>
                                                <td colSpan="6" className="h5">Total :</td>
                                                <td className="h5 text-info">${totalPrice}</td>
                                                <td className="h5 text-success">${totalPaid}</td>
                                                <td className="h5 text-danger">${totalDue}</td>
                                                <td role="button" className="d-flex justify-content-between align-items-center">
                                                    <Link to={`/`}>
                                                        <FontAwesomeIcon className="text-dark" icon={faHome} />
                                                    </Link>
                                                    <FontAwesomeIcon className="text-danger" icon={faPrint} onClick={() => window.print()} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="down" className="text-right mt-3">
                            <a href="#top" className="text-warning">
                                <FontAwesomeIcon className="h4" icon={faArrowCircleUp} />
                            </a>
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