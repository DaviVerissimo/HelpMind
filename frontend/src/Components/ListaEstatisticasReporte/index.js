import React, { useState } from 'react';
import { Card } from 'primereact/card';
import RelatorioReporteComponente from '../RelatorioReporteComponente';

export default function ListaEstatisticasReporte() {

    const estatisticaReporteStr = localStorage.getItem('estatisticaReporte');
    const [estatisticaReporte, setEstatisticaReporte] = useState(JSON.parse(estatisticaReporteStr));

    return (
        <div>
            <Card>
                <Card title='REPORTES' >
                    <RelatorioReporteComponente estatisticas={estatisticaReporte} ></RelatorioReporteComponente>
                </Card>
            </Card>
        </div>
    );
}