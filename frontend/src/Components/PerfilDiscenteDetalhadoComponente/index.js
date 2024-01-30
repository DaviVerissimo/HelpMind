import { Card } from 'primereact/card';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DiscenteService from '../../services/DiscenteService';
import BotaoVoltar from '../BotaoVoltar';
import { Divider } from 'primereact/divider';

export default function PerfilDiscenteDetalhadoComponente(props) {

    const { id } = useParams();
    var configBotao = "p-mb-3";
    var largura = window.screen.width;

    var estiloCard = { width: '30%' };
    var estiloCard2 = { width: '35%' };
    var estiloPainelDetalhes = { width: '60%' };
    var estiloPainelBotoes = { display: 'flex', flexWrap: 'wrap', width: '40%' };
    if (largura < 640) {
        configBotao = "p-mt-3 ";
        estiloCard = { width: '100%' };
        estiloCard2 = { width: '100%' };
        estiloPainelDetalhes = { width: '100%' };
        estiloPainelBotoes = { display: 'flex', flexWrap: 'wrap', width: '100%' }
    }
    const history = useHistory();
    const [discente, setDiscente] = useState([])
    const requisitarDiscente = () => {
        DiscenteService.getDiscenteById(id).then((response) => {
            setDiscente(response.data)
        });
    };

    useEffect(() => {
        requisitarDiscente()
    }, [])

    if (discente != undefined && discente != null) {
        const discenteStr = JSON.stringify(discente);
        localStorage.setItem('discente', discenteStr);
    }

    const visualizarQuestionariosSocioeconomicos = () => {
        const usuario = props.data;
        history.push('/' + usuario + '/QuestionarioSocioeconomico/' + id)
    }

    const visualizarQuestionariosAnsiedade = () => {
        const usuario = props.data;
        history.push('/' + usuario + '/QuestionarioAnsiedadeDeBeck/' + id)
    }

    const visualizarQuestionariosDepressao = () => {
        const usuario = props.data;
        history.push('/' + usuario + '/QuestionarioDepressaoDeBeck/' + id)
    }

    const encaminharDiscente = () => {
        const usuario = props.data;
        history.push('/' + usuario + '/novoEncaminhamentoParaPsicologo/' + id)
    }

    const listarEncaminhamentosDoDiscente = () => {
        const usuario = props.data;
        history.push('/' + usuario + '/listarEncaminhamentosDoDiscente')
    }

    const conversarComPsicologoSobreDiscente = () => {
        const usuario = props.data;
        history.push('/' + usuario + '/iniciarConversaComPsicologo')
    }

    const novoProntuario = () => {
        const usuario = props.data;
        history.push('/' + usuario + '/novoProntuario')
    }

    const listarProntuariosDoDiscente = () => {
        const usuario = props.data;
        history.push('/' + usuario + '/listarProntuariosDoDiscente')
    }

    const [acessoPsicologo, setAcessoPsicologo] = useState(false);
    const [broquearAcessoAoBotao, setBroquearAcessoAoBotao] = useState(false);
    const mudarAcessoParaPsicologo = () => {
        if (localStorage.getItem('loginPsicologo')) {
            setAcessoPsicologo(localStorage.getItem('loginPsicologo'));
        }
        if (JSON.parse(acessoPsicologo)) {
            setBroquearAcessoAoBotao(true);
        }
    }

    useEffect(() => {
        mudarAcessoParaPsicologo()

    }, [acessoPsicologo, broquearAcessoAoBotao])

    return (
        <div
            style={{ display: 'flex', flexWrap: 'wrap' }}
        >
            <div
                style={estiloPainelDetalhes}
            >
                <Card
                    title='PERFIL DO DISCENTE '
                >
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'NOME: '}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.nome}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle='EMAIL: '
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.email}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    {/* <div style={{ display: 'flex', flexWrap: 'wrap' }} ></div> */}
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'MATRICULA: '}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.matricula}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'MÉDIA DE ANSIEDADE'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.mediaDoDiscenteQuestionariosDeAnsiedade}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'STATUS DE ANSIEDADE'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.statusDoDiscenteAnsiedade}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'MÉDIA DE DEPRESSÃO'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.mediaDoDiscenteQuestionariosDeDepresao}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'STATUS DE DEPRESSÃO'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.statusDoDiscenteDepresao}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'ULTIMA NOTA DE ANSIEDADE'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.ultimaNotaAnsiedade}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'ULTIMA NOTA DE DEPRESÃO'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.ultimaNotaDepressao}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'CURSO'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.curso}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'PERIODO'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.periodo}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>

                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle={'CAMPUS'}
                            style={{ width: '30%' }}
                        ></Card>
                        <Card
                            subTitle={discente.campus}
                            style={{ width: '70%' }}
                        ></Card>
                    </div>
                    <Divider></Divider>
                </Card>
            </div>
            <div
                style={estiloPainelBotoes}
            >
                <Card>
                    <div
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <Card
                            subTitle='QUESTIONARIOS'
                            style={{ width: '100%' }}
                        >
                            <div
                            >
                                <Button
                                    className={configBotao}
                                    label="LISTAR INVENTÁRIO DE DEPRESSÃO DE BECK (BDI)"
                                    icon='pi pi-file'
                                    onClick={() => { visualizarQuestionariosDepressao() }}
                                />
                            </div>
                            <div>
                                <Button
                                    className={configBotao}
                                    label="LISTAR INVENTÁRIO DE ANSIEDADE DE BECK (BAI)"
                                    icon='pi pi-file'
                                    onClick={() => { visualizarQuestionariosAnsiedade() }}
                                />
                            </div>
                            <div>
                                <Button
                                    className={configBotao}
                                    label="LISTAR QUESTIONÁRIO SOCIOECONÔMICO (QS)"
                                    icon='pi pi-file'
                                    onClick={() => { visualizarQuestionariosSocioeconomicos() }}
                                />

                            </div>
                        </Card>
                        <Divider></Divider>
                        <Card
                            subTitle='ENCAMINHAMENTOS'
                            style={{ width: '100%' }}
                        >
                            <div>
                                <Button
                                    className={configBotao}
                                    label="ENCAMINHAR DISCENTE"
                                    icon='pi pi-heart-fill'
                                    onClick={() => { encaminharDiscente() }}
                                    disabled={broquearAcessoAoBotao}
                                />
                            </div>
                            <div>
                                <Button
                                    className={configBotao}
                                    label="LISTAR ENCAMINHAMENTOS"
                                    icon='pi pi-heart-fill'
                                    onClick={() => { listarEncaminhamentosDoDiscente() }}
                                />
                            </div>
                        </Card>
                        <Divider></Divider>
                        <Card
                            subTitle='COMUNICAÇÃO'
                            style={{ width: '100%' }}
                        >
                            <div>
                                <Button
                                    className={configBotao}
                                    label="FALAR COM PSICÓLOGO SOBRE ESTE DISCENTE"
                                    icon='pi pi-envelope'
                                    onClick={() => { conversarComPsicologoSobreDiscente() }}
                                    disabled={broquearAcessoAoBotao}
                                />
                            </div>
                            {/* <div>
                                <Button
                                    className={configBotao}
                                    label="ACESSAR PRONTUARIO DO DISCENTE"
                                    icon='pi pi-file'
                                // onClick={() => { visualizarQuestionariosSocioeconomicos() }}
                                />
                            </div> */}

                        </Card>
                        <Divider></Divider>
                        <Card
                            subTitle='PRONTUARIOS'
                            style={{ width: '100%' }}
                        >
                            <div>
                                <Button
                                    className={configBotao}
                                    label="NOVO PRONTUARIO"
                                    icon='pi pi-file'
                                    onClick={() => { novoProntuario() }}
                                    disabled={broquearAcessoAoBotao}
                                />
                            </div>
                            <div>
                                <Button
                                    className={configBotao}
                                    label="LISTAR PRONTUARIOS DO DISCENTE"
                                    icon='pi pi-file'
                                    onClick={() => { listarProntuariosDoDiscente() }}
                                    disabled={broquearAcessoAoBotao}
                                />
                            </div>
                        </Card>
                    </div>
                </Card>
            </div>
        </div>
    );
}
