import axios from 'axios';
import URL from './URL';

const API_BASE_URL_LISTAR_ALL_DISCENTES = URL.getDominio() + '/discente/allDiscentes';
const API_BASE_URL_LISTAR_DISCENTES_COM_AUMENTO_VULNERABILIDADE = URL.getDominio() + '/discente/discenteComAumentoVulnerabilidadeEmocional';
const API_BASE_URL_DISCENTE_ID = URL.getDominio() + '/discente/buscaDiscentePorID';
const API_BASE_URL_IS_AUMENTO = URL.getDominio() + '/discente/isAumento';

const headers = {
    'headers': {
        'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
        'Content-Type': 'application/json'
    }
}

class DiscenteService {

    getAllDiscente() {
        return axios.get(API_BASE_URL_LISTAR_ALL_DISCENTES);
    }

    getDiscentesComAumentoVulnerabilidadeEmocional() {
        return axios.get(API_BASE_URL_LISTAR_DISCENTES_COM_AUMENTO_VULNERABILIDADE);
    }

    isAumento() {
        return axios.get(API_BASE_URL_IS_AUMENTO);
    }

    getDiscenteById(id) {
        return axios.post(API_BASE_URL_DISCENTE_ID, id, headers);
    }
}

export default new DiscenteService();