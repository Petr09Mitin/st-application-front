import { useEffect, useState } from "react"
import applicationAPI from "../../api/application"
import Table from 'react-bootstrap/Table';
import { formatStringDate } from "../../utils/date";

function ApplicationsList(props) {
    const [applications, setApplications] = useState([])

    useEffect(() => {
        applicationAPI.GetAllApplications()
        .then((data) => {
            setApplications(data)
        })
        .catch(() => {
            setApplications([])
        })
    }, [])

    return (
        <>
        <h1 className="text-center p-3">Заявки в Северную Трибуну</h1>
        <Table striped responsive bordered>
        <thead>
            <tr>
            <th>#</th>
            <th>Telegram ID</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Район/город</th>
            <th>Мотивация</th>
            <th>Откуда узнал</th>
            <th>Дата и время подачи заявки</th>
            </tr>
        </thead>
        <tbody>
            {applications && applications.map(application => <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.tgUserId}</td>
                <td>{application.fullName}</td>
                <td>{application.phoneNumber}</td>
                <td>{application.district}</td>
                <td>{application.purposeOfApplication}</td>
                <td>{application.sourceOfInformation}</td>
                <td>{formatStringDate(application.createdAt)}</td>
            </tr>)}
        </tbody>
        </Table>
        </>
    );
}

export default ApplicationsList