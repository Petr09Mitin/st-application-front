import { useEffect, useState } from "react"
import applicationAPI from "../../api/application"
import Table from 'react-bootstrap/Table';
import ApplicationRow from "./ApplicationRow";

function ApplicationsList() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        applicationAPI.GetAllApplications()
        .then((data) => {
            setApplications(data);
        })
        .catch(() => {
            setApplications([]);
        });
    }, []);

    const approve = async (applicationId) => {
        const application = await applicationAPI.ApproveApplication(applicationId)
        if (!application) {
            return
        }

        setApplications(prev => prev.filter(val => val.id !== application.id))
    }

    const reject = async (applicationId) => {
        const application = await applicationAPI.RejectApplication(applicationId)
        if (!application) {
            return
        }

        setApplications(prev => prev.filter(val => val.id !== application.id))
    }

    return (
        <>
        <h1 className="text-center p-3">Заявки в Северную Трибуну</h1>
        <Table striped responsive bordered>
        <thead>
            <tr>
            <th>#</th>
            <th>Ссылка на аккаунт</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Район/город</th>
            <th>Мотивация</th>
            <th>Откуда узнал</th>
            <th>Дата и время подачи заявки</th>
            <th colSpan="2">Вердикт</th>
            </tr>
        </thead>
        <tbody>
            {Array.isArray(applications) && applications.map(application => 
                <ApplicationRow 
                    key={application.id} 
                    application={application} 
                    approve={approve}
                    reject={reject}
                />
            )}
        </tbody>
        </Table>
        </>
    );
}

export default ApplicationsList