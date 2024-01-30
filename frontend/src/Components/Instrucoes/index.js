import React from 'react';
import { Card } from 'primereact/card';
import InstrucoesDiscente from '../InstrucoesDiscente';

export default function Instrucoes() {

    return (
        <div>
            <InstrucoesDiscente></InstrucoesDiscente>
            <Card title='Outras orientações: ' >
                <Card subTitle='Após a aplicação dos inventários, o software mostrará um diagnóstico dos níveis de ansiedade e depressão dos estudantes por curso, assim o profissional poderá convidar o estudante que no ato do preenchimento conseguiu ficar entre os níveis “Moderado a Grave de ansiedade ou depressão” para uma anamnese mais detalhada no setor de saúde, através de mensagem via email. Assim após acolhimento o profissional de saúde ficará responsável por informar/encaminhar o estudante com suas queixas informadas no acolhimento presencial no setor de saúde e apresentar os níveis moderado a grave de ansiedade e depressão. ' ></Card>
                <Card subTitle='Caso não haja psicólogo no campus de origem do estudante, se faz necessário:' >
                    <Card subTitle='1 Em caso de ansiedade e ou depressão moderada: Anamnesse setor. Solicitar nova aplicação do texto após seis meses do último. Se mesmo assim após novo inventário continuar como moderado e durante a anamnesse o estudante não informar sinais e sintomas de adoecimento mental mais severos como; indisposição, irritação constante, sono comprometido, choro em vários momentos ao dia, sentimento e vazio, perda de interesse por atividades que antes lhe dava prazer. Ficar aplicando o teste a cada 06 meses. ' ></Card>
                    <Card subTitle='2 Se o estudante apresentar no resultado dos inventários um grau de comprometimento “grave” de ansiedade e ou depressão, o mesmo deverá ser convidado para anamesse do setor de saúde e também ser encaminhado para o psicólogo da rede de saúde do município de origem do estudante. No encaminhamento emitir um relatório do setor com a informação do inventário e as impressões coletadas durante a anamesse.'></Card>
                </Card>
            </Card>
        </div>
    );
}