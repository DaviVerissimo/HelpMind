import EstatisticaService from "./EstatisticaService";

class Graficos4Depressao { //renomear variaveis de ansiedade para depressao

    estatisticaDepressaoByCursos(cursos) {

        const estatisticasDepressao = [];
        var estatisticaDepressao = {}
        for (var i = 0; i <= cursos.length; i++) {
            // EstatisticaService.getByCurso(cursos[i]).then((response) => {

            // estatisticaDepressao = {
            //     "Depressao mínima": 0, 
            //     "Depressao leve": 0, 
            //     "Depressao moderada": response.data.quantidadeDepressaoModerada,
            //     "Depressao grave": response.data.quantidadeDepressaoGrave,
            // }

            //  });
             estatisticaDepressao = {
                "Depressao mínima": 28,
                "Depressao leve": 12,
                "Depressao moderada": 32,
                "Depressao grave": 60,
            }
            estatisticasDepressao.push(estatisticaDepressao);
        }

        const coluna1_depressao = [];
        const coluna2_depressao = [];
        const coluna3_depressao = [];
        const coluna4_depressao = [];

        for (var i = 0; i < estatisticasDepressao.length; i++) {

            coluna1_depressao.push(estatisticasDepressao[i]['Depressao mínima']);
            coluna2_depressao.push(estatisticasDepressao[i]['Depressao leve']);
            coluna3_depressao.push(estatisticasDepressao[i]['Depressao moderada']);
            coluna4_depressao.push(estatisticasDepressao[i]['Depressao grave']);
        }

        const dados_depressao = [
            coluna1_depressao,
            coluna2_depressao,
            coluna3_depressao,
            coluna4_depressao];

        return dados_depressao;
    }

}

export default new Graficos4Depressao();