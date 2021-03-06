import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Patient = ({ data }) => {
    const [, , patientData, ] = useContext(UserContext);
    const handleDelete = (id) => {
        if (window.confirm("Are You Sure Delete This Patient")) {
            fetch(`https://safe-wildwood-28382.herokuapp.com/deletePatient/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert("Patient Information Successfully Deleted.")
                    }
                })
        }
    };
    let date = data.date;
    date = date.slice(0, 10);

    return (
        <tr key={data._id}>
            <td>{data.pageNumber}</td>
            <td>{date}</td>
            <td className="h6">{data.patientName}</td>
            <td>{data.age}</td>
            <td>{data.disease}</td>
            <td>{data.treatment}</td>
            <td className="text-info">${data.totalBill}</td>
            <td className="text-success">${data.paidBill}</td>
            <td className="text-danger">${data.totalBill - data.paidBill}</td>
            <td role="button" className="d-flex justify-content-between align-items-center">
                <Link to={`/updatePatient/${data._id}`}>
                    <FontAwesomeIcon className="text-dark" icon={faPen} />
                </Link>
                {
                    patientData.length <= 1 ?
                        <FontAwesomeIcon className="text-warning" icon={faTrashAlt} />
                        :
                        <FontAwesomeIcon className="text-danger" icon={faTrashAlt} onClick={() => handleDelete(`${data._id}`)} />
                }
            </td>
        </tr>
    );
};

export default Patient;