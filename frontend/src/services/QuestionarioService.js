import axios from 'axios';

const API_URL_LISTA_QUESTIONARIOSOCIOECONOMICO = 'http://localhost:8080/QuestionarioSocioeconomico/ListaQuestionarioSocioeconomico';

class QuestionarioSocioeconomicoService {

    getListaQuestionarioSocioeconomico() {
        return axios.get(API_URL_LISTA_QUESTIONARIOSOCIOECONOMICO);
    }
}

export default new QuestionarioSocioeconomicoService();