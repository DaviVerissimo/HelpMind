import axios from 'axios';
import URL from './URL';

const API_BASE_URL_LISTAR_ALL_DISCENTES = URL.getDominio() + '/servidor/listarAllServidores';
const API_BASE_URL_CONCEDER_ACESSO_PROF_SAUDE = URL.getDominio() + '/servidor/updateServidor';
const API_BASE_URL_REMOVER_ACESSO_PROF_SAUDE = URL.getDominio() + '/servidor/removerAcessoComoProfissionalDeSaude';
const API_BASE_URL_CONCEDER_ACESSO_PSICOLOGO = URL.getDominio() + '/servidor/updateServidorForPsicologo';
const API_BASE_URL_REMOVER_ACESSO_PSICOLOGO = URL.getDominio() + '/servidor/removerAcessoComoPsicologo';
const API_BASE_URL_ID_BY_NOME = URL.getDominio() + '/servidor/retornaIdServidorByNome';
const API_BASE_URL_RETORNA_SERVIDOR_BY_ID = URL.getDominio() + '/servidor/retornaServidorByID';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

class ServidorService {

    getAllServidor() {
        return axios.get(API_BASE_URL_LISTAR_ALL_DISCENTES);
    }

    getConcederAcessoProfSaude(id) {
        return axios.post(API_BASE_URL_CONCEDER_ACESSO_PROF_SAUDE, id, headers);
    }

    getRemoverAcessoProfSaude(id) {
        return axios.post(API_BASE_URL_REMOVER_ACESSO_PROF_SAUDE, id, headers);
    }

    getConcederAcessoPsicologo(id) {
        return axios.post(API_BASE_URL_CONCEDER_ACESSO_PSICOLOGO, id, headers);
    }

    getRemoverAcessoPsicologo(id) {
        return axios.post(API_BASE_URL_REMOVER_ACESSO_PSICOLOGO, id, headers);
    }

    getIdByNome(id) {
        return axios.post(API_BASE_URL_ID_BY_NOME, id, headers);
    }

    getServidorById(id) {
        return axios.post(API_BASE_URL_RETORNA_SERVIDOR_BY_ID, id, headers);
    }

}

export default new ServidorService();