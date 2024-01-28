import axios from 'axios';
import URL from './URL';

const CRIAR_ROTINA_QUESTIONARIO_SOCIOECONOMICO = URL.getDominio() + '/RotinaQuestionarioSocioeconomico/salvarRotina';
const API_BASE_URL_REDIRECIONAMENTO_NECESSARIO = URL.getDominio() + '/RotinaQuestionarioSocioeconomico/isRedireciona';

const headers = {
    'headers': {
        'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
        'Content-Type': 'application/json',
    }
}

class RotinaQuestionarioSocioeconomicoService {

    salvarRotina(rotina) {
        return axios.post(CRIAR_ROTINA_QUESTIONARIO_SOCIOECONOMICO, rotina, headers);
    }

    isRedirecionarQuestionarioSocioeconomico(id) {
        return axios.post(API_BASE_URL_REDIRECIONAMENTO_NECESSARIO, id, headers);
    }

}

export default new RotinaQuestionarioSocioeconomicoService();