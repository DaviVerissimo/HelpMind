import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../ToobarDiscente';
import axios from "axios";
import { RadioButton } from 'primereact/radiobutton';

export default function QuestionarioDeDepresaoDeBeck() {
    // useEffect(async () => { 
    //     var lista = [];
    //     const questoesLista = "http://localhost:8080/QuestionarioDeDepressaoDeBeck/listarQuestoesQuestionario";
    //     axios.get(questoesLista)
    //         .then(Response => {
    //             var dataQuestao = Response.data;
    //             dataQuestao.forEach(item => {
    //                 lista.push(item);
    //             });

    //             lista = lista.map(
    //                 (elementoQuestao) => {
    //                     return {
    //                         label: elementoQuestao,
    //                         value: elementoQuestao
    //                     }
    //                 }
    //             )

    //             setQuestoes(lista);

    //             questao01 = lista[0].alternativa1;
    //             console.log(lista[0].alternativa1 + " chupeta");


    //         })
    //         .catch(error => console.log(error))

    // }, []);


    // console.log(questoes)


    // useEffect(async () => { 

    //     const questoesLista = "http://localhost:8080/QuestionarioDeDepressaoDeBeck/q2";
    //     axios.get(questoesLista)
    //         .then(Response => {
    //             questao02 = Response.data;
    //             console.log("parangamico " + questao02.alternativa1)

    //             })
    //         .catch(error => console.log(error))

    // }, []);

    const [checked, setChecked] = useState();
    const history = useHistory();
    const [questoes, setQuestoes] = useState([]);
    // var questao01;

    var configBotaoCancel = "p-mb-3 p-col-1 p-button-secondary ";
    var configBotaoSalvar = "p-mb-3 p-mt-3 p-col-1";
    var espacamento = '10px';
    var largura = window.screen.width;
    if (largura < 640) {
        configBotaoCancel = "p-mb-3 p-button-secondary "
        configBotaoSalvar = "p-mb-3"
    }



    return (
        <div> <ToobarDiscente></ToobarDiscente>
            <div>
                <Card title='INVENTÁRIO DE DEPRESSÃO DE BECK (BDI)' >

                </Card>
                <Card className="" >
                    <div className="   align-items-end "  >
                        <Button className={configBotaoCancel} style={{ right: espacamento }} label="CANCEL" />
                        <Button className={configBotaoSalvar} label="SALVAR" onClick={null} />
                    </div>
                </Card>
                <Card className="" >
                    <Checkbox name="city" value="Chicago" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                    <label > Declaro estar ciente e concordo com o inteiro teor da aplicação deste inventário, inclusive
                        tendo conhecimento que haverá o acesso aos resultados, interpretação e ações de promoção, prevenção e
                        encaminhamentos pelos  profissionais de saúde do campus de origem  aos dados e diante da necessidade
                        encaminhamento a rede externa de saúde mental. Lembrando que seus dados serão de proteção e sigilo dos
                        profissionais de saúde do campus e psicólogo interno e externo. </label>
                </Card>
                <Card subTitle='Este questionário consiste em 21 grupos de afirmações. 
                Marque a afirmação que descreve melhor a maneira que você tem se 
                sentido na última semana, incluindo hoje. Tome cuidado
                 de ler todas as afirmações, em cada grupo, antes de fazer sua escolha.' >
                </Card>
                <Card subTitle='QUESTÂO 01' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não me sinto triste </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Eu me sinto triste </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Estou sempre triste e não consigo sair disto </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Estou tão triste ou infeliz que não consigo suportar </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 02' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não estou especialmente desanimado quanto ao futuro </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Eu me sinto desanimado quanto ao futuro </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Acho que nada tenho a esperar </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Acho o futuro sem esperanças e tenho a impressão de que as coisas não podem melhorar </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 03' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não me sinto um fracasso </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Acho que fracassei mais do que uma pessoa comum </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Quando olho pra trás, na minha vida, tudo o que posso ver é um monte de fracassos </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Acho que, como pessoa, sou um completo fracasso </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 04' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Tenho tanto prazer em tudo como antes </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Não sinto mais prazer nas coisas como antes </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Não encontro um prazer real em mais nada </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Estou insatisfeito ou aborrecido com tudo </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 05' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não me sinto especialmente culpado </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Eu me sinto culpado grande parte do tempo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Eu me sinto culpado na maior parte do tempo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Eu me sinto sempre culpado </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 06' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não acho que esteja sendo punido </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Acho que posso ser punido </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Creio que vou ser punido </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Acho que estou sendo punido </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 07' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não me sinto decepcionado comigo mesmo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Estou decepcionado comigo mesmo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Estou enojado de mim </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Eu me odeio </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 08' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não me sinto de qualquer modo pior que os outros </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Sou crítico em relação a mim por minhas fraquezas ou erros </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Eu me culpo sempre por minhas falhas </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Eu me culpo por tudo de mal que acontece </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 09' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não tenho quaisquer idéias de me matar </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Tenho idéias de me matar, mas não as executaria </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Gostaria de me matar </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Eu me mataria se tivesse oportunidade </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 10' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não choro mais que o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Choro mais agora do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Agora, choro o tempo todo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Costumava ser capaz de chorar, mas agora não consigo, mesmo que o queria </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 11' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não sou mais irritado agora do que já fui </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Fico aborrecido ou irritado mais facilmente do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Agora, eu me sinto irritado o tempo todo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Não me irrito mais com coisas que costumavam me irritar </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 12' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não perdi o interesse pelas outras pessoas </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Estou menos interessado pelas outras pessoas do que costumava estar </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Perdi a maior parte do meu interesse pelas outras pessoas </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Perdi todo o interesse pelas outras pessoas </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 13' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Tomo decisões tão bem quanto antes </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Adio as tomadas de decisões mais do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Tenho mais dificuldades de tomar decisões do que antes </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Absolutamente não consigo mais tomar decisões </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 14' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não acho que de qualquer modo pareço pior do que antes </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Estou preocupado em estar parecendo velho ou sem atrativo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Acho que há mudanças permanentes na minha aparência, que me fazem parecer sem atrativo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Acredito que pareço feio </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 15' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Posso trabalhar tão bem quanto antes </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 É preciso algum esforço extra para fazer alguma coisa </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Tenho que me esforçar muito para fazer alguma coisa </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Não consigo mais fazer qualquer trabalho </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 16' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Consigo dormir tão bem como o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Não durmo tão bem como costumava </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Acordo 1 a 2 horas mais cedo do que habitualmente e acho difícil voltar a dormir </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Acordo várias horas mais cedo do que costumava e não consigo voltar a dormir </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 17' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não fico mais cansado do que o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Fico cansado mais facilmente do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Fico cansado em fazer qualquer coisa </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Estou cansado demais para fazer qualquer coisa </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 18' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 O meu apetite não está pior do que o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Meu apetite não é tão bom como costumava ser </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Meu apetite é muito pior agora </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Absolutamente não tenho mais apetite </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 19' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não tenho perdido muito peso se é que perdi algum recentemente </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Perdi mais do que 2 quilos e meio </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Perdi mais do que 5 quilos </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Perdi mais do que 7 quilos </label>
                    </Card>
                    <Card subTitle='Estou tentando perder peso de propósito, comendo menos' >
                        <RadioButton className></RadioButton>
                        <label> SIM </label>
                        <RadioButton className></RadioButton>
                        <label> NÂO </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 20' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não estou mais preocupado com a minha saúde do que o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Estou preocupado com problemas físicos, tais como dores, indisposição do estômago ou constipação </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Estou muito preocupado com problemas físicos e é difícil pensar em outra coisa </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Estou tão preocupado com meus problemas físicos que não consigo pensar em qualquer outra coisa </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 21' >
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 0 Não notei qualquer mudança recente no meu interesse por sexo </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 1 Estou menos interessado por sexo do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 2 Estou muito menos interessado por sexo agora </label>
                    </Card>
                    <Card>
                        <RadioButton className></RadioButton>
                        <label> 3 Perdi completamente o interesse por sexo </label>
                    </Card>
                </Card>
            </div>
        </div>

    );

}