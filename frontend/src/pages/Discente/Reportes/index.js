import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../ToobarDiscente';

export default function Reportes() {

    const id = 23;
    var configBotao = "p-mb-3 p-col-3";
    var largura = window.screen.width;
    var espacamento = '10px';
    if (largura < 640) {
        configBotao = "p-mt-3 ";
    }
    const history = useHistory();

    return (
        <div>
            <ToobarDiscente></ToobarDiscente>
            <div>
                <Card title='REPORTES ' >
                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao}  style={{ right: espacamento }} label="NOVO REPORTE" onClick={() => { history.push('/discente/Reporte') }} />
                            <Button className={configBotao} label="REPORTES REALIZADOS" onClick={() => { history.push('/discente/ListaReportes/' + id) }} />
                            
                        </div>
                    </Card>

                </Card>
            </div>
        </div>
    );
}