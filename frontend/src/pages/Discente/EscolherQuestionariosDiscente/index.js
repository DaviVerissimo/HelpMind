import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../ToobarDiscente';

export default function EscolherQuestionariosDiscente() {

    
    var configBotao = "p-mb-3 p-col-3";
    var largura = window. screen. width;
    if (largura < 640){
        configBotao = "p-mt-3 ";
    }
    const history = useHistory();

    return (
        <div>
            <ToobarDiscente></ToobarDiscente>
            <div>
                <Card title='ESCOLHA DO QUESTIONÁRIO ' >
                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao} label="INVENTÁRIO DE DEPRESSÃO DE BECK (BDI)"  onClick={() => { history.push('/Discente/QuestionarioDeBeck/Depressao') }} />
                        </div>
                        <div>
                            <Button className={configBotao} label="INVENTÁRIO DE ANSIEDADE DE BECK (BAI)" onClick={() => { history.push('/Discente/QuestionarioDeBeck/Ansiedade') }}/>
                        </div>
                        <div>
                            <Button className={configBotao} label="QUESTIONÁRIO SOCIOECONÔMICO (QS)"  onClick={() => {history.push('/discente/QuestionarioSocioeconomico')}} />
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
                        {/* <Card subTitle='' ></Card> */}
                    </Card>

                </Card>
            </div>
        </div>
    );
}