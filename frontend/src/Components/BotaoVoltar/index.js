import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function BotaoVoltar() {

    const history = useHistory();
    var configBotaoVoltar = "p-button-secondary ";
    const voltar = () => {
        history.goBack();
    }
    return (
        <div>
            <Button className={configBotaoVoltar} label="VOLTAR" onClick={voltar} />
        </div>

    );
}