import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarPsicologo from '../ToobarPsicologo';

export default function PareceresPsicologico() {

    var configBotao = "p-mr-3 p-mt-3";
    var largura = window.screen.width;
    var espacamento = '10px';
    if (largura < 640) {
        configBotao = "p-mt-3 ";
        espacamento = '0px';
    }
    const history = useHistory();

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <div>
                <Card title='RELATÓRIOS PSICOLÓGICOS ' >
                    <Card className='p-col-16' >
                        <div>
                            <Button className={'p-mt-3  p-mr-3'} label="NOVO RELATÓRIO DO PSICOLOGO" onClick={() => { history.push('/psicologo/parecer') }} />
                            <Button className={configBotao} label="LISTAR RELATÓRIOS PSICOLÓGICOS" onClick={() => { history.push('/psicologo/listarParecerPsicologico') }} />
                        </div>
                    </Card>
                </Card>
            </div>
        </div>
    );
}