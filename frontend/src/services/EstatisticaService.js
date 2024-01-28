import axios from 'axios';
import URL from './URL';

const API_BASE_URL_ESTATISTICAS_ANSIEDADE = URL.getDominio() + '/estatistica/byAnsiedade';
const API_BASE_URL_ESTATISTICAS_DEPRESSAO = URL.getDominio() + '/estatistica/byDepressao';
const API_BASE_URL_ESTATISTICAS_REPORTES = URL.getDominio() + '/estatisticaReporte/byCampus';

const headers = {
    'headers': {
        'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
        'Content-Type': 'application/json'
    }
}

class EstatisticaService {

    getByAnsiedade(consulta) {
        return axios.post(API_BASE_URL_ESTATISTICAS_ANSIEDADE, consulta, headers);
    }

    getByDepressao(consulta) {
        return axios.post(API_BASE_URL_ESTATISTICAS_DEPRESSAO, consulta, headers);
    }

    getByReportes(consulta) {
        return axios.post(API_BASE_URL_ESTATISTICAS_REPORTES, consulta, headers);
    }

}

export default new EstatisticaService();