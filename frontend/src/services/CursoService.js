import Data from "./Data";

class CursoService {

    get_All_cursos() {
        var lista = [];
        const data = Data.carregarDados();
        for (var i = 0; i < data.length; i++) {
            lista.push(data[i].descricao);
        }

        console.log(lista);

        return lista;
    }

    get_All_campus() {
        var lista = [];
        const data = Data.carregarDados();
        for (var i = 0; i < data.length; i++) {
            lista.push(data[i].diretoria);
        }

        console.log(lista);

        return lista;
    }

    get_curso_by_campus(campus) {
        var lista = [];
        const data = Data.carregarDados();
        for (var i = 0; i < data.length; i++) {
            if (data[i].diretoria === campus) {
                lista.push(data[i].descricao);
            }
        }

        return lista;
    }

}

export default new CursoService();