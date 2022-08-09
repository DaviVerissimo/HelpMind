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
                        subTitle="Este Software é  resultado do produto educacional
                         elaborado a partir dos resultados da pesquisa de mestrado intitulada 
                         “ESTRATÉGIAS DE ACOLHIMENTO E ACOMPANHAMENTO DE DISCENTES COM QUEIXAS EM SAÚDE MENTAL NO INSTITUTO FEDERAL DA PARAÍBA”,
                         desenvolvida durante o Mestrado Profissional em Educação Profissional e Tecnológica (PROFEPT) do Instituto Federal  da 
                         Paraíba– Campus João Pessoa. " >
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
                             desenvolvimento de algum tipo de perturbação mental;
                             Este instrumento não tem o objetivo de substituir consultas com profissionais psicólogos ou psiquiatras
                              nem tão pouco dar diagnóstico, função esta de competência privativa de outros profissionais da saúde. 
                             Trazemos sempre a importância do profissional psicólogo durante toda sua aplicação, levando em consideração
                              a importância do trabalho em uma equipe multiprofissional dentro da instituição de ensino, criando uma rede de 
                              apoio e de acolhimento junto ao estudante, respeitando os princípios da oferta da promoção e prevenção à saúde 
                              mental do adolescente que pensamos neste instrumento intitulado SOFTWARE DE APOIO A PROMOÇÃO À SAÚDE MENTAL DO ESTUDANTE. 
                               Esperamos que você profissional de saúde possa inserir sua aplicação na vida cotidiana em seu espaço de atuação. Estamos 
                               todos em prol da oferta de um serviço de saúde mental de qualidade e responsável.
                                Neste sentido, espera-se que que você profissional de saúde possa inserir este produto educacional em sua prática 
                                diária em seu espaço de atuação, bem  como possa auxiliar os estudantes e os profissionais do IFPB no enfrentamento de dificuldades encontradas durante a experiência escolar no Ensino Médio Integrado e desta forma minimizar os problemas relacionados a saúde mental. 
                             
                             ">
                        </Card>
                        <Card title='O MEDO ME SUFOCA, ME TIRA O SONO, A PAZ E O PRAZER DE VIVER! VOCÊ PODE ME AJUDAR?'
                        subTitle='LUCIVALDO ALVES'
                        ></Card>
                    </Card>
                </div>
                <div className={configSize} >
                </div>
            </div>
        </div>
    );
}