import axios from 'axios';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

const API_URL_LISTA_QUESTIONARIOSOCIOECONOMICO = 'http://localhost:8080/QuestionarioSocioeconomico/ListaQuestionarioSocioeconomico';
const API_URL_LISTA_QUESTIONARIOSANSIEDADEBECK = 'http://localhost:8080/QuestionarioDeAnsiedadeDeBeck/ListaQuestionarioDeAnsiedadeDeBeck';
const API_URL_LISTA_QUESTIONARIOSDEPRESSAOBECK = 'http://localhost:8080/QuestionarioDeDepressaoDeBeck/ListaQuestionarioDepressaoDeBeck';
const API_URL_LISTA_QUESTIONARIOSOCIOECONOMICOPORDISCENTE = 'http://localhost:8080/QuestionarioSocioeconomico/buscaQuestionariosPeloID';
const API_URL_QUESTIONARIOSOCIOECONOMICOPORIDQUESTIONARIO = 'http://localhost:8080/QuestionarioSocioeconomico/buscaQuestionarioPeloID';
const API_URL_LISTA_QUESTIONARIOSANSIEDADEPORDISCENTE = 'http://localhost:8080/QuestionarioDeAnsiedadeDeBeck/buscaQuestionariosPeloID';
const API_URL_QUESTIONARIOANSIEDADEPORIDQUESTIONARIO = 'http://localhost:8080/QuestionarioDeAnsiedadeDeBeck/buscaQuestionarioPeloID';

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

}

export default new QuestionarioService();