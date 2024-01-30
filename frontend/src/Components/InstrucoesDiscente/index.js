import React from 'react';
import { Card } from 'primereact/card';

export default function InstrucoesDiscente() {

    return (
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
    );
}