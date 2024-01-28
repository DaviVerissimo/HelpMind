import axios from 'axios';
import URL from './URL';

const API_BASE_URL_LISTAR_ALL_CONTATOS = URL.getDominio() + '/contato/listarAllContatos';
const API_BASE_URL_DELETAR_CONTATO = URL.getDominio() + '/contato/removerContato';
const API_BASE_URL_BUSCAR_CONTATO = URL.getDominio() + '/contato/pesquisarContato';
const API_BASE_URL_LISTAR_CONTATOS_BY_CAMPUS = URL.getDominio() + '/contato/listarContatosByCampus';

const headers = {
    'headers': {
        'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
        'Content-Type': 'application/json'
    }
}

class ContatoService {

    getAllContatos() {
        return axios.get(API_BASE_URL_LISTAR_ALL_CONTATOS);
    }

    getDeleteContato(id) {
        return axios.post(API_BASE_URL_DELETAR_CONTATO, id, headers);
    }

    getBuscarContatoById(id) {
        return axios.post(API_BASE_URL_BUSCAR_CONTATO, id, headers);
    }

    getContatosByCampus(campus) {
        return axios.get(API_BASE_URL_LISTAR_CONTATOS_BY_CAMPUS, campus, headers);
    }

}

export default new ContatoService();