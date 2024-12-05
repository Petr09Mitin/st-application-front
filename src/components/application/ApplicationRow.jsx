import { Button } from "react-bootstrap";
import { formatStringDate } from "../../utils/date";

function ApplicationRow({application, approve, reject}) {

    const handleApprove = (e) => {
        e.preventDefault()
        approve(application.id)
    }

    const handleReject = (e) => {
        e.preventDefault()
        reject(application.id)
    }

    return (
        <tr key={application.id}>
                <td>{application.id}</td>
                <td><a href={`https://t.me/${application.tgUsername}`}>{application.tgUsername}</a></td>
                <td>{application.fullName}</td>
                <td>{application.district}</td>
                <td>{application.isSevChelParticipant ? "Да" : "Нет"}</td>
                <td>{formatStringDate(application.createdAt)}</td>
                <td>
                    <Button variant="outline-success" onClick={handleApprove}>Одобрить</Button>
                </td>
                <td>
                    <Button variant="outline-danger" onClick={handleReject}>Отклонить</Button>
                </td>
            </tr>
    );
}

export default ApplicationRow
