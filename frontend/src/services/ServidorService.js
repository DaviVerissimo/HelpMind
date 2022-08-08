import axios from 'axios';

const API_BASE_URL_LISTAR_ALL_DISCENTES = 'http://localhost:8080/servidor/listarAllServidores';
const API_BASE_URL_CONCEDER_ACESSO_PROF_SAUDE = 'http://localhost:8080/servidor/updateServidor';
const API_BASE_URL_REMOVER_ACESSO_PROF_SAUDE = 'http://localhost:8080/servidor/removerAcessoComoProfissionalDeSaude';
const API_BASE_URL_CONCEDER_ACESSO_PSICOLOGO = 'http://localhost:8080/servidor/updateServidorForPsicologo';
const API_BASE_URL_REMOVER_ACESSO_PSICOLOGO = 'http://localhost:8080/servidor/removerAcessoComoPsicologo';


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

}

export default new ServidorService();