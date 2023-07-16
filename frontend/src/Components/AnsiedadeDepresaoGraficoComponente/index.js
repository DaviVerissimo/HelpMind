import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import AnsiedadeGraficoComponente from '../AnsiedadeGraficoComponente';
import DepressaoGraficoComponente from '../DepressaoGraficoComponente';
import { TabView, TabPanel } from 'primereact/tabview';
import ListarEstatisticas from '../ListaEstatisticas';

export default function AnsiedadeDepresaoGraficoComponente(props) {

    localStorage.removeItem('campusComponente');
    localStorage.removeItem('cursoComponente');
    localStorage.removeItem('periodoComponente');
    localStorage.removeItem('SemestreComponente');
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            <div>
                <Card title="ESTÁTISTICAS: ANSIEDADE E DEPRESSÃO" ></Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card>
                    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} >
                        <TabPanel header="GRÁFICO">
                            <AnsiedadeGraficoComponente></AnsiedadeGraficoComponente>
                            <DepressaoGraficoComponente></DepressaoGraficoComponente>
                        </TabPanel>
                        <TabPanel header="RELÁTORIO">
                            <ListarEstatisticas></ListarEstatisticas>
                        </TabPanel>
                    </TabView>
                </Card>
            </div>
        </div>
    )
}



