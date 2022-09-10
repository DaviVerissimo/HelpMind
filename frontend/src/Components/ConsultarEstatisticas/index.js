import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Periodo from '../Periodo';
import Cursos from '../Cursos';

export default function ConsultarEstatisticas(props) {

    const history = useHistory();
    var configBotaoConsultar = "p-mb-3 p-mt-3 p-col-1";
    var largura = window.screen.width;
    if (largura < 640) {
        configBotaoConsultar = "p-mb-3 ";
    }

    async function submeter() {
        const logado = props.logado;
        history.push('/' + logado + '/listarEstatisticas');
    }

    return (
        <div>
            <div >
                <Card title="CONSULTAR ESTATÍSTICAS"></Card>
                <Card className="" >
                    <div>
                        <Button className={configBotaoConsultar} label="CONSULTAR" onClick={submeter} />
                    </div>
                </Card>
                <Card >
                    <Card subTitle='CURSO'>
                        <Cursos></Cursos>
                    </Card>
                    <Card subTitle='PERIODO'>
                        <Periodo></Periodo>
                    </Card>
                </Card>
            </div>
        </div>

    );
}
