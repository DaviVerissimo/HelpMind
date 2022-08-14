import axios from 'axios';

const API_BASE_URL_LISTAR_ALL_PRONTUARIOS = 'http://localhost:8080/prontuario/listarAllProntuarios';
const API_BASE_URL_DELETAR_PRONTUARIO = 'http://localhost:8080/prontuario/removerProntuario';
const API_BASE_URL_BUSCAR_PRONTUARIO = 'http://localhost:8080/prontuario/pesquisarProntuario';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

class ProntuarioService {

    getAllProntuarios() {
        return axios.get(API_BASE_URL_LISTAR_ALL_PRONTUARIOS);
    }

    getDeleteProntuario(id) {
        return axios.post(API_BASE_URL_DELETAR_PRONTUARIO, id, headers);
    }

    getBuscarProntuarioById(id) {
        return axios.post(API_BASE_URL_BUSCAR_PRONTUARIO, id, headers);
    }

}

export default new ProntuarioService();