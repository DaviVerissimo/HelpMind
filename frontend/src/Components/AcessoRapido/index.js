import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AcessoRapido() {

    var configBotao = "p-mb-3 p-col-3 p-mr-3 ";
    var configBotao2 = "p-mb-3 p-col-3 ";
    var largura = window.screen.width;
    var espacamento = '10px';
    if (largura < 640) {
        configBotao = "p-mt-3 p-mr-3";
        configBotao2 = "p-mt-3 ";

    }
    const history = useHistory();

    return (
        <div>
            <div>
                <Card title='ACESSO RAPIDO ' >
                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao}
                                label="NOVO PRONTUÁRIO"
                                onClick={() => { history.push('/Admin/novoProntuario') }}
                            />
                            <Button className={configBotao}
                                label="LISTAR PRONTUÁRIOS"
                                onClick={() => { history.push('/Admin/listarProntuarios') }}
                            />
                            <Button className={configBotao2}
                                label="LISTAR PARESCER PSIÓLOGICO"
                                onClick={() => { history.push('/Admin/listarpareceresPsicologico') }}
                            />
                        </div>
                    </Card>
                </Card>
            </div>
        </div>
    );
}