import React, {useState} from 'react';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import GraficoBarraHorizontal_4_Colunas_Componente from '../GraficoBarraHorizontal_4_Colunas_Componente';
import Graficos4Ansiedade from '../../services/Graficos4Ansiedade';
import Graficos4Depressao from '../../services/Graficos4Depressao';
import CursoService from '../../services/CursoService';

export default function AnsiedadeDepresaoGraficoComponente(props) {

    const campus = localStorage.getItem('campusComponente');
    const [listaCursos, setListaCursos] = useState(CursoService.get_curso_by_campus(campus));
    const rotulosAnsiedade = ['Ansiedade mínima', 'Ansiedade leve', 'Ansiedade moderada', 'Ansiedade grave'];
    const rotulosDepressão = ['Depressão mínima', 'Depressão leve', 'Depressão moderada', 'Depressão grave'];
    const [dados_ansiedade, setDados_ansiedade] = useState(Graficos4Ansiedade.estatisticaAnsiedadeByCursos(campus));
    const [dados_depressao, setDados_depressao] = useState(Graficos4Depressao.estatisticaDepressaoByCursos(campus));
    var limite = true;
    if (listaCursos.length < 4){
        limite = false;
    }

    return (
        <div  >
            <div>
                <Card title="GRÁFICOS ANSIEDADE E DEPRESSÃO" ></Card>
                <Card>
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <Card>
                        <h3>Ansiedade</h3>
                        <GraficoBarraHorizontal_4_Colunas_Componente rotulos={rotulosAnsiedade} dados={dados_ansiedade} identificador={listaCursos} limite={limite} ></GraficoBarraHorizontal_4_Colunas_Componente>
                    </Card>
                    <Card>
                        <h3>Depressão</h3>
                        <GraficoBarraHorizontal_4_Colunas_Componente rotulos={rotulosDepressão} dados={dados_depressao} identificador={listaCursos} limite={limite} ></GraficoBarraHorizontal_4_Colunas_Componente>
                    </Card>
                </Card>
            </div>

        </div>
    )
}



