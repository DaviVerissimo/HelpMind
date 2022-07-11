import axios from 'axios';

const API_BASE_URL_LISTAR_ALL_DISCENTES = 'http://localhost:8080/discente/allDiscentes';
const API_BASE_URL_LISTAR_DISCENTES_COM_AUMENTO_VULNERABILIDADE = 'http://localhost:8080/discente/discenteComAumentoVulnerabilidadeEmocional';
const API_BASE_URL_DISCENTE_ID = 'http://localhost:8080/discente/buscaDiscentePorID';
const API_BASE_URL_IS_AUMENTO = 'http://localhost:8080/discente/isAumento';

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

    // getDiscentesComAumentoVulnerabilidadeEmocional() {
    //     return axios.get(API_BASE_URL_LISTAR_DISCENTES_COM_AUMENTO_VULNERABILIDADE);
    // }

    // isAumento() {
    //     return axios.get(API_BASE_URL_IS_AUMENTO);
    // }

    getDiscenteById(id) {
        return axios.post(API_BASE_URL_DISCENTE_ID, id, headers);
    }
}

export default new DiscenteService();