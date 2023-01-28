import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ReportesComponente(props) {

    var configBotao = "p-ml-3";
    const history = useHistory();
    function listarReportes() {
        const usuario = props.data;
        history.push('/' + usuario + '/ListaReportes');
    }

    function novoReporte() {
        const usuario = props.data;
        history.push('/' + usuario + '/novoReporte');
    }

    return (
        <div>
            <Card title='REPORTES ' >
                <Card>
                    <Button label="NOVO REPORTE" onClick={novoReporte} />
                    <Button className={configBotao} label="LISTAR REPORTES" onClick={listarReportes} />
                </Card>

            </Card>
        </div>
    );
}