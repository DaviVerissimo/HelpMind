import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function BotaoSair() {

    const history = useHistory();
    var configBotao = "p-mb-3 p-col-3";
    var largura = window.screen.width;
    if (largura < 640) {
        configBotao = "p-mt-3 ";
    }
    const encerrarSessao = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <Card className='p-col-16' >
            <div>
                <Button className={configBotao} label="SAIR" onClick={encerrarSessao} />
            </div>
        </Card>

    );
}