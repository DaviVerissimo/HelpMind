import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/material/allMaterial';

class MaterialService {

    getMaterial() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new MaterialService();