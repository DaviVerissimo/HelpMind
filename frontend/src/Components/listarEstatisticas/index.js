import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import EstatisticaService from '../../services/EstatisticaService';
import StatusAnsiedadeComponente from '../StatusAnsiedadeComponente';
import StatusDepressaoComponente from '../StatusDepressaoComponente';

export default function ListarEstatisticas() {

    localStorage.removeItem('campusComponente');
    localStorage.removeItem('cursoComponente');
    localStorage.removeItem('periodoComponente');
    localStorage.removeItem('SemestreComponente');
    const estatisticaAnsiedadeStr = localStorage.getItem('estatisticaAnsiedade');
    const [estatisticaAnsiedade, setEstatisticaAnsiedade] = useState(JSON.parse(estatisticaAnsiedadeStr));
    const [estatisticaDepressaoStr, setEstatisticaDepressaoStr] = useState(localStorage.getItem('estatisticaDepressao'));
    const [estatisticaDepressao, setEstatisticaDepressao] = useState(JSON.parse(estatisticaDepressaoStr));

    return (

        <div>
            <Card title="ESTATÍSTICAS"></Card>
            <Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card title='Ansiedade' >
                    <StatusAnsiedadeComponente estatisticas={estatisticaAnsiedade} ></StatusAnsiedadeComponente>
                </Card>
                <Card title='Depressão' >
                    <StatusDepressaoComponente estatisticas={estatisticaDepressao}></StatusDepressaoComponente>
                </Card>
            </Card>

        </div>

    );
}