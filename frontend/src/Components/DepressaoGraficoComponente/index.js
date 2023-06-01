import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import GraficoBarraHorizontal_4_Colunas_Componente from '../GraficoBarraHorizontal_4_Colunas_Componente';

export default function DepressaoGraficoComponente() {

    const rotulosDepressão = ['Depressão mínima', 'Depressão leve', 'Depressão moderada', 'Depressão grave'];
    const [estatisticaDepressaoStr, setEstatisticaDepressaoStr] = useState(localStorage.getItem('estatisticaDepressao'));
    const [estatisticaDepressao, setEstatisticaDepressao] = useState(JSON.parse(estatisticaDepressaoStr));

    const cursos = []
    const listaQuantidadeMinima = []
    const listaQuantidadeLeve = []
    const listaQuantidadeModerada = []
    const listaQuantidadeGrave = []
    const listaMedia = []
    const listaStatusMedio = []

    useEffect(() => {
        if (estatisticaDepressao !== null && estatisticaDepressao !== undefined) {
            for (let i = 0; i < estatisticaDepressao.length; i++) {
                const objeto = estatisticaDepressao[i];
                cursos.push(objeto.curso);
                listaQuantidadeMinima.push(objeto.quantidadeMinima);
                listaQuantidadeLeve.push(objeto.quantidadeLeve);
                listaQuantidadeModerada.push(objeto.quantidadeModerada)
                listaQuantidadeGrave.push(objeto.quantidadeGrave);
                listaMedia.push(objeto.media);
                listaStatusMedio.push(objeto.statusMedio)
            }
        }

    }, [estatisticaDepressao]);

    return (
        <div  >
            <div>
                <Card>
                    <h3>Depressão</h3>
                    <GraficoBarraHorizontal_4_Colunas_Componente
                        rotulos={rotulosDepressão}
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



