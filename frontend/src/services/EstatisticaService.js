import axios from 'axios';

const API_BASE_URL_ESTATISTICAS_TODOS_DISCENTE = 'http://localhost:8080/estatistica/all';
const API_BASE_URL_ESTATISTICAS_CURSO = 'http://localhost:8080/estatistica/byCurso';
const API_BASE_URL_ESTATISTICAS_PERIODO = 'http://localhost:8080/estatistica/byPeriodo';
const API_BASE_URL_ESTATISTICAS_CURSO_PERIODO = 'http://localhost:8080/estatistica/byCursoAndPeriodo';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

class EstatisticaService {

    getAllEstatistica() {
        return axios.get(API_BASE_URL_ESTATISTICAS_TODOS_DISCENTE);
    }



    getByCurso(curso) {
        return axios.post(API_BASE_URL_ESTATISTICAS_CURSO, curso, headers);
    }

    getByPeriodo(periodo) {
        return axios.post(API_BASE_URL_ESTATISTICAS_PERIODO, periodo, headers);
    }

    getByCursoPeriodo(consulta) {
        return axios.post(API_BASE_URL_ESTATISTICAS_CURSO_PERIODO, consulta, headers);
    }
}

export default new EstatisticaService();