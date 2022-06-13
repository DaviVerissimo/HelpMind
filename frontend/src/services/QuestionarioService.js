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

}

export default new QuestionarioService();