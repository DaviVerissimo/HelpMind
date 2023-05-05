import axios from 'axios';
import URL from './URL';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

const API_BASE_URL_RETORNAR_ALL_ENCAMINHAMENTOS_PROFISSIONAL_SAUDE = URL.getDominio() + '/Encaminhamento/allEncaminhamentos';
const API_BASE_URL_RETORNAR_ENCAMINHAMENTO_BY_ID = URL.getDominio() + '/Encaminhamento/retornaEncaminhamentoPorID';
const API_BASE_URL_RETORNAR_LISTA_ENCAMINHAMETOS_DISCENTE = URL.getDominio() + '/Encaminhamento/retornaEncaminhamentosPorIDdoDiscente';
const API_BASE_URL_RETORNAR_LISTA_ENCAMINHAMENTOS_PSICOLOGO = URL.getDominio() + '/Encaminhamento/retornaEncaminhamentosPorIDdoPsicologoResponsavel';
const API_BASE_URL_SALVAR_ENCAMINHAMENTO = URL.getDominio() + '/Encaminhamento/salvar';

class EncaminhamentoService {

    getAllEncaminhamento() {
        return axios.get(API_BASE_URL_RETORNAR_ALL_ENCAMINHAMENTOS_PROFISSIONAL_SAUDE);
    }

    getEncaminhamentoById(id) {
        return axios.post(API_BASE_URL_RETORNAR_ENCAMINHAMENTO_BY_ID, id, headers)
    }

    getEncaminhamentosDoDiscente(id) {
        return axios.post(API_BASE_URL_RETORNAR_LISTA_ENCAMINHAMETOS_DISCENTE, id, headers)
    }
    
    getEncaminhamentosByIdPsicologo(id) {
        return axios.post(API_BASE_URL_RETORNAR_LISTA_ENCAMINHAMENTOS_PSICOLOGO, id, headers)
    }

    // salvarEncaminhamento(encaminhamento) {
    //     return axios.post(API_BASE_URL_SALVAR_ENCAMINHAMENTO, encaminhamento, headers)
    // }
}

export default new EncaminhamentoService();
