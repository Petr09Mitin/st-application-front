import { API_URL } from "../config/config"

class ApplicationAPI {
    async GetAllApplications() {
        try {
            const res = await fetch(`${API_URL}/applications/`);
            if (res.ok) {
                const jsonRes = await res.json();
                return jsonRes.body;
            }

            return [];
        } catch(e) {
            console.log(e);
        }
    }

    async ApproveApplication(applicationId) {
        try {
            const res = await fetch(`${API_URL}/applications/${applicationId}/approve`, {
                method: "POST"
            });
            if (res.ok) {
                const jsonRes = await res.json();
                return jsonRes.body;
            }

            return;
        } catch(e) {
            console.log(e);
        }
    }

    async RejectApplication(applicationId) {
        try {
            const res = await fetch(`${API_URL}/applications/${applicationId}/reject`, {
                method: "POST"
            });
            if (res.ok) {
                const jsonRes = await res.json();
                return jsonRes.body;
            }

            return;
        } catch(e) {
            console.log(e);
        }
    }
}

const applicationAPI = new ApplicationAPI()

export default applicationAPI
