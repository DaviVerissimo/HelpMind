import axios from 'axios';
import URL from './URL';

const API_BASE_URL_LISTAR_ALL_PARECER_PSICOLOGICO = URL.getDominio() + '/parecerPsicologico/listarAllParescerPsicologico';
const API_BASE_URL_DELETAR_PARECER_PSICOLOGICO = URL.getDominio() + '/parecerPsicologico/removerParescerPsicologico';
const API_BASE_URL_BUSCAR_PARECER_PSICOLOGICO = URL.getDominio() + '/parecerPsicologico/pesquisarParescerPsicologico';

const headers = {
    'headers': {
        'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
        'Content-Type': 'application/json'
    }
}

class ParecerPsicologicoService {

    getAllParecerPsicologico() {
        return axios.get(API_BASE_URL_LISTAR_ALL_PARECER_PSICOLOGICO);
    }

    getDeleteParecerPsicologico(id) {
        return axios.post(API_BASE_URL_DELETAR_PARECER_PSICOLOGICO, id, headers);
    }

    getBuscarParecerPsicologicoById(id) {
        return axios.post(API_BASE_URL_BUSCAR_PARECER_PSICOLOGICO, id, headers);
    }

}

export default new ParecerPsicologicoService();