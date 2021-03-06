import { Card } from 'primereact/card';
import React from 'react';
import './styles.css'

import logoImg from '../../../assets/logo.png';
import ToobarPublica from '../ToobarPublica/index';

export default function QuemSomos() {

    document.body.style.backgroundColor = '#f8f9fa';
    var configSize = "p-col-4";
    var cofig = "quemSomos-container p-grid p-justify-center p-align-center p-component  p-dir-col ";
    var largura = window. screen. width;
    var valor = '100%';
    
    if (largura < 640){
        configSize = "";
        cofig = " ";
    }

    return (

        <div>
            <ToobarPublica></ToobarPublica>
            <div className={cofig} style={{ height: valor }} >
                <div className={configSize} >
                </div>
                <div className={configSize} >
                    <Card title="Sobre o PROMOÇÃO À SAÚDE MENTAL:"
                        subTitle="Uma ferramenta com intuito de ajudar alunos do IFPB, que se encontram com
                                algum tipo de dificuldade psicológica" >
                    </Card>
                </div>
                <div className={configSize} >
                    <Card title="Visão"
                        subTitle="Esperamos que através da aplicabilidade do produto educacional nos setores de saúde do IFPB,
                         este recurso metodológico garanta às equipes um suporte técnico e uma maior segurança no que tange à 
                         triagem e anamnese dos estudantes com uma visão ampla para identificação e rastreio dos discentes com 
                         sinais de ansiedade e depressão." >
                    </Card>
                </div>
                <div className={configSize} >
                    <Card title="Missão" >
                        <Card
                            subTitle="Instrumentalizar os profissionais de saúde do IFPB no acolhimento e no acompanhamento
                             de discentes com queixas em saúde mental, principalmente a ansiedade e depressão;">
                        </Card>
                        <Card
                            subTitle="Garantir junto à comunidade acadêmica os diretos empregados pela política de assistência
                             Estudantil do IFPB, no que tange ao acolhimento, identificação, rastreia e acompanhamento dos estudantes 
                             com queixas em saúde mental;">
                        </Card>
                        <Card
                            subTitle="Assistir o estudante como referenciado no conceito de Saúde definido pela OMS, que é amplo e
                             não se restringe apenas a ausência de enfermidades, sendo: “um estado de completo bem-estar físico, mental 
                             e social e não somente ausência de afeções e enfermidades””;">
                        </Card>
                        <Card
                            subTitle="Identificar, através do produto educacional, os estudantes que se encontram suscetíveis ao
                             desenvolvimento de algum tipo de perturbação mental;">
                        </Card>
                    </Card>
                </div>
                <div className={configSize} >
                </div>
            </div>
        </div>
    );
}