import { API_URL } from "../config/config"

class ApplicationAPI {
    async GetAllApplications() {
        try {
            const res = await fetch(`${API_URL}/application/`)
            if (res.ok) {
                const jsonRes = await res.json()
                return jsonRes.body
            }

            return []
        } catch(e) {
            console.log(e);
        }
    }
}

const applicationAPI = new ApplicationAPI()

export default applicationAPI
