import { Card } from 'primereact/card';
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../ToobarDiscente';
import axios from "axios";
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';
import URL from '../../../services/URL';
import BotaoVoltar from '../../../Components/BotaoVoltar';
import Semestre from '../../../Components/Semestre';

export default function QuestionarioDeDepresaoDeBeck() {

    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'Enviado com Sucesso!',
            detail: 'Obrigado',
            life: 5000
        });
    }
    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Não foi possivel Enviar!',
            detail: 'Verifique  se todos os campos foram preenchidos.',
            life: 5000
        });
    }
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const [questao01, setQuestao01] = useState(null);
    const [questao02, setQuestao02] = useState(null);
    const [questao03, setQuestao03] = useState(null);
    const [questao04, setQuestao04] = useState(null);
    const [questao05, setQuestao05] = useState(null);
    const [questao06, setQuestao06] = useState(null);
    const [questao07, setQuestao07] = useState(null);
    const [questao08, setQuestao08] = useState(null);
    const [questao09, setQuestao09] = useState(null);
    const [questao10, setQuestao10] = useState(null);
    const [questao11, setQuestao11] = useState(null);
    const [questao12, setQuestao12] = useState(null);
    const [questao13, setQuestao13] = useState(null);
    const [questao14, setQuestao14] = useState(null);
    const [questao15, setQuestao15] = useState(null);
    const [questao16, setQuestao16] = useState(null);
    const [questao17, setQuestao17] = useState(null);
    const [questao18, setQuestao18] = useState(null);
    const [questao19, setQuestao19] = useState(null);
    const [questao20, setQuestao20] = useState(null);
    const [questao21, setQuestao21] = useState(null);
    const [dieta, setDieta] = useState(false);

    var configBotaoSalvar = "p-ml-3";

    function validar() {
        var valido = false;

        if (
            questao01 &&
            questao02 &&
            questao03 &&
            questao04 &&
            questao05 &&
            questao06 &&
            questao07 &&
            questao08 &&
            questao09 &&
            questao10 &&
            questao11 &&
            questao12 &&
            questao13 &&
            questao14 &&
            questao15 &&
            questao16 &&
            questao17 &&
            questao18 &&
            questao19 &&
            questao20 &&
            questao21 != null) {
            valido = true;
        }

        return valido;
    }

    async function submeter() {

        if (checked === true && validar()) {

            const id = localStorage.getItem('id');
            const questionarioSimples = {
                "id": id,
                "dieta": dieta,
                "semestre": localStorage.getItem('SemestreComponente'),
                "lista": [

                    questao01,
                    questao02,
                    questao03,
                    questao04,
                    questao05,
                    questao06,
                    questao07,
                    questao08,
                    questao09,
                    questao10,
                    questao11,
                    questao12,
                    questao13,
                    questao14,
                    questao15,
                    questao16,
                    questao17,
                    questao18,
                    questao19,
                    questao20,
                    questao21

                ]
            }

            const headers = {
                'headers': {
                    'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
                    'Content-Type': 'application/json'
                }
            }

            axios.post(URL.getDominio() + "/QuestionarioDeDepressaoDeBeck/salvar", questionarioSimples, headers)
                .then(Response => { })
                .catch(error => console.log(error))
            showSuccess();
        }
        else { showError() }

    }


    return (
        <div> <ToobarDiscente></ToobarDiscente>
            <div>
                <Toast ref={toast} />
                <Card title='INVENTÁRIO DE DEPRESSÃO DE BECK (BDI)' >

                </Card>
                <Card className="" >
                    <BotaoVoltar></BotaoVoltar>
                    <Button className={configBotaoSalvar} label="SALVAR" onClick={submeter} />
                </Card>
                <Card className="" >
                    <Checkbox name="checagem" value="aceito" onChange={e => setChecked(e.checked)} checked={checked === true}></Checkbox>
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
                <Card subTitle='SEMESTRE' >
                    <Semestre></Semestre>
                </Card>
                <Card subTitle='QUESTÂO 01' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao01(e.value)} checked={questao01 === '0'} />
                        <label> 0 Não me sinto triste </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao01(e.value)} checked={questao01 === '1'} />
                        <label> 1 Eu me sinto triste </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao01(e.value)} checked={questao01 === '2'} />
                        <label> 2 Estou sempre triste e não consigo sair disto </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao01(e.value)} checked={questao01 === '3'} />
                        <label> 3 Estou tão triste ou infeliz que não consigo suportar </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 02' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao02(e.value)} checked={questao02 === '0'} />
                        <label> 0 Não estou especialmente desanimado quanto ao futuro </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao02(e.value)} checked={questao02 === '1'} />
                        <label> 1 Eu me sinto desanimado quanto ao futuro </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao02(e.value)} checked={questao02 === '2'} />
                        <label> 2 Acho que nada tenho a esperar </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao02(e.value)} checked={questao02 === '3'} />
                        <label> 3 Acho o futuro sem esperanças e tenho a impressão de que as coisas não podem melhorar </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 03' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao03(e.value)} checked={questao03 === '0'} />
                        <label> 0 Não me sinto um fracasso </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao03(e.value)} checked={questao03 === '1'} />
                        <label> 1 Acho que fracassei mais do que uma pessoa comum </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao03(e.value)} checked={questao03 === '2'} />
                        <label> 2 Quando olho pra trás, na minha vida, tudo o que posso ver é um monte de fracassos </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao03(e.value)} checked={questao03 === '3'} />
                        <label> 3 Acho que, como pessoa, sou um completo fracasso </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 04' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao04(e.value)} checked={questao04 === '0'} />
                        <label> 0 Tenho tanto prazer em tudo como antes </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao04(e.value)} checked={questao04 === '1'} />
                        <label> 1 Não sinto mais prazer nas coisas como antes </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao04(e.value)} checked={questao04 === '2'} />
                        <label> 2 Não encontro um prazer real em mais nada </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao04(e.value)} checked={questao04 === '3'} />
                        <label> 3 Estou insatisfeito ou aborrecido com tudo </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 05' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao05(e.value)} checked={questao05 === '0'} />
                        <label> 0 Não me sinto especialmente culpado </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao05(e.value)} checked={questao05 === '1'} />
                        <label> 1 Eu me sinto culpado grande parte do tempo </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao05(e.value)} checked={questao05 === '2'} />
                        <label> 2 Eu me sinto culpado na maior parte do tempo </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao05(e.value)} checked={questao05 === '3'} />
                        <label> 3 Eu me sinto sempre culpado </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 06' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao06(e.value)} checked={questao06 === '0'} />
                        <label> 0 Não acho que esteja sendo punido </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao06(e.value)} checked={questao06 === '1'} />
                        <label> 1 Acho que posso ser punido </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao06(e.value)} checked={questao06 === '2'} />
                        <label> 2 Creio que vou ser punido </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao06(e.value)} checked={questao06 === '3'} />
                        <label> 3 Acho que estou sendo punido </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 07' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao07(e.value)} checked={questao07 === '0'} />
                        <label> 0 Não me sinto decepcionado comigo mesmo </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao07(e.value)} checked={questao07 === '1'} />
                        <label> 1 Estou decepcionado comigo mesmo </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao07(e.value)} checked={questao07 === '2'} />
                        <label> 2 Estou enojado de mim </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao07(e.value)} checked={questao07 === '3'} />
                        <label> 3 Eu me odeio </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 08' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao08(e.value)} checked={questao08 === '0'} />
                        <label> 0 Não me sinto de qualquer modo pior que os outros </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao08(e.value)} checked={questao08 === '1'} />
                        <label> 1 Sou crítico em relação a mim por minhas fraquezas ou erros </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao08(e.value)} checked={questao08 === '2'} />
                        <label> 2 Eu me culpo sempre por minhas falhas </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao08(e.value)} checked={questao08 === '3'} />
                        <label> 3 Eu me culpo por tudo de mal que acontece </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 09' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao09(e.value)} checked={questao09 === '0'} />
                        <label> 0 Não tenho quaisquer idéias de me matar </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao09(e.value)} checked={questao09 === '1'} />
                        <label> 1 Tenho idéias de me matar, mas não as executaria </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao09(e.value)} checked={questao09 === '2'} />
                        <label> 2 Gostaria de me matar </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao09(e.value)} checked={questao09 === '3'} />
                        <label> 3 Eu me mataria se tivesse oportunidade </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 10' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao10(e.value)} checked={questao10 === '0'} />
                        <label> 0 Não choro mais que o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao10(e.value)} checked={questao10 === '1'} />
                        <label> 1 Choro mais agora do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao10(e.value)} checked={questao10 === '2'} />
                        <label> 2 Agora, choro o tempo todo </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao10(e.value)} checked={questao10 === '3'} />
                        <label> 3 Costumava ser capaz de chorar, mas agora não consigo, mesmo que o queria </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 11' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao11(e.value)} checked={questao11 === '0'} />
                        <label> 0 Não sou mais irritado agora do que já fui </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao11(e.value)} checked={questao11 === '1'} />
                        <label> 1 Fico aborrecido ou irritado mais facilmente do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao11(e.value)} checked={questao11 === '2'} />
                        <label> 2 Agora, eu me sinto irritado o tempo todo </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao11(e.value)} checked={questao11 === '3'} />
                        <label> 3 Não me irrito mais com coisas que costumavam me irritar </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 12' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao12(e.value)} checked={questao12 === '0'} />
                        <label> 0 Não perdi o interesse pelas outras pessoas </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao12(e.value)} checked={questao12 === '1'} />
                        <label> 1 Estou menos interessado pelas outras pessoas do que costumava estar </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao12(e.value)} checked={questao12 === '2'} />
                        <label> 2 Perdi a maior parte do meu interesse pelas outras pessoas </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao12(e.value)} checked={questao12 === '3'} />
                        <label> 3 Perdi todo o interesse pelas outras pessoas </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 13' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao13(e.value)} checked={questao13 === '0'} />
                        <label> 0 Tomo decisões tão bem quanto antes </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao13(e.value)} checked={questao13 === '1'} />
                        <label> 1 Adio as tomadas de decisões mais do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao13(e.value)} checked={questao13 === '2'} />
                        <label> 2 Tenho mais dificuldades de tomar decisões do que antes </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao13(e.value)} checked={questao13 === '3'} />
                        <label> 3 Absolutamente não consigo mais tomar decisões </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 14' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao14(e.value)} checked={questao14 === '0'} />
                        <label> 0 Não acho que de qualquer modo pareço pior do que antes </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao14(e.value)} checked={questao14 === '1'} />
                        <label> 1 Estou preocupado em estar parecendo velho ou sem atrativo </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao14(e.value)} checked={questao14 === '2'} />
                        <label> 2 Acho que há mudanças permanentes na minha aparência, que me fazem parecer sem atrativo </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao14(e.value)} checked={questao14 === '3'} />
                        <label> 3 Acredito que pareço feio </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 15' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao15(e.value)} checked={questao15 === '0'} />
                        <label> 0 Posso trabalhar tão bem quanto antes </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao15(e.value)} checked={questao15 === '1'} />
                        <label> 1 É preciso algum esforço extra para fazer alguma coisa </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao15(e.value)} checked={questao15 === '2'} />
                        <label> 2 Tenho que me esforçar muito para fazer alguma coisa </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao15(e.value)} checked={questao15 === '3'} />
                        <label> 3 Não consigo mais fazer qualquer trabalho </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 16' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao16(e.value)} checked={questao16 === '0'} />
                        <label> 0 Consigo dormir tão bem como o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao16(e.value)} checked={questao16 === '1'} />
                        <label> 1 Não durmo tão bem como costumava </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao16(e.value)} checked={questao16 === '2'} />
                        <label> 2 Acordo 1 a 2 horas mais cedo do que habitualmente e acho difícil voltar a dormir </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao16(e.value)} checked={questao16 === '3'} />
                        <label> 3 Acordo várias horas mais cedo do que costumava e não consigo voltar a dormir </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 17' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao17(e.value)} checked={questao17 === '0'} />
                        <label> 0 Não fico mais cansado do que o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao17(e.value)} checked={questao17 === '1'} />
                        <label> 1 Fico cansado mais facilmente do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao17(e.value)} checked={questao17 === '2'} />
                        <label> 2 Fico cansado em fazer qualquer coisa </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao17(e.value)} checked={questao17 === '3'} />
                        <label> 3 Estou cansado demais para fazer qualquer coisa </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 18' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao18(e.value)} checked={questao18 === '0'} />
                        <label> 0 O meu apetite não está pior do que o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao18(e.value)} checked={questao18 === '1'} />
                        <label> 1 Meu apetite não é tão bom como costumava ser </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao18(e.value)} checked={questao18 === '2'} />
                        <label> 2 Meu apetite é muito pior agora </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao18(e.value)} checked={questao18 === '3'} />
                        <label> 3 Absolutamente não tenho mais apetite </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 19' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao19(e.value)} checked={questao19 === '0'} />
                        <label> 0 Não tenho perdido muito peso se é que perdi algum recentemente </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao19(e.value)} checked={questao19 === '1'} />
                        <label> 1 Perdi mais do que 2 quilos e meio </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao19(e.value)} checked={questao19 === '2'} />
                        <label> 2 Perdi mais do que 5 quilos </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao19(e.value)} checked={questao19 === '3'} />
                        <label> 3 Perdi mais do que 7 quilos </label>
                    </Card>
                    <Card subTitle='Estou tentando perder peso de propósito, comendo menos' >
                        <RadioButton value={true} onChange={(e) => setDieta(e.value)} checked={dieta === true} />
                        <label> SIM </label>
                        <RadioButton value={false} onChange={(e) => setDieta(e.value)} checked={dieta === false} />
                        <label> NÂO </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 20' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao20(e.value)} checked={questao20 === '0'} />
                        <label> 0 Não estou mais preocupado com a minha saúde do que o habitual </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao20(e.value)} checked={questao20 === '1'} />
                        <label> 1 Estou preocupado com problemas físicos, tais como dores, indisposição do estômago ou constipação </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao20(e.value)} checked={questao20 === '2'} />
                        <label> 2 Estou muito preocupado com problemas físicos e é difícil pensar em outra coisa </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao20(e.value)} checked={questao20 === '3'} />
                        <label> 3 Estou tão preocupado com meus problemas físicos que não consigo pensar em qualquer outra coisa </label>
                    </Card>
                </Card>

                <Card subTitle='QUESTÂO 21' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao21(e.value)} checked={questao21 === '0'} />
                        <label> 0 Não notei qualquer mudança recente no meu interesse por sexo </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao21(e.value)} checked={questao21 === '1'} />
                        <label> 1 Estou menos interessado por sexo do que costumava </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao21(e.value)} checked={questao21 === '2'} />
                        <label> 2 Estou muito menos interessado por sexo agora </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao21(e.value)} checked={questao21 === '3'} />
                        <label> 3 Perdi completamente o interesse por sexo </label>
                    </Card>
                </Card>
            </div>
        </div>

    );

}
