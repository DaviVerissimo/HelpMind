import axios from 'axios';
import URL from './URL';

const API_BASE_URL_LISTAR_ALL_PARECERES_PSICOLOGICOS = URL.getDominio() + '/parecerPsicologico/listarAllParescerPsicologico';
const API_BASE_URL_DELETAR_PARESCER_PSICOLOGICO = URL.getDominio() + '/parecerPsicologico/removerParescerPsicologico';
const API_BASE_URL_BUSCAR_PARESCER_PSICOLOGICO = URL.getDominio() + '/parecerPsicologico/pesquisarParescerPsicologico';

const headers = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

class ParescerPsicologicoService {

    getAllPareceresPsicologico() {
        return axios.get(API_BASE_URL_LISTAR_ALL_PARECERES_PSICOLOGICOS);
    }

    getDeleteParescerPsicologico(id) {
        return axios.post(API_BASE_URL_DELETAR_PARESCER_PSICOLOGICO, id, headers);
    }

    getBuscarParescerPsicologicoById(id) {
        return axios.post(API_BASE_URL_BUSCAR_PARESCER_PSICOLOGICO, id, headers);
    }

}

export default new ParescerPsicologicoService();