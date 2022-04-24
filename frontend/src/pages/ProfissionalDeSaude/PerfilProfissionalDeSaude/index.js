import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';

export default function PerfilProfissionalDeSaude() {

    var configBotao = "p-mb-3 p-col-3";
    var largura = window.screen.width;
    if (largura < 640) {
        configBotao = "p-mt-3 ";
    }
    const history = useHistory();

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <div>
                <Card title='MEU PERFIL ' >
                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao} label="SAIR" onClick={() => { history.push('/') }} />
                        </div>
                    </Card>

                    <Card title='INSTRUÇÕES AO ESTUDANTE: ' >
                        <Card subTitle='Em primeiro lugar, você deve classificar os itens com base em sua condição durante as últimas duas semanas, além do dia em que o teste é administrado.' ></Card>
                        <Card subTitle='Se acha que várias afirmações descrevem sua condição da mesma forma, escolha a resposta com o número maior na escala de 0 a 3. Por exemplo, se acha que 2 e 3 são igualmente representativos de sua condição, escolha a afirmação 3.' ></Card>
                        <Card subTitle='Tente administrar o teste em um ambiente sem distrações.' ></Card>
                        <Card subTitle='Faça o teste em um cômodo silencioso.' ></Card>
                        <Card subTitle='Faça-o quando se sentir bem o suficiente para se concentrar em suas respostas.' ></Card>
                        <Card subTitle='Como só é possível escolher um item entre os quatro, tente julgar suas emoções, sentimentos ou comportamentos com a maior precisão possível.' ></Card>
                        <Card subTitle='Caso durante seu preenchimento você não se sinta confortável para preencher poderá suspendê-lo de forma voluntária sem qualquer empecilho e comunicar aos profissionais de saúde ou ao profissional psicólogo do Campus. ' ></Card>
                        <Card subTitle='Ao final do preenchimento será gerado um número na escala de ansiedade e depressão que a equipe de saúde e os profissionais psicólogos terão acesso livre aos resultados, assim em algum momento se acharem necessário, o estudante será convidado ao acolhimento pelos profissionais de saúde do campus e encaminhado aos profissionais interno da instituição e rede de apoio em saúde mental externo.' ></Card>
                        <Card subTitle='Caso você já seja um usuário de algum serviço de psicologia e psiquiatria. O resultado poderá ser solicitado para aos profissionais de saúde do campus no intuito de manter elo de comunicação entre profissionais de saúde. ' ></Card>

                    </Card>

                    <Card title='Outras orientações: ' >
                        <Card subTitle='Após a aplicação dos inventários, o software mostrará um diagnóstico dos níveis de ansiedade e depressão dos estudantes por curso, assim o profissional poderá convidar o estudante que no ato do preenchimento conseguiu ficar entre os níveis “Moderado a Grave de ansiedade ou depressão” para uma anamnese mais detalhada no setor de saúde, através de mensagem via email. Assim após acolhimento o profissional de saúde ficará responsável por informar/encaminhar o estudante com suas queixas informadas no acolhimento presencial no setor de saúde e apresentar os níveis moderado a grave de ansiedade e depressão. ' ></Card>
                        <Card subTitle='Caso não haja psicólogo no campus de origem do estudante, se faz necessário:' >
                            <Card subTitle='1 Em caso de ansiedade e ou depressão moderada: Anamnesse setor. Solicitar nova aplicação do texto após seis meses do último. Se mesmo assim após novo inventário continuar como moderado e durante a anamnesse o estudante não informar sinais e sintomas de adoecimento mental mais severos como; indisposição, irritação constante, sono comprometido, choro em vários momentos ao dia, sentimento e vazio, perda de interesse por atividades que antes lhe dava prazer. Ficar aplicando o teste a cada 06 meses. ' ></Card>
                            <Card subTitle='2 Se o estudante apresentar no resultado dos inventários um grau de comprometimento “grave” de ansiedade e ou depressão, o mesmo deverá ser convidado para anamesse do setor de saúde e também ser encaminhado para o psicólogo da rede de saúde do município de origem do estudante. No encaminhamento emitir um relatório do setor com a informação do inventário e as impressões coletadas durante a anamesse. 
' ></Card>
                        </Card>



                    </Card>

                </Card>
            </div>
        </div>
    );
}