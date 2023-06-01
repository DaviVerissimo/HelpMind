import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import AnsiedadeGraficoComponente from '../AnsiedadeGraficoComponente';
import DepressaoGraficoComponente from '../DepressaoGraficoComponente';

export default function AnsiedadeDepresaoGraficoComponente(props) {

    localStorage.removeItem('campusComponente');
    localStorage.removeItem('cursoComponente');
    localStorage.removeItem('periodoComponente');
    localStorage.removeItem('SemestreComponente');
    return (
        <div  >
            <div>
                <Card title="GRÁFICOS ANSIEDADE E DEPRESSÃO" ></Card>
                <Card>
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <AnsiedadeGraficoComponente></AnsiedadeGraficoComponente>
                    <DepressaoGraficoComponente></DepressaoGraficoComponente>
                </Card>
            </div>

        </div>
    )
}



