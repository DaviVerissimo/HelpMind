import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import ReporteGraficoComponente from '../ReporteGraficoComponente';
import { TabView, TabPanel } from 'primereact/tabview';
import ListaEstatisticasReporte from '../ListaEstatisticasReporte';

export default function PainelReportesGraficoComponente(props) {

    localStorage.removeItem('campusComponente');
    localStorage.removeItem('cursoComponente');
    localStorage.removeItem('periodoComponente');
    localStorage.removeItem('SemestreComponente');
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div  >
            <div>

                <Card title="ESTÁTISTICAS: REPORTE" >
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <Card>
                        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} >
                            <TabPanel header="GRÁFICO">
                                <ReporteGraficoComponente></ReporteGraficoComponente>
                            </TabPanel>
                            <TabPanel header="RELÁTORIO">
                                <Card >
                                    <ListaEstatisticasReporte></ListaEstatisticasReporte>
                                </Card>
                            </TabPanel>
                        </TabView>
                    </Card>



                </Card>
            </div>

        </div>
    )
}



