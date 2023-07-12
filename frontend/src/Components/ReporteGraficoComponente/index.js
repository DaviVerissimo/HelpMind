import React, { useState, useEffect} from 'react';
import { Card } from 'primereact/card';
import GraficoCircularComponente from '../GraficoCircularComponente';
import Cores from '../../services/Cores';


export default function ReporteGraficoComponente() {

    const estatisticaReporteStr = localStorage.getItem('estatisticaReporte');
    const [estatisticaReporte, setEstatisticaReporte] = useState(JSON.parse(estatisticaReporteStr));
    const cores = Cores.get_RandonColor();
    const cursos = []
    const listaQuantidadeReportado = []
    const listaQuantidadeReportante = []

    useEffect(() => {
        if (estatisticaReporte !== null && estatisticaReporte !== undefined) {
            for (let i = 0; i < estatisticaReporte.length; i++) {
                const objeto = estatisticaReporte[i];
                cursos.push(objeto.curso);
                listaQuantidadeReportado.push(objeto.quantidadeReportado);
                listaQuantidadeReportante.push(objeto.quantidadeReportante);
            }
        }

    }, [estatisticaReporte]);

    return (
        <div  >
            <div>
                <Card>
                    <h3>reportados</h3>
                    <GraficoCircularComponente
                        rotulos={cursos}
                        dados={listaQuantidadeReportado}
                        cores={cores}
                    ></GraficoCircularComponente>
                </Card>
                <Card>
                    <h3>reportantes</h3>
                    <GraficoCircularComponente
                        rotulos={cursos}
                        dados={listaQuantidadeReportante}
                        cores={cores}
                    ></GraficoCircularComponente>
                </Card>
            </div>
        </div>
    )
}



