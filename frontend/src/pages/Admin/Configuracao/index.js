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

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <div>
                <Card title='CONFIGURAÇÃO ' >
                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao} label=" GERENCIA DE MATERIAIS" onClick={() => { history.push('/Admin/material/Crud') }} />
                        </div>
                        <div>
                            <Button className={configBotao} label=" GERENCIA DE SERVIDORES" onClick={() => { history.push('/Discente/QuestionarioDeBeck/Ansiedade') }} />
                        </div>
                        <div>
                            <Button className={configBotao} label=" GERENCIA DE CONTATOS" onClick={() => { history.push('/discente/QuestionarioSocioeconomico') }} />
                        </div>
                    </Card>

                </Card>
            </div>
        </div>
    );
}