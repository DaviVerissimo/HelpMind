import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';

export default function PRONTUARIOS() {

    var configBotao = "p-mb-3 p-col-3";
    var largura = window.screen.width;
    var espacamento = '10px';
    if (largura < 640) {
        configBotao = "p-mt-3 ";
    }
    const history = useHistory();

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <div>
                <Card title='PRONTUÁRIOS ' >
                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao} style={{ right: espacamento }} label="NOVO PRONTUÁRIO" onClick={() => { history.push('/profissionalDeSaude/parescer') }} />
                            <Button className={configBotao} label="LISTAR PRONTUÁRIOS" onClick={() => { history.push('/profissionalDeSaude/listaProntuarios') }} />
                        </div>
                    </Card>

                </Card>

                <Card title='PARECER PSICÓLOGICO ' >
                    <Card className='p-col-16' >
                        <div>
                            {/* <Button className={configBotao} style={{ right: espacamento }} label="NOVO PRONTUÁRIO" onClick={() => { history.push('/profissionalDeSaude/parescer') }} /> */}
                            <Button className={configBotao} label="LISTAR PARECERES PSICÓLOGICOS" onClick={() => { history.push('/profissionalDeSaude/listarParescerPsicologico') }} />
                        </div>
                    </Card>

                </Card>
            </div>
        </div>
    );
}