import axios from 'axios';
import URL from './URL';

const API_BASE_URL_LISTAR_ALL_CONTATOS = URL.getDominio() + '/contato/listarAllContatos';
const API_BASE_URL_DELETAR_CONTATO = URL.getDominio() + '/contato/removerContato';
const API_BASE_URL_BUSCAR_CONTATO = URL.getDominio() + '/contato/pesquisarContato';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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

}

export default new ContatoService();