import EstatisticaService from "./EstatisticaService";

class Graficos4Ansiedade {

    estatisticaAnsiedadeByCursos(cursos) {

        const estatisticasAnsiedade = [];
        var estatisticaAnsiedade = {}
        for (var i = 0; i <= cursos.length; i++) {
            //EstatisticaService.getByCurso(cursos[i]).then((response) => {

            //      estatisticaAnsiedade = {
            //     "Ansiedade mínima": 0, 
            //     "Ansiedade leve": 0, 
            //     "Ansiedade moderada": response.data.quantidadeAnsiedadeModerada,
            //     "Ansiedade grave": response.data.quantiddeAnsiedadeGrave,
            // }
            //  });
            var estatisticaAnsiedade = {
                "Ansiedade mínima": 14,
                "Ansiedade leve": 15,
                "Ansiedade moderada": 18,
                "Ansiedade grave": 10,
            }
            estatisticasAnsiedade.push(estatisticaAnsiedade);
        }

        const coluna1_ansiedade = [];
        const coluna2_ansiedade = [];
        const coluna3_ansiedade = [];
        const coluna4_ansiedade = [];

        for (var i = 0; i < estatisticasAnsiedade.length; i++) {

            coluna1_ansiedade.push(estatisticasAnsiedade[i]['Ansiedade mínima']);
            coluna2_ansiedade.push(estatisticasAnsiedade[i]['Ansiedade leve']);
            coluna3_ansiedade.push(estatisticasAnsiedade[i]['Ansiedade moderada']);
            coluna4_ansiedade.push(estatisticasAnsiedade[i]['Ansiedade grave']);
        }

        const dados_ansiedade = [
            coluna1_ansiedade,
            coluna2_ansiedade,
            coluna3_ansiedade,
            coluna4_ansiedade];

        return dados_ansiedade;
    }

}

export default new Graficos4Ansiedade();