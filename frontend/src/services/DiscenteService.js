import axios from 'axios';

const API_BASE_URL_LISTAR_ALL_DISCENTES = 'http://localhost:8080/discente/allDiscentes';
const API_BASE_URL_DISCENTE_ID = 'http://localhost:8080/discente/buscaDiscentePorID';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

class DiscenteService {

    getAllDiscente() {
        return axios.get(API_BASE_URL_LISTAR_ALL_DISCENTES);
    }
    getDiscenteById(id) {
        return axios.post(API_BASE_URL_DISCENTE_ID, id, headers);
    }
}

export default new DiscenteService();