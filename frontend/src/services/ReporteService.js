import axios from 'axios';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

const API_BASE_URL_RETORNAR_ALL_REPORTES = 'http://localhost:8080/reporte/listarReportes';
const API_BASE_URL_RETORNAR_REPORTE_BY_ID = 'http://localhost:8080/reporte/buscarReportePeloId';
const API_BASE_URL_RETORNAR_REPORTANTE = 'http://localhost:8080/reporte/nomeReportante';

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
}

export default new ReporteService();