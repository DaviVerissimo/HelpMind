import axios from 'axios';
import URL from './URL';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

const API_URL_LISTA_QUESTIONARIOSOCIOECONOMICO = URL.getDominio() + '/QuestionarioSocioeconomico/ListaQuestionarioSocioeconomico';
const API_URL_LISTA_QUESTIONARIOSANSIEDADEBECK = URL.getDominio() + '/QuestionarioDeAnsiedadeDeBeck/ListaQuestionarioDeAnsiedadeDeBeck';
const API_URL_LISTA_QUESTIONARIOSDEPRESSAOBECK = URL.getDominio() + '/QuestionarioDeDepressaoDeBeck/ListaQuestionarioDepressaoDeBeck';
const API_URL_LISTA_QUESTIONARIOSOCIOECONOMICOPORDISCENTE = URL.getDominio() + '/QuestionarioSocioeconomico/buscaQuestionariosPeloID';
const API_URL_QUESTIONARIOSOCIOECONOMICOPORIDQUESTIONARIO = URL.getDominio() + '/QuestionarioSocioeconomico/buscaQuestionarioPeloID';
const API_URL_LISTA_QUESTIONARIOSANSIEDADEPORDISCENTE = URL.getDominio() + '/QuestionarioDeAnsiedadeDeBeck/buscaQuestionariosPeloID';
const API_URL_QUESTIONARIOANSIEDADEPORIDQUESTIONARIO = URL.getDominio() + '/QuestionarioDeAnsiedadeDeBeck/buscaQuestionarioPeloID';
const API_URL_LISTA_QUESTIONARIOSDEPRESSAOPORDISCENTE = URL.getDominio() + '/QuestionarioDeDepressaoDeBeck/buscaQuestionariosPeloID';
const API_URL_QUESTIONARIODEPRESSAOPORIDQUESTIONARIO = URL.getDominio() + '/QuestionarioDeDepressaoDeBeck/buscaQuestionarioPeloID';

class QuestionarioService {

    getListaQuestionarioSocioeconomico() {
        return axios.get(API_URL_LISTA_QUESTIONARIOSOCIOECONOMICO);
    }

    getListaQuestionarioAnsiedadeBeck() {
        return axios.get(API_URL_LISTA_QUESTIONARIOSANSIEDADEBECK);
    }

    getListaQuestionarioDepressaoBeck() {
        return axios.get(API_URL_LISTA_QUESTIONARIOSDEPRESSAOBECK);
    }

    getListaQuestionarioSocioeconomicoPorId(id) {
        return axios.post(API_URL_LISTA_QUESTIONARIOSOCIOECONOMICOPORDISCENTE, id, headers);
    }

    getQuestionarioSocioeconomicoPorId(idQuestionario) {
        return axios.post(API_URL_QUESTIONARIOSOCIOECONOMICOPORIDQUESTIONARIO, idQuestionario, headers);
    }

    getQuestionariosAnsiedadePorId(idQuestionario) {
        return axios.post(API_URL_LISTA_QUESTIONARIOSANSIEDADEPORDISCENTE, idQuestionario, headers);
    }

    getQuestionarioAnsiedadePorId(idQuestionario) {
        return axios.post(API_URL_QUESTIONARIOANSIEDADEPORIDQUESTIONARIO, idQuestionario, headers);
    }

    getQuestionariosDepressaoPorId(idQuestionario) {
        return axios.post(API_URL_LISTA_QUESTIONARIOSDEPRESSAOPORDISCENTE, idQuestionario, headers);
    }

    getQuestionarioDepressaoPorId(idQuestionario) {
        return axios.post(API_URL_QUESTIONARIODEPRESSAOPORIDQUESTIONARIO, idQuestionario, headers);
    }

}

export default new QuestionarioService();