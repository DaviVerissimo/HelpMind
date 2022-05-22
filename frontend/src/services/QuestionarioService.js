import axios from 'axios';

const API_URL_LISTA_QUESTIONARIOSOCIOECONOMICO = 'http://localhost:8080/QuestionarioSocioeconomico/ListaQuestionarioSocioeconomico';
const API_URL_LISTA_QUESTIONARIOSANSIEDADEBECK = 'http://localhost:8080/QuestionarioDeAnsiedadeDeBeck/ListaQuestionarioDeAnsiedadeDeBeck';

class QuestionarioService {

    getListaQuestionarioSocioeconomico() {
        return axios.get(API_URL_LISTA_QUESTIONARIOSOCIOECONOMICO);
    }

    getListaQuestionarioAnsiedadeBeck() {
        return axios.get(API_URL_LISTA_QUESTIONARIOSANSIEDADEBECK);
    }
}

export default new QuestionarioService();