import axios from 'axios';

const API_BASE_URL_LISTAR_ALL_PARECER_PSICOLOGICO = 'http://localhost:8080/parecerPsicologico/listarAllParescerPsicologico';
const API_BASE_URL_DELETAR_PARECER_PSICOLOGICO = 'http://localhost:8080/parecerPsicologico/removerParescerPsicologico';
const API_BASE_URL_BUSCAR_PARECER_PSICOLOGICO = 'http://localhost:8080/parecerPsicologico/pesquisarParescerPsicologico';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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