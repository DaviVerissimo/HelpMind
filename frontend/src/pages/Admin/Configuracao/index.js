import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarAdmin from '../ToobarAdmin';

export default function Configuracao() {

    var configBotao = "p-mb-3 p-col-3";
    var largura = window.screen.width;
    if (largura < 640) {
        configBotao = "p-mt-3 ";
    }
    const history = useHistory();
    const createIcon = (className) => {
        return <i className={className} style={{ 'fontSize': '5em' }}></i>
    }

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <div>
                <Card title='CONFIGURAÇÃO ' >
                    <Card className='' >
                        <div>
                            <Button
                                className={configBotao}
                                icon={'pi pi-box'}
                                label=" GERÊNCIA DE MATERIAIS"
                                onClick={() => { history.push('/Admin/material/Crud') }}
                            />
                        </div>
                        <div>
                            <Button
                                className={configBotao}
                                icon={'pi pi-user-plus'}
                                label=" GERÊNCIA DE SERVIDORES"
                                onClick={() => { history.push('/Admin/GerenciaServidor') }}
                            />
                        </div>
                        <div>
                            <Button
                                icon={'pi pi-comments'}
                                className={configBotao}
                                label=" GERÊNCIA DE CONTATOS"
                                onClick={() => { history.push('/Admin/GerenciaContato') }}
                            />
                        </div>
                        <div>
                            <Button
                                className={configBotao}
                                icon={'pi pi-file'}
                                label=" GERÊNCIA DE PRONTUARIOS"
                                onClick={() => { history.push('/Admin/gerenciaProntuario') }}
                            />
                        </div>
                        <div>
                            <Button
                                className={configBotao}
                                icon={'pi pi-file'}
                                label=" GERÊNCIA DE RELATÓRIO PSICOLÓGICO"
                                onClick={() => { history.push('/Admin/gerenciaParescerPsicologico') }}
                            />
                        </div>
                    </Card>
                    <Card icon={createIcon("pi pi-cog")} >
                        {createIcon("pi pi-cog")}
                    </Card>
                </Card>
            </div>
        </div>
    );
}