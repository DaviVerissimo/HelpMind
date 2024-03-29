import { Card } from 'primereact/card';
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import ToobarDiscente from '../ToobarDiscente';
import axios from "axios";
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';
import URL from '../../../services/URL';
import BotaoVoltar from '../../../Components/BotaoVoltar';
import Semestre from '../../../Components/Semestre';

export default function QuestionarioDeAnsiedadeDeBeck() {

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
    const escolha0 = '0 Absolutamente não';
    const escolha1 = '1 Levemente: Não me incomodou muito';
    const escolha2 = '2 Moderadamente: Foi muito desagradável mas pude suportar';
    const escolha3 = '3 Gravemente: Dificilmente pude suportar';
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

    var configBotaoSalvar = "p-ml-3";

    function validar() {
        var valido = false;

        if (questao01 &&
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

            const headers = {
                'headers': {
                    'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
                    'Content-Type': 'application/json'
                }
            }

            const questionarioSimples = {
                "id": id,
                "dieta": false,
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

            axios.post(URL.getDominio() + "/QuestionarioDeAnsiedadeDeBeck/salvar", questionarioSimples, headers)
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
                <Card title='INVENTÁRIO DE ANSIEDADE DE BECK' >

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
                <Card subTitle='SEMESTRE' >
                    <Semestre></Semestre>
                </Card>
                <Card subTitle='Abaixo está uma lista de sintomas comuns de ansiedade. Por favor, leia cuidadosamente cada item 
                da lista. Identifique o quanto você tem sido incomodado por cada sintoma durante a última semana, incluindo hoje
                marcando a opção correspondente.' >
                </Card>
                <Card subTitle='Dormência ou formigamento 01' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao01(e.value)} checked={questao01 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao01(e.value)} checked={questao01 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao01(e.value)} checked={questao01 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao01(e.value)} checked={questao01 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Sensação de calor 02' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao02(e.value)} checked={questao02 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao02(e.value)} checked={questao02 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao02(e.value)} checked={questao02 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao02(e.value)} checked={questao02 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Tremores nas pernas 03' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao03(e.value)} checked={questao03 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao03(e.value)} checked={questao03 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao03(e.value)} checked={questao03 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao03(e.value)} checked={questao03 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Incapaz de relaxar 04' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao04(e.value)} checked={questao04 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao04(e.value)} checked={questao04 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao04(e.value)} checked={questao04 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao04(e.value)} checked={questao04 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Medo que aconteça o pior 05' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao05(e.value)} checked={questao05 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao05(e.value)} checked={questao05 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao05(e.value)} checked={questao05 === '2'} />
                        <label>{escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao05(e.value)} checked={questao05 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Atordoado ou tonto 06' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao06(e.value)} checked={questao06 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao06(e.value)} checked={questao06 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao06(e.value)} checked={questao06 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao06(e.value)} checked={questao06 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Palpitação ou aceleração do coração 07' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao07(e.value)} checked={questao07 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao07(e.value)} checked={questao07 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao07(e.value)} checked={questao07 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao07(e.value)} checked={questao07 === '3'} />
                        <label> {escolha3}</label>
                    </Card>
                </Card>

                <Card subTitle='Sem equilíbrio 08' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao08(e.value)} checked={questao08 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao08(e.value)} checked={questao08 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao08(e.value)} checked={questao08 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao08(e.value)} checked={questao08 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Aterrorizado 09' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao09(e.value)} checked={questao09 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao09(e.value)} checked={questao09 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao09(e.value)} checked={questao09 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao09(e.value)} checked={questao09 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Nervoso 10' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao10(e.value)} checked={questao10 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao10(e.value)} checked={questao10 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao10(e.value)} checked={questao10 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao10(e.value)} checked={questao10 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Sensação de sufocação 11' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao11(e.value)} checked={questao11 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao11(e.value)} checked={questao11 === '1'} />
                        <label> {escolha1}</label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao11(e.value)} checked={questao11 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao11(e.value)} checked={questao11 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Tremores nas mãos 12' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao12(e.value)} checked={questao12 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao12(e.value)} checked={questao12 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao12(e.value)} checked={questao12 === '2'} />
                        <label>{escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao12(e.value)} checked={questao12 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Trêmulo 13' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao13(e.value)} checked={questao13 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao13(e.value)} checked={questao13 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao13(e.value)} checked={questao13 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao13(e.value)} checked={questao13 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Medo de perder o controle 14' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao14(e.value)} checked={questao14 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao14(e.value)} checked={questao14 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao14(e.value)} checked={questao14 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao14(e.value)} checked={questao14 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Dificuldade de respirar 15' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao15(e.value)} checked={questao15 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao15(e.value)} checked={questao15 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao15(e.value)} checked={questao15 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao15(e.value)} checked={questao15 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Medo de morrer 16' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao16(e.value)} checked={questao16 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao16(e.value)} checked={questao16 === '1'} />
                        <label>{escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao16(e.value)} checked={questao16 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao16(e.value)} checked={questao16 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Assustado 17' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao17(e.value)} checked={questao17 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao17(e.value)} checked={questao17 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao17(e.value)} checked={questao17 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao17(e.value)} checked={questao17 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Indigestão ou desconforto no abdômen 18' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao18(e.value)} checked={questao18 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao18(e.value)} checked={questao18 === '1'} />
                        <label>{escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao18(e.value)} checked={questao18 === '2'} />
                        <label> {escolha2}</label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao18(e.value)} checked={questao18 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Sensação de desmaio 19' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao19(e.value)} checked={questao19 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao19(e.value)} checked={questao19 === '1'} />
                        <label>{escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao19(e.value)} checked={questao19 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao19(e.value)} checked={questao19 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Rosto afogueado 20' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao20(e.value)} checked={questao20 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao20(e.value)} checked={questao20 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao20(e.value)} checked={questao20 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao20(e.value)} checked={questao20 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>

                <Card subTitle='Suor (não devido ao calor) 21' >
                    <Card>
                        <RadioButton value="0" onChange={(e) => setQuestao21(e.value)} checked={questao21 === '0'} />
                        <label> {escolha0} </label>
                    </Card>
                    <Card>
                        <RadioButton value="1" onChange={(e) => setQuestao21(e.value)} checked={questao21 === '1'} />
                        <label> {escolha1} </label>
                    </Card>
                    <Card>
                        <RadioButton value="2" onChange={(e) => setQuestao21(e.value)} checked={questao21 === '2'} />
                        <label> {escolha2} </label>
                    </Card>
                    <Card>
                        <RadioButton value="3" onChange={(e) => setQuestao21(e.value)} checked={questao21 === '3'} />
                        <label> {escolha3} </label>
                    </Card>
                </Card>
            </div>
        </div>

    );

}
