import axios from 'axios';
import URL from './URL';

const API_BASE_URL_LISTAR_ALL_PRONTUARIOS = URL.getDominio() + '/prontuario/listarAllProntuarios';
const API_BASE_URL_DELETAR_PRONTUARIO = URL.getDominio() + '/prontuario/removerProntuario';
const API_BASE_URL_BUSCAR_PRONTUARIO = URL.getDominio() + '/prontuario/pesquisarProntuario';
const API_BASE_URL_BUSCAR_PRONTUARIO_ID_DISCENTE = URL.getDominio() + '/prontuario/retornaProntuariosPeloIdDiscente';

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

    getBuscarProntuariosByIdDiscente(id) {
        return axios.post(API_BASE_URL_BUSCAR_PRONTUARIO_ID_DISCENTE, id, headers);
    }

}

export default new ProntuarioService();