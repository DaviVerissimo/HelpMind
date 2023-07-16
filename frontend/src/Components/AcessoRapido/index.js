import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AcessoRapido() {
//acesso rapido do Admin
    var configBotao = "p-mb-3 p-mr-3 ";
    var configBotao2 = "p-mb-3 ";
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
                    <Card className='' >
                        <div>
                            <Button className={configBotao}
                                label="ACESSAR TODAS AS MENSAGENS"
                                icon='pi pi-envelope'
                                onClick={() => { history.push('/Admin/listaConversas') }}
                            />
                            <Button className={configBotao}
                                label="LISTAR TODOS OS PRONTUÁRIOS"
                                icon='pi pi-file'
                                onClick={() => { history.push('/Admin/listarProntuarios') }}
                            />
                            <Button className={configBotao2}
                                label="LISTAR TODOS OS RELATÓRIOS PSIÓLOGICO"
                                icon='pi pi-file'
                                onClick={() => { history.push('/Admin/listarRelatoriosPsicologico') }}
                            />
                        </div>
                    </Card>
            </div>
        </div>
    );
}