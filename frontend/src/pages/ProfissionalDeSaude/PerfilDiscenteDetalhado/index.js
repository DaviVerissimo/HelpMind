import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import axios from 'axios';
import DiscenteService from '../../../services/DiscenteService';

export default function PerfilDiscenteDetalhado() {
    
    const {id} = useParams();
    
    const location = useLocation();
    var configBotao = "p-mb-3 p-col-3";
    var largura = window. screen. width;
    if (largura < 640){
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
        history.goBack();
        history.push('/profissionalDeSaude/QuestionarioSocioeconomico/' + id)
    }

    const visualizarQuestionariosAnsiedade = () => {
        history.goBack();
        history.push('/profissionalDeSaude/QuestionarioAnsiedadeDeBeck/' + id)
    }
    
    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <div>
                <Card title='PERFIL DO DISCENTE ' >
                    <Card subTitle='NOME: ' > <label>{discente.nome}</label> </Card>
                    <Card subTitle='EMAIL: ' > <label>{discente.email}</label> </Card>
                    <Card subTitle='MATRICULA: ' > <label>{discente.matricula}</label> </Card>
                    <Card subTitle='MEDIA DE ANSIEDADE' > <label>{discente.mediaDoDiscenteQuestionariosDeAnsiedade}</label> </Card>
                    <Card subTitle='STATUS DE ANSIEDADE' > <label>{discente.StatusDoDiscenteAnsiedade}</label> </Card>
                    <Card subTitle='MEDIA DE DEPRESSÃO' > <label>{discente.mediaDoDiscenteQuestionariosDeDepresao}</label> </Card>
                    <Card subTitle='STATUS DE DEPRESSÃO' > <label>{discente.StatusDoDiscenteDepresao}</label> </Card>

                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao} label="LISTAR INVENTÁRIO DE DEPRESSÃO DE BECK (BDI)"  onClick={() => { history.push('/profissionalDeSaude/QuestionarioDepressaoDeBeck') }} />
                        </div>
                        <div>
                            <Button className={configBotao} label="LISTAR INVENTÁRIO DE ANSIEDADE DE BECK (BAI)" onClick={() => { visualizarQuestionariosAnsiedade()}} />
                        </div>
                        <div>
                            <Button className={configBotao} label="LISTAR QUESTIONÁRIO SOCIOECONÔMICO (QS)"  onClick={() => { visualizarQuestionariosSocioeconomicos()}} />
                        </div>
                    </Card>

                    

                </Card>
            </div>
        </div>
    );
}