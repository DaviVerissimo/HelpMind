import axios from 'axios';
import URL from './URL';

const API_BASE_URL_ESTATISTICAS_ANSIEDADE = URL.getDominio() + '/estatistica/byAnsiedade';
const API_BASE_URL_ESTATISTICAS_DEPRESSAO = URL.getDominio() + '/estatistica/byDepressao';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

class EstatisticaService {

    getByAnsiedade(consulta) {
        return axios.post(API_BASE_URL_ESTATISTICAS_ANSIEDADE, consulta, headers);
    }

    getByDepressao(consulta) {
        return axios.post(API_BASE_URL_ESTATISTICAS_DEPRESSAO, consulta, headers);
    }

}

export default new EstatisticaService();