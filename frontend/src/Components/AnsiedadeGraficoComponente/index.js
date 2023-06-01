import React, { useState, useEffect} from 'react';
import { Card } from 'primereact/card';
import GraficoBarraHorizontal_4_Colunas_Componente from '../GraficoBarraHorizontal_4_Colunas_Componente';

export default function AnsiedadeGraficoComponente() {

    const rotulosAnsiedade = ['Ansiedade mínima', 'Ansiedade leve', 'Ansiedade moderada', 'Ansiedade grave'];
    const estatisticaAnsiedadeStr = localStorage.getItem('estatisticaAnsiedade');
    const [estatisticaAnsiedade, setEstatisticaAnsiedade] = useState(JSON.parse(estatisticaAnsiedadeStr));

    var limite = true;
    // if (cursos.length < 4) {
    //     limite = false;
    // }

    const cursos = []
    const listaQuantidadeMinima = []
    const listaQuantidadeLeve = []
    const listaQuantidadeModerada = []
    const listaQuantidadeGrave = []
    const listaMedia = []
    const listaStatusMedio = []

    useEffect(() => {
        if (estatisticaAnsiedade !== null && estatisticaAnsiedade !== undefined) {
            for (let i = 0; i < estatisticaAnsiedade.length; i++) {
                const objeto = estatisticaAnsiedade[i];
                cursos.push(objeto.curso);
                listaQuantidadeMinima.push(objeto.quantidadeMinima);
                listaQuantidadeLeve.push(objeto.quantidadeLeve);
                listaQuantidadeModerada.push(objeto.quantidadeModerada)
                listaQuantidadeGrave.push(objeto.quantidadeGrave);
                listaMedia.push(objeto.media);
                listaStatusMedio.push(objeto.statusMedio)
            }
        }

    }, [estatisticaAnsiedade]);

    return (
        <div  >
            <div>
                <Card>
                    <h3>Ansiedade</h3>
                    <GraficoBarraHorizontal_4_Colunas_Componente
                        rotulos={rotulosAnsiedade}
                        identificador={cursos}
                        coluna1={listaQuantidadeMinima}
                        coluna2={listaQuantidadeLeve}
                        coluna3={listaQuantidadeModerada}
                        coluna4={listaQuantidadeGrave}
                    ></GraficoBarraHorizontal_4_Colunas_Componente>
                </Card>
            </div>
        </div>
    )
}



