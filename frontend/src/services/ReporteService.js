import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/reporte/listarReportes' ;

class ReporteService{

    getReporte(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new ReporteService();