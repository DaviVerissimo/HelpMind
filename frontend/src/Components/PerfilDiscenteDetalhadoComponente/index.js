import { Card } from 'primereact/card';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DiscenteService from '../../services/DiscenteService';
import BotaoVoltar from '../BotaoVoltar';

export default function PerfilDiscenteDetalhadoComponente(props) {

    const { id } = useParams();

    const location = useLocation();
    var configBotao = "p-mb-3 p-col-3";
    var largura = window.screen.width;
    if (largura < 640) {
        configBotao = "p-mt-3 ";
    }
    const history = useHistory();

    const [discente, setDiscente] = useState([])
    const [questionariosSocioeconomicos, setQuestionarioSocioeconomicos] = useState(discente.listaQuestionarioSocioeconomico);
    const requisitarDiscente = () => {
        DiscenteService.getDiscenteById(id).then((response) => {
            setDiscente(response.data)
        });
    };

    useEffect(() => {
        requisitarDiscente()
    }, [])

    useEffect(() => {

    }, [])

    const visualizarQuestionariosSocioeconomicos = () => {
//        history.goBack();
        const usuario = props.data;
        history.push('/' + usuario + '/QuestionarioSocioeconomico/' + id)
    }

    const visualizarQuestionariosAnsiedade = () => {
        history.goBack();
        const usuario = props.data;
        history.push('/' + usuario + '/QuestionarioAnsiedadeDeBeck/' + id)
    }

    const visualizarQuestionariosDepressao = () => {
        history.goBack();
        const usuario = props.data;
        history.push('/' + usuario + '/QuestionarioDepressaoDeBeck/' + id)
    }

    // const prontuarios = () => {
    //     history.goBack();
    //     history.push('/profissionalDeSaude/prontuarios' + id)
    // }

    return (
        <div>
            <div>
                <Card title='PERFIL DO DISCENTE ' >
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <Card subTitle='NOME: ' > <label>{discente.nome}</label> </Card>
                    <Card subTitle='EMAIL: ' > <label>{discente.email}</label> </Card>
                    <Card subTitle='MATRICULA: ' > <label>{discente.matricula}</label> </Card>
                    <Card subTitle='MEDIA DE ANSIEDADE' > <label>{discente.mediaDoDiscenteQuestionariosDeAnsiedade}</label> </Card>
                    <Card subTitle='STATUS DE ANSIEDADE' > <label>{discente.statusDoDiscenteAnsiedade}</label> </Card>
                    <Card subTitle='MEDIA DE DEPRESSÃO' > <label>{discente.mediaDoDiscenteQuestionariosDeDepresao}</label> </Card>
                    <Card subTitle='STATUS DE DEPRESSÃO' > <label>{discente.statusDoDiscenteDepresao}</label> </Card>

                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao} label="LISTAR INVENTÁRIO DE DEPRESSÃO DE BECK (BDI)" onClick={() => { visualizarQuestionariosDepressao() }} />
                        </div>
                        <div>
                            <Button className={configBotao} label="LISTAR INVENTÁRIO DE ANSIEDADE DE BECK (BAI)" onClick={() => { visualizarQuestionariosAnsiedade() }} />
                        </div>
                        <div>
                            <Button className={configBotao} label="LISTAR QUESTIONÁRIO SOCIOECONÔMICO (QS)" onClick={() => { visualizarQuestionariosSocioeconomicos() }} />
                        </div>
                        <div>
                            {/* <Button className={configBotao} label="PRONTUÁRIOS"  onClick={() => {prontuarios()}} /> */}
                        </div>
                    </Card>

                </Card>
            </div>
        </div>
    );
}
