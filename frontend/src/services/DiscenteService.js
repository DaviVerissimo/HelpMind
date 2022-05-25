import axios from 'axios';

const API_BASE_URL_LISTAR_ALL_DISCENTES = 'http://localhost:8080/discente/allDiscentes';

class DiscenteService {

    getAllDiscente() {
        return axios.get(API_BASE_URL_LISTAR_ALL_DISCENTES);
    }
}

export default new DiscenteService();