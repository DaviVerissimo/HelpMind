import axios from 'axios';
import URL from './URL';

const headers = {
    'headers': {
        'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
        'Content-Type': 'application/json',
    }
}

const API_BASE_URL_RETORNAR_ALL_REPORTES = URL.getDominio() + '/reporte/listarReportes';
const API_BASE_URL_RETORNAR_REPORTE_BY_ID = URL.getDominio() + '/reporte/buscarReportePeloId';
const API_BASE_URL_RETORNAR_REPORTANTE = URL.getDominio() + '/reporte/nomeReportante';
const API_BASE_URL_RETORNAR_SERVIDOR_REPORTANTE = URL.getDominio() + '/reporte/nomeServidorReportante';

class ReporteService {

    getReporte() {
        return axios.get(API_BASE_URL_RETORNAR_ALL_REPORTES);
    }

    getReporteById(id) {
        return axios.post(API_BASE_URL_RETORNAR_REPORTE_BY_ID, id, headers)
    }

    getReportanteById(id) {
        return axios.post(API_BASE_URL_RETORNAR_REPORTANTE, id, headers)
    }
    
    getServidorReportanteById(id) {
        return axios.post(API_BASE_URL_RETORNAR_SERVIDOR_REPORTANTE, id, headers)
    }
}

export default new ReporteService();
