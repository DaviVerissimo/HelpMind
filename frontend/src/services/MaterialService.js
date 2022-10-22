import axios from 'axios';
import URL from './URL';

const EMPLOYEE_API_BASE_URL = URL.getDominio() + '/material/allMaterial';

class MaterialService {

    getMaterial() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new MaterialService();