import axios from 'axios';
import URL from './URL';

const API_BASE_URL_LISTAR_ALL_CONVERSAS = URL.getDominio() + '/conversa/allconversas';
const API_BASE_URL_SALVAR_CONVERSA = URL.getDominio() + '/conversa/salvarConversa';
const API_BASE_URL_RETORNA_ID_CONVERSA = URL.getDominio() + '/conversa/verificarConversaPorConjutoDeIDs';
const API_BASE_URL_ADD_NOVAS_MENSAGENS = URL.getDominio() + '/conversa/addMensagemNaConversaPorID';
const API_BASE_URL_RETORNA_CONVERSA_BY_ID = URL.getDominio() + '/conversa/buscaConversaPorID';
const API_BASE_URL_RETORNA_CONVERSAS_PROFISSIONAL_SAUDE = URL.getDominio() + '/conversa/retornaConversasProfSaude';
const API_BASE_URL_RETORNA_CONVERSAS_PSICOLOGO = URL.getDominio() + '/conversa/retornaConversasPsicologo';
const API_BASE_URL_VERIFICA_CONVERSAS_NV_PROF_SAUDE = URL.getDominio() + '/conversa/verificaIsMensagensNaoVisualizadasProfSaude';
const API_BASE_URL_VERIFICA_CONVERSAS_NV_PSICOLOGO = URL.getDominio() + '/conversa/verificaIsMensagensNaoVisualizadasPsicologo';
const API_BASE_URL_RETORNA_ID_MENSAGEM_NV_PROF_SAUDE = URL.getDominio() + '/conversa/retornaIdConversaNaoVisualizadasProfSaude';
const API_BASE_URL_RETORNA_ID_MENSAGEM_NV_PSICOLOGO = URL.getDominio() + '/conversa/retornaIdConversasNaoVisualizadasPsicologo';
const API_BASE_URL_MARCA_CONVERSA_COMO_LIDA_PSICOLOGO = URL.getDominio() + '/conversa/conversaVisualizadaPeloPsicologo';
const API_BASE_URL_MARCA_CONVERSA_COMO_LIDA_PROF_SAUDE = URL.getDominio() + '/conversa/conversaVisualizadaPeloProfSaude';

const headers = {
    'headers': {
        'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
        'Content-Type': 'application/json'
    }
}

class ConversaService {

    getAllConversas() {
        return axios.get(API_BASE_URL_LISTAR_ALL_CONVERSAS);
    }

    salvar(conversa) {
        return axios.post(API_BASE_URL_SALVAR_CONVERSA, conversa, headers);
    }

    retornaIDconversa(idenfificadores) {
        return axios.post(API_BASE_URL_RETORNA_ID_CONVERSA, idenfificadores, headers);
    }

    adddMensagens(mensagens) {
        return axios.post(API_BASE_URL_ADD_NOVAS_MENSAGENS, mensagens, headers);
    }

    getConversaById(id) {
        return axios.post(API_BASE_URL_RETORNA_CONVERSA_BY_ID, id, headers);
    }

    retornaConversasProfSaude(id) {
        return axios.post(API_BASE_URL_RETORNA_CONVERSAS_PROFISSIONAL_SAUDE, id, headers);
    }

    retornaConversasPsicologo(id) {
        return axios.post(API_BASE_URL_RETORNA_CONVERSAS_PSICOLOGO, id, headers);
    }

    verificaIsMensagensNaoVisualizadasProfSaude(id) {
        return axios.post(API_BASE_URL_VERIFICA_CONVERSAS_NV_PROF_SAUDE, id, headers);
    }

    verificaIsMensagensNaoVisualizadasPsicologo(id) {
        return axios.post(API_BASE_URL_VERIFICA_CONVERSAS_NV_PSICOLOGO, id, headers);
    }

    retornaIdMensagemNaoVisualizadaPeloProfSaude(id) {
        return axios.post(API_BASE_URL_RETORNA_ID_MENSAGEM_NV_PROF_SAUDE, id, headers);
    }

    retornaIdMensagemNaoVisualizadaPeloPsicologo(id) {
        return axios.post(API_BASE_URL_RETORNA_ID_MENSAGEM_NV_PSICOLOGO, id, headers);
    }

    marcaConversaComoLidaProfSaude(id) {
        return axios.post(API_BASE_URL_MARCA_CONVERSA_COMO_LIDA_PROF_SAUDE, id, headers);
    }

    marcaConversaComoLidaPsicologo(id) {
        return axios.post(API_BASE_URL_MARCA_CONVERSA_COMO_LIDA_PSICOLOGO, id, headers);
    }
}

export default new ConversaService();