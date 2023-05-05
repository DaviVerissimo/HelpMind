import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import EncaminhamentoService from '../../services/EncaminhamentoService';
import { Button } from 'primereact/button';

export default function VisualizarEncaminhamentoParaPsicologoComponente() {

    const { id } = useParams();
    const [encaminhamento, setEncaminhamento] = useState();
    const obterEncaminhamento = () => {
        EncaminhamentoService.getEncaminhamentoById(id).then((response) => {
            setEncaminhamento(response.data)

        });
    };

    const [status, setStatus] = useState(null);
    const [nome, setNome] = useState();
    const [profissionalDeSaude, setProfissionalDeSaude] = useState();
    const [descrisao, setDescrisao] = useState('');
    const [psicologo, setPsicologo] = useState();

    useEffect(async () => {
        if (encaminhamento == null) {
            obterEncaminhamento();
        }

        if (encaminhamento != undefined) {
            setStatus(encaminhamento.status);
            setNome(encaminhamento.discente);
            setProfissionalDeSaude(encaminhamento.profSaude);
            setDescrisao(encaminhamento.descrisao);
            setPsicologo(encaminhamento.psicologo);
        }

    }, [encaminhamento]);

    return (
        <div>
            <div >
                <Card title="VISUALIZAR ENCAMINHAMENTO DE DISCENTE"></Card>
                <Card className="" >
                    <div>
                        <BotaoVoltar></BotaoVoltar>
                        <Button
                            label='VISUALIZAR RELATÓRIO PSICOLÓGICO'
                            disabled
                            className='p-mt-3 p-ml-3 p-mr-3 '
                            icon='pi pi-file'
                        >
                        </Button>
                        <Button
                            label='FINALIZAR'
                            disabled
                            className='p-mt-3'
                            icon='pi pi-heart-fill'
                        >
                        </Button>
                    </div>
                </Card>

                <Card >
                    <Card subTitle='STATUS' >
                        <InputText
                            value={status}
                            style={{ width: '100%' }}
                            disabled
                        />
                    </Card>
                    <Card subTitle='PROFISSIONAL SOLICITANTE' >
                        <InputText
                            value={profissionalDeSaude}
                            style={{ width: '100%' }}
                            disabled
                        />
                    </Card>
                    <Card subTitle='PSICÓLOGO SOLICITADO' >
                        <InputText
                            value={psicologo}
                            style={{ width: '100%' }}
                            disabled
                        />
                    </Card>
                    <Card subTitle='DISCENTE ENCAMINHADO' >
                        <InputText
                            value={nome}
                            style={{ width: '100%' }}
                            disabled
                        />
                    </Card>
                    <Card subTitle='DESCRISÃO' >
                        <InputTextarea disabled
                            value={descrisao}
                            autoResize
                            style={{ width: '100%' }}
                        />
                    </Card>
                </Card>
            </div>
        </div>

    );
}