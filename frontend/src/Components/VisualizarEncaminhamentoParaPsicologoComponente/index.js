import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import EncaminhamentoService from '../../services/EncaminhamentoService';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import Usuario from '../../services/Usuario';

export default function VisualizarEncaminhamentoParaPsicologoComponente() {

    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'Encaminhamento Finalizado com Sucesso!',
            detail: 'Recarregue para ver mudanças.',
            life: 5500
        });
    }

    const showWan = () => {
        toast.current.show({
            severity: 'warn',
            summary: 'Ainda não existe relatório associado a este encaminhamento!',
            detail: 'Aguarde ate que o psicólogo envie.',
            life: 5500
        });
    }

    const showInfo = () => {
        toast.current.show({
            severity: 'info',
            summary: 'Este encaminhamento foi finalizado sem um relatório associado!',
            detail: 'O discente associado pode ter sido encaminhado a rede externa.',
            life: 5500
        });
    }

    const { id } = useParams();
    const history = useHistory();
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
    const [idRelatorio, setIdRelatorio] = useState();
    const [nomeBtn1, setNomeBtn1] = useState('FINALIZAR');

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
            setIdRelatorio(encaminhamento.idRelatorio);
        }

    }, [encaminhamento]);

    function finalizar() {
        EncaminhamentoService.finalizarEncaminhamento(id).then((response) => {
            showSuccess();
        });
    }

    function novoRelatorio() {
        history.push('/psicologo/novoRelatorio/' + id);

    }

    function decidirEvento() {
        if (acessoPsicologo) {
            novoRelatorio();
        }
        else {
            finalizar();
        }
    }

    function retornaUsuario() {
        var usuario;

        if (localStorage.getItem('loginPsicologo')) {
            usuario = Usuario.get_PSICOLOGO();
        }
        if (localStorage.getItem('loginAdmin')) {
            usuario = Usuario.get_ADMIN();
        }
        if (localStorage.getItem('loginProfSaude')) {
            usuario = Usuario.get_PROFISSIONAL_DE_SAUDE();
        }

        return usuario;
    }

    function submeter() {
        var usuario = retornaUsuario();

        if (status == 'Finalizado' || status == 'Recebeu relátorio do psicólogo') {
            if (idRelatorio != '' && idRelatorio != null && idRelatorio != undefined) {
                history.push('/' + usuario + '/visualizarParescer/' + idRelatorio);
            }
            else {
                showInfo();
            }
        }

        if (status == 'Aguardando resultado') {
            showWan()
        }
    }

    const [acessoPsicologo, setAcessoPsicologo] = useState(false);
    const [broquearAcessoAoBotao, setBroquearAcessoAoBotao] = useState(false);
    const mudarAcessoParaPsicologo = () => {
        if (localStorage.getItem('loginPsicologo')) {
            setAcessoPsicologo(localStorage.getItem('loginPsicologo'));
        }
        if (JSON.parse(acessoPsicologo)) {
            setNomeBtn1('NOVO RELATÓRIO');
        }
    }

    useEffect(() => {
        mudarAcessoParaPsicologo()

    }, [acessoPsicologo, broquearAcessoAoBotao])

    return (
        <div>
            <Toast ref={toast} />
            <div >
                <Card title="VISUALIZAR ENCAMINHAMENTO DE DISCENTE"></Card>
                <Card className="" >
                    <div>
                        <BotaoVoltar></BotaoVoltar>
                        <Button
                            label={nomeBtn1}
                            disabled={broquearAcessoAoBotao}
                            className='p-mt-3 p-ml-3 p-mr-3 '
                            icon='pi pi-file'
                            onClick={decidirEvento}
                        >
                        </Button>
                        <Button
                            className='p-mt-3'
                            icon='pi pi-heart-fill'
                            label='VISUALIZAR RELATÓRIO PSICOLÓGICO'
                            onClick={submeter}
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
