import { Card } from 'primereact/card';
import React, { useState, useEffect } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { RadioButton } from 'primereact/radiobutton';
import QuestionarioService from '../../services/QuestionarioService';
import BotaoVoltar from '../BotaoVoltar';

export default function VisualizarQuestionarioDeAnsiedadeDeBeckComponente() {

    const { id } = useParams();
    const [questionario, setQuestionario] = useState();
    const obterQuestionario = () => {
        QuestionarioService.getQuestionarioAnsiedadePorId(id).then((response) => {
            setQuestionario(response.data)

        });
    };
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const escolha0 = '0 Absolutamente não';
    const escolha1 = '1 Levemente: Não me incomodou muito';
    const escolha2 = '2 Moderadamente: Foi muito desagradável mas pude suportar';
    const escolha3 = '3 Gravemente: Dificilmente pude suportar';
    const [questao01, setQuestao01] = useState([null]);
    const [questao02, setQuestao02] = useState([null]);
    const [questao03, setQuestao03] = useState([null]);
    const [questao04, setQuestao04] = useState([null]);
    const [questao05, setQuestao05] = useState([null]);
    const [questao06, setQuestao06] = useState([null]);
    const [questao07, setQuestao07] = useState([null]);
    const [questao08, setQuestao08] = useState([null]);
    const [questao09, setQuestao09] = useState([null]);
    const [questao10, setQuestao10] = useState([null]);
    const [questao11, setQuestao11] = useState([null]);
    const [questao12, setQuestao12] = useState([null]);
    const [questao13, setQuestao13] = useState([null]);
    const [questao14, setQuestao14] = useState([null]);
    const [questao15, setQuestao15] = useState([null]);
    const [questao16, setQuestao16] = useState([null]);
    const [questao17, setQuestao17] = useState([null]);
    const [questao18, setQuestao18] = useState([null]);
    const [questao19, setQuestao19] = useState([null]);
    const [questao20, setQuestao20] = useState([null]);
    const [questao21, setQuestao21] = useState([null]);

    useEffect(async () => {
        if (questionario == null) {
            obterQuestionario();
        }

        if (questionario != undefined) {

            setQuestao01(questionario[0]);
            setQuestao02(questionario[1]);
            setQuestao03(questionario[2]);
            setQuestao04(questionario[3]);
            setQuestao05(questionario[4]);
            setQuestao06(questionario[5]);
            setQuestao07(questionario[6]);
            setQuestao08(questionario[7]);
            setQuestao09(questionario[8]);
            setQuestao10(questionario[9]);
            setQuestao11(questionario[10]);
            setQuestao12(questionario[11]);
            setQuestao13(questionario[12]);
            setQuestao14(questionario[13]);
            setQuestao15(questionario[14]);
            setQuestao16(questionario[15]);
            setQuestao17(questionario[16]);
            setQuestao18(questionario[17]);
            setQuestao19(questionario[18]);
            setQuestao20(questionario[19]);
            setQuestao21(questionario[20]);

        }

    }, [questionario]);

    return (
        <div>
            <div>
                <Card title='INVENTÁRIO DE ANSIEDADE DE BECK' ></Card>
                <Card>
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <Card>
                        <Checkbox name="checagem" value="aceito" onChange={e => setChecked(e.checked)} checked={true}></Checkbox>
                        <label > Declaro estar ciente e concordo com o inteiro teor da aplicação deste inventário, inclusive
                            tendo conhecimento que haverá o acesso aos resultados, interpretação e ações de promoção, prevenção e
                            encaminhamentos pelos  profissionais de saúde do campus de origem  aos dados e diante da necessidade
                            encaminhamento a rede externa de saúde mental. Lembrando que seus dados serão de proteção e sigilo dos
                            profissionais de saúde do campus e psicólogo interno e externo. </label>

                    </Card>
                    <Card subTitle='Abaixo está uma lista de sintomas comuns de ansiedade. Por favor, leia cuidadosamente cada item 
da lista. Identifique o quanto você tem sido incomodado por cada sintoma durante a última semana, incluindo hoje
marcando a opção correspondente.' >
                    </Card>
                    <Card subTitle='Dormência ou formigamento 01' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao01(e.value)} checked={questao01 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao01(e.value)} checked={questao01 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao01(e.value)} checked={questao01 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao01(e.value)} checked={questao01 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Sensação de calor 02' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao02(e.value)} checked={questao02 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao02(e.value)} checked={questao02 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao02(e.value)} checked={questao02 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao02(e.value)} checked={questao02 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Tremores nas pernas 03' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao03(e.value)} checked={questao03 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao03(e.value)} checked={questao03 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao03(e.value)} checked={questao03 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao03(e.value)} checked={questao03 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Incapaz de relaxar 04' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao04(e.value)} checked={questao04 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao04(e.value)} checked={questao04 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao04(e.value)} checked={questao04 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao04(e.value)} checked={questao04 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Medo que aconteça o pior 05' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao05(e.value)} checked={questao05 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao05(e.value)} checked={questao05 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao05(e.value)} checked={questao05 === '2'} />
                            <label>{escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao05(e.value)} checked={questao05 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Atordoado ou tonto 06' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao06(e.value)} checked={questao06 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao06(e.value)} checked={questao06 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao06(e.value)} checked={questao06 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao06(e.value)} checked={questao06 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Palpitação ou aceleração do coração 07' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao07(e.value)} checked={questao07 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao07(e.value)} checked={questao07 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao07(e.value)} checked={questao07 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao07(e.value)} checked={questao07 === '3'} />
                            <label> {escolha3}</label>
                        </Card>
                    </Card>

                    <Card subTitle='Sem equilíbrio 08' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao08(e.value)} checked={questao08 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao08(e.value)} checked={questao08 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao08(e.value)} checked={questao08 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao08(e.value)} checked={questao08 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Aterrorizado 09' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao09(e.value)} checked={questao09 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao09(e.value)} checked={questao09 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao09(e.value)} checked={questao09 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao09(e.value)} checked={questao09 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Nervoso 10' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao10(e.value)} checked={questao10 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao10(e.value)} checked={questao10 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao10(e.value)} checked={questao10 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao10(e.value)} checked={questao10 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Sensação de sufocação 11' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao11(e.value)} checked={questao11 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao11(e.value)} checked={questao11 === '1'} />
                            <label> {escolha1}</label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao11(e.value)} checked={questao11 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao11(e.value)} checked={questao11 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Tremores nas mãos 12' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao12(e.value)} checked={questao12 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao12(e.value)} checked={questao12 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao12(e.value)} checked={questao12 === '2'} />
                            <label>{escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao12(e.value)} checked={questao12 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Trêmulo 13' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao13(e.value)} checked={questao13 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao13(e.value)} checked={questao13 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao13(e.value)} checked={questao13 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao13(e.value)} checked={questao13 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Medo de perder o controle 14' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao14(e.value)} checked={questao14 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao14(e.value)} checked={questao14 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao14(e.value)} checked={questao14 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao14(e.value)} checked={questao14 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Dificuldade de respirar 15' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao15(e.value)} checked={questao15 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao15(e.value)} checked={questao15 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao15(e.value)} checked={questao15 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao15(e.value)} checked={questao15 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Medo de morrer 16' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao16(e.value)} checked={questao16 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao16(e.value)} checked={questao16 === '1'} />
                            <label>{escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao16(e.value)} checked={questao16 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao16(e.value)} checked={questao16 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Assustado 17' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao17(e.value)} checked={questao17 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao17(e.value)} checked={questao17 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao17(e.value)} checked={questao17 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao17(e.value)} checked={questao17 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Indigestão ou desconforto no abdômen 18' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao18(e.value)} checked={questao18 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao18(e.value)} checked={questao18 === '1'} />
                            <label>{escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao18(e.value)} checked={questao18 === '2'} />
                            <label> {escolha2}</label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao18(e.value)} checked={questao18 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Sensação de desmaio 19' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao19(e.value)} checked={questao19 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao19(e.value)} checked={questao19 === '1'} />
                            <label>{escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao19(e.value)} checked={questao19 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao19(e.value)} checked={questao19 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Rosto afogueado 20' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao20(e.value)} checked={questao20 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao20(e.value)} checked={questao20 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao20(e.value)} checked={questao20 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao20(e.value)} checked={questao20 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>

                    <Card subTitle='Suor (não devido ao calor) 21' >
                        <Card>
                            <RadioButton value="0" disabled onChange={(e) => setQuestao21(e.value)} checked={questao21 === '0'} />
                            <label> {escolha0} </label>
                        </Card>
                        <Card>
                            <RadioButton value="1" disabled onChange={(e) => setQuestao21(e.value)} checked={questao21 === '1'} />
                            <label> {escolha1} </label>
                        </Card>
                        <Card>
                            <RadioButton value="2" disabled onChange={(e) => setQuestao21(e.value)} checked={questao21 === '2'} />
                            <label> {escolha2} </label>
                        </Card>
                        <Card>
                            <RadioButton value="3" disabled onChange={(e) => setQuestao21(e.value)} checked={questao21 === '3'} />
                            <label> {escolha3} </label>
                        </Card>
                    </Card>
                </Card>

            </div>
        </div>

    );

}