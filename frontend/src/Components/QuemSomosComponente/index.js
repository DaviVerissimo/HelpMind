import { Card } from 'primereact/card';
import React from 'react';

export default function QuemSomosComponente() {
    return (
        <div className="login-container p-flex p-grid p-flex-wrap p-justify-center" style={{ height: '100%' }} >
            <div className="p-col">
                <Card title="SOBRE O HELPMIND"
                    subTitle={<div>Nossa missão é acolher, compreender e encaminhar.
                        <br />Saúde mental é fundamental para a qualidade de vida, êxito e permanência de nossos estudantes!</div>} >
                    <div className="p-component">
                        <p className="p-mb-3">
                            Esta plataforma foi desenvolvida a partir dos resultados da pesquisa do Mestrado Profissional em Educação Profissional e Tecnológica (PROFEPT/IFPB), intitulada
                            <i>“ESTRATÉGIAS DE ACOLHIMENTO E ACOMPANHAMENTO DE DISCENTES COM QUEIXAS EM SAÚDE MENTAL NO INSTITUTO FEDERAL DA PARAÍBA” (ALVES, 2023)</i>.
                        </p>
                        <p className="p-mb-3">
                            Antecipar estudantes suscetíveis ao desenvolvimento de algum tipo de perturbação mental exige instrumentalização.
                            A plataforma HelpMind permite uma interação mais rápida e referenciada, auxiliando os profissionais de saúde do IFPB
                            no acolhimento (primeiro atendimento) e encaminhamento de estudantes.<b>Esta plataforma não objetiva substituir consultas com psicólogos ou psiquiatras, nem emitir diagnósticos e tratamentos,
                                função esta de competência privativa desses profissionais da saúde.</b>
                        </p>
                        <p className="p-mb-3">
                            Portanto, a plataforma HelpMind pode e deve ser utilizada pela equipe multiprofissional dos campi, com o intiuito de consolidar
                            uma rede de apoio intermedida de acolhimento e encaminhamento de estudantes, que podem se autorreportar ou serem reportados por
                            outros estudantes, docentes e servidores com quem possuam convivência nas atividades acadêmicas.
                        </p>
                        <p className="p-mb-3">
                            Assistir à saúde dos estudantes é um conceito referenciado pela Organização Mundial da Saúde (OMS),
                            já que a saúde é um conceito amplo e multifacetado:
                            <b> “é um estado de completo bem-estar físico, mental e social e não somente ausência de afeções e enfermidades"</b>.
                        </p>
                    </div>
                </Card>
            </div>
            <div className="p-col" >
                <Card title="APLICABILIDADE"
                    subTitle="Para profissionais da área de saúde do IFPB, envolvendo anamnese, encaminhamento e mapeamento de quadros como os de:" >
                    <div className="p-component">
                        <ul className="p-mt-3" style={{ listStyle: 'none', fontSize: '2em'}}>
                            <li>😔 Tristeza</li>
                            <li>😥 Ansiedade / Burnout</li>
                            <li>☹️ Depressão</li>
                            <li>😄😔 Bipolaridade</li>
                            <li>😱 Pânico</li>
                        </ul>
                    </div>
                </Card>
            </div>
            <div className="p-col" >
                <Card title="EQUILÍBRIO MENTAL É UMA QUESTÃO DE CONSCIÊNCIA. REPORTE(SE)!"
                    subTitle="Queremos o seu bem-estar e o das pessoas com quem você convive na escola.">
                    <h4></h4>
                    <div className="p-component">
                        <p className="p-mb-3" style={{ textAlign: 'center', fontSize: '4em'}}>
                            ❤️ + 🧠 + 🧘‍♂️ + 🎓 = 😄
                        </p>
                        <p className="p-mb-3">
                            A vida estudantil, em qualquer faixa etária, é cheia de desafios.
                            As atividades acadêmicas nos preparam para sermos capazes de realizar as nossas conquistas.
                            A história de vida pessoal de cada estudante, soma-se ao cotidiano do curso e ao momento
                            em que cada um se encontra na vida. <b>Essa combinação quando em desequilíbrio
                            pode "engatilhar" episódios supressores da saúde mental.</b>
                        </p>
                        <p className="p-mb-3">
                            A faixa etária adolescente é uma das mais suceptíveis a esses episódios, considerando as mudanças
                            físicas e comportamentais para a formação da vida adulta. Nesse cenário de mudanças e de cobranças,
                            é importante manter o equilíbrio. Portanto, o auxílio por pessoas mais próximas do convívio social
                            ou de profissionais da área de saúde é essencial para a sua superação.
                        </p>
                        <p className="p-mb-3">
                            Se você está precisando de ajuda para se conscientizar ou quer ajudar a alguém,
                            <b> entre em contato com o serviço de saúde de seu campus ou realize um reporte de caso através da nossa ferramenta</b>.
                        </p>
                    </div>
                </Card>
            </div>
        </div >
    );
}