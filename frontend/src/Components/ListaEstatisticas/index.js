import React, { useState } from 'react';
import { Card } from 'primereact/card';
import RelatorioAnsiedadeComponente from '../RelatorioAnsiedadeComponente';
import RelatorioDepressaoComponente from '../RelatorioDepressaoComponente';

export default function ListarEstatisticas() {

    const estatisticaAnsiedadeStr = localStorage.getItem('estatisticaAnsiedade');
    const [estatisticaAnsiedade, setEstatisticaAnsiedade] = useState(JSON.parse(estatisticaAnsiedadeStr));
    const [estatisticaDepressaoStr, setEstatisticaDepressaoStr] = useState(localStorage.getItem('estatisticaDepressao'));
    const [estatisticaDepressao, setEstatisticaDepressao] = useState(JSON.parse(estatisticaDepressaoStr));

    return (

        <div>
            <Card>
                <Card title='Ansiedade' >
                    <RelatorioAnsiedadeComponente estatisticas={estatisticaAnsiedade} ></RelatorioAnsiedadeComponente>
                </Card>
                <Card title='Depressão' >
                    <RelatorioDepressaoComponente estatisticas={estatisticaDepressao}></RelatorioDepressaoComponente>
                </Card>
            </Card>
        </div>
    );
}