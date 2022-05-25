import axios from 'axios';

const API_URL_LISTA_QUESTIONARIOSOCIOECONOMICO = 'http://localhost:8080/QuestionarioSocioeconomico/ListaQuestionarioSocioeconomico';
const API_URL_LISTA_QUESTIONARIOSANSIEDADEBECK = 'http://localhost:8080/QuestionarioDeAnsiedadeDeBeck/ListaQuestionarioDeAnsiedadeDeBeck';
const API_URL_LISTA_QUESTIONARIOSDEPRESSAOBECK = 'http://localhost:8080/QuestionarioDeDepressaoDeBeck/ListaQuestionarioDepressaoDeBeck';

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

}

export default new QuestionarioService();