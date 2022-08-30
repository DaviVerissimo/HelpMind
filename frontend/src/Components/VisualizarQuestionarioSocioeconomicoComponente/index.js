import { Card } from 'primereact/card';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import QuestionarioService from '../../services/QuestionarioService';
import BotaoVoltar from '../BotaoVoltar';

export default function VisualizarQuestionarioSocioeconomicoComponente() {

    const { id } = useParams();
    const [questionarioSocioeconomico, setQuestionarioSocioeconomico] = useState();

    const obterQuestionarioSocioeconomico = () => {
        QuestionarioService.getQuestionarioSocioeconomicoPorId(id).then((response) => {
            setQuestionarioSocioeconomico(response.data)

        });
    };

    const [email, setEmail] = useState();
    const [campusDoDiscente, setCampusDoDiscente] = useState(null);
    const [checked, setChecked] = useState();
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState();
    const [curso, setCurso] = useState([]);
    const [periodo, setPeriodo] = useState('1º');
    const [idade, setIdade] = useState();
    const [cidade, setCidade] = useState('Monteiro');
    const [zonaHurbanaRural_op, setZonaHurbanaRural_op] = useState();
    const [estadoCivil, setEstadoCivil] = useState();
    const [comQuemVive, setComQuemVive] = useState();
    const [rendaFamiliar, setRendaFamiliar] = useState();
    const [cor, setCor] = useState();
    const [genero, setGenero] = useState();
    const [ingressantePorVagaDeCota, setIngressantePorVagaDeCota] = useState();
    const [pessoaDeficiente, setPessoaDeficiente] = useState('Não');
    const [deficiencia_op_tipo, setDeficiencia_op_tipo] = useState();
    const [usoBebidaAlcoolica, setUsoBebidaAlcoolica] = useState();
    const [bullyng, setBullyng] = useState('Não sofri');
    const [resideComPortadorDeProblemaMental, setResideComPortadorDeProblemaMental] = useState('Não');
    const [discenteSofrimentoMental, setDiscenteSofrimentoMental] = useState();
    const [psicotropico, setPsicotropico] = useState();
    const [interesseAjudaPsicologica, setInteresseAjudaPsicologica] = useState();
    const [beneficio, setBeneficio] = useState();
    const [domicilio, setDomicilio] = useState();
    const [doencaDiscente, setDoencaDiscente] = useState();
    const [doencaDoFamiliar_op, setDoencaDoFamiliar_op] = useState();
    const [problemaPsifico_op, setProblemaPsifico_op] = useState('');
    const [outroBeneficio, setOutroBeneficio] = useState();
    const [quantidadeComodos_op, setQuantidadeComodos_op] = useState();
    const [temDoenca, setTemDoenca] = useState();
    const [possuiFamiliarComDoencaGrave, setPossuiFamiliarComDoencaGrave] = useState();
    const [familiarDoente, setFamiliarDoente] = useState();
    const [diaguinostico_op, setDiaguinostico_op] = useState('');
    const [cotista_op, setCotista_op] = useState();

    useEffect(async () => {
        obterQuestionarioSocioeconomico();

        if (questionarioSocioeconomico != undefined) {
            setEmail(questionarioSocioeconomico.email);
        }

        if (questionarioSocioeconomico != undefined) {
            setNome(questionarioSocioeconomico.nome);
        }

        if (questionarioSocioeconomico != undefined) {
            setCampusDoDiscente(questionarioSocioeconomico.campusDoDiscente);
        }

        if (questionarioSocioeconomico != undefined) {
            setMatricula(questionarioSocioeconomico.matricula);
        }

        if (questionarioSocioeconomico != undefined) {
            setCurso(questionarioSocioeconomico.curso);
        }

        if (questionarioSocioeconomico != undefined) {
            setPeriodo(questionarioSocioeconomico.periodo);
        }

        if (questionarioSocioeconomico != undefined) {
            setIdade(questionarioSocioeconomico.idade);
        }

        if (questionarioSocioeconomico != undefined) {
            setCidade(questionarioSocioeconomico.cidade);
        }

        if (questionarioSocioeconomico != undefined) {
            setZonaHurbanaRural_op(questionarioSocioeconomico.zonaHurbanaRural_op);
        }

        if (questionarioSocioeconomico != undefined) {
            setEstadoCivil(questionarioSocioeconomico.estadoCivil);
        }

        if (questionarioSocioeconomico != undefined) {
            setComQuemVive(questionarioSocioeconomico.comQuemVive);
        }

        if (questionarioSocioeconomico != undefined) {
            setRendaFamiliar(questionarioSocioeconomico.rendaFamiliar);
        }

        if (questionarioSocioeconomico != undefined) {
            setCor(questionarioSocioeconomico.cor);
        }

        if (questionarioSocioeconomico != undefined) {
            setGenero(questionarioSocioeconomico.genero);
        }

        if (questionarioSocioeconomico != undefined) {
            setIngressantePorVagaDeCota(questionarioSocioeconomico.ingressantePorVagaDeCota);
        }

        if (questionarioSocioeconomico != undefined) {
            setCotista_op(questionarioSocioeconomico, cotista_op);
        }

        if (questionarioSocioeconomico != undefined) {
            setPessoaDeficiente(questionarioSocioeconomico.pessoaDeficiente);
        }

        if (questionarioSocioeconomico != undefined) {
            setDeficiencia_op_tipo(questionarioSocioeconomico.deficiencia_op_tipo);
        }

        if (questionarioSocioeconomico != undefined) {
            setUsoBebidaAlcoolica(questionarioSocioeconomico.usoBebidaAlcoolica);
        }

        if (questionarioSocioeconomico != undefined) {
            setBullyng(questionarioSocioeconomico.bullyng);
        }

        if (questionarioSocioeconomico != undefined) {
            setResideComPortadorDeProblemaMental(questionarioSocioeconomico.resideComPortadorDeProblemaMental);
        }

        if (questionarioSocioeconomico != undefined) {
            setDiscenteSofrimentoMental(questionarioSocioeconomico.discenteSofrimentoMental);
        }

        if (questionarioSocioeconomico != undefined) {
            setDiaguinostico_op(questionarioSocioeconomico.diaguinostico_op);
        }

        if (questionarioSocioeconomico != undefined) {
            setProblemaPsifico_op(questionarioSocioeconomico.problemaPsifico_op);
        }

        if (questionarioSocioeconomico != undefined) {
            setPsicotropico(questionarioSocioeconomico.psicotropico);
        }

        if (questionarioSocioeconomico != undefined) {
            setInteresseAjudaPsicologica(questionarioSocioeconomico.interesseAjudaPsicologica);
        }

        if (questionarioSocioeconomico != undefined) {
            setInteresseAjudaPsicologica(questionarioSocioeconomico.interesseAjudaPsicologica);
        }

        if (questionarioSocioeconomico != undefined) {
            setBeneficio(questionarioSocioeconomico.beneficio);
        }

        if (questionarioSocioeconomico != undefined) {
            setOutroBeneficio(questionarioSocioeconomico.outroBeneficio);
        }

        if (questionarioSocioeconomico != undefined) {
            setDomicilio(questionarioSocioeconomico.domicilio);
        }

        if (questionarioSocioeconomico != undefined) {
            setQuantidadeComodos_op(questionarioSocioeconomico.quantidadeComodos_op);
        }

        if (questionarioSocioeconomico != undefined) {
            setTemDoenca(questionarioSocioeconomico.doencaGrave);
        }

        if (questionarioSocioeconomico != undefined) {
            setDoencaDiscente(questionarioSocioeconomico.doencaGraveDiscente_op);
        }

        if (questionarioSocioeconomico != undefined) {
            setPossuiFamiliarComDoencaGrave(questionarioSocioeconomico.possuiFamiliarComDoencaGrave);
        }

        if (questionarioSocioeconomico != undefined) {
            setFamiliarDoente(questionarioSocioeconomico.familiarDoente);
        }

        if (questionarioSocioeconomico != undefined) {
            setDoencaDoFamiliar_op(questionarioSocioeconomico.doencaDoFamiliar_op);
        }


        if (questionarioSocioeconomico != undefined) {

        }

    }, [questionarioSocioeconomico]);

    return (
        <div>
            <div>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card className="" >
                    <Checkbox name="city" value="Chicago" onChange={e => setChecked(e.checked)} checked={true}></Checkbox>
                    <label > Declaro estar ciente e concordo com o inteiro teor da aplicação deste inventário, inclusive
                        tendo conhecimento que haverá o acesso aos resultados, interpretação e ações de promoção, prevenção e
                        encaminhamentos pelos  profissionais de saúde do campus de origem  aos dados e diante da necessidade
                        encaminhamento a rede externa de saúde mental. Lembrando que seus dados serão de proteção e sigilo dos
                        profissionais de saúde do campus e psicólogo interno e externo. </label>
                </Card>
                <Card subTitle='NOME' >
                    <InputText className='' value={nome} disabled />
                </Card>
                <Card subTitle='MATRICULA' >
                    <InputText className='' value={matricula} disabled />
                </Card>
                <Card subTitle='CAMPUS' >
                    <InputText className='' value={campusDoDiscente} disabled />
                </Card>
                <Card subTitle='CURSO' >
                    <InputText className='' value={curso} disabled />
                </Card>
                <Card subTitle='PERIODO' >
                    <InputText className='' value={periodo} disabled />
                </Card>
                <Card subTitle='IDADE' >
                    <InputText className='' value={idade} disabled />
                </Card>
                <Card subTitle='CIDADE' >
                    <InputText className='' value={cidade} disabled />
                    <Card subTitle='Escolha a zona: ' >
                        <RadioButton className="p-ml-3" value='Zona urbana' onChange={(e) => setZonaHurbanaRural_op(e.value)} checked={zonaHurbanaRural_op === 'Zona urbana'} />
                        <label> Zona urbana</label>
                        <RadioButton className="p-ml-3" value='' name="city" onChange={(e) => setZonaHurbanaRural_op(e.value)} checked={zonaHurbanaRural_op === 'Zona rural'} />
                        <label> Zona rural</label>
                    </Card>
                </Card>
                <Card subTitle='ESTADO CIVIL' >
                    <InputText className='' value={estadoCivil} disabled />
                </Card>
                <Card subTitle='COM QUEM VIVE' >
                    <InputText className='' value={comQuemVive} disabled />
                </Card>
                <Card subTitle='RENDA FAMILIAR' >
                    <InputText className='' value={rendaFamiliar} disabled />
                </Card>
                <Card subTitle='COR' >
                    <InputText className='' value={cor} disabled />
                </Card>
                <Card subTitle='GÊNERO' >
                    <InputText className='' value={genero} disabled />
                </Card>
                <Card subTitle='OPTANTE/ INGRESSANTE POR VAGAS DE COTAS?' >
                    <InputText className='' value={ingressantePorVagaDeCota} disabled />
                    <Card subTitle='Em caso de resposta afirmativa especifique: ' >
                        <RadioButton className="p-ml-3" value='Ensino público' onChange={(e) => setCotista_op(e.value)} checked={cotista_op === 'Ensino público'} />
                        <label> ensino público </label>
                        <RadioButton className="p-ml-3" value='Cotas raciais' onChange={(e) => setCotista_op(e.value)} checked={cotista_op === 'Cotas raciais'} />
                        <label> cotas raciais </label>
                    </Card>
                </Card>
                <Card subTitle='É PESSOA COM DEFICIÊNCIA?'  >
                    <InputText className='' value={pessoaDeficiente} disabled />
                    <Card subTitle='Em caso de resposta afirmativa especifique:' >
                        <InputText className='' value={deficiencia_op_tipo} disabled />
                    </Card>
                </Card>
                <Card subTitle='FAZ USO DE BEBIDA ALCOÓLICA'>
                    <InputText className='' value={usoBebidaAlcoolica} disabled />
                </Card>
                <Card subTitle='VOCÊ JÁ SOFREU OU SOFRE BULLYING NA ESCOLA?' >
                    <InputText className='' value={bullyng} disabled />
                </Card>
                <Card subTitle='ALGUÉM NA SUA RESIDÊNCIA SOFRE COM ALGUM PROBLEMA DE SAÚDE MENTAL?' >
                    <InputText className='' value={resideComPortadorDeProblemaMental} disabled />
                </Card>
                <Card subTitle='VOCÊ SOFRE DE ALGUM PROBLEMA DE SAÚDE MENTAL?' >
                    <InputText className='' value={discenteSofrimentoMental} disabled />
                    <Card subTitle='Caso tenha escolhido uma opção outro expecifique. Marque o circulo caso tenha diagnóstico:' >
                        <RadioButton className="p-ml-3" value='outro' onChange={(e) => setDiaguinostico_op(e.value)} checked={diaguinostico_op === 'outro'} />
                        <label> outro(diagnóstico) </label>
                        <InputText className='' value={problemaPsifico_op} disabled />
                    </Card>
                </Card>
                <Card subTitle='JÁ FEZ USO DE PSICOTRÓPICO: ANSIEDADE OU DEPRESSÃO?' >
                    <InputText className='' value={psicotropico} disabled />
                </Card>
                <Card subTitle='EM ALGUM MOMENTO DA VIDA MANIFESTOU INTERESSE EM PROCURAR AJUDA PSICÓLOGO?' >
                    <InputText className='' value={interesseAjudaPsicologica} disabled />
                </Card>
                <Card subTitle='VOCÊ É BENEFICIADO COM ALGUM BOLSA OU PROGRAMA DE ASSISTÊNCIA ESTUDANTIL IFPB' >
                    <InputText className='' value={beneficio} disabled />
                    <Card subTitle='Caso tenha escolhido uma opção outro expecifique o beneficio:' >
                        <InputText className='entradaOutro p-mt-3' value={outroBeneficio} disabled />
                    </Card>
                </Card>
                <Card subTitle='O DOMICÍLIO DO GRUPO FAMILIAR É' >
                    <InputText className='entradaOutro p-mt-3' value={domicilio} disabled />
                    <Card subTitle='Informe a quantidade de cômodos:' >
                        <InputText className='' value={quantidadeComodos_op} disabled />
                    </Card>
                </Card>
                <Card subTitle='VOCÊ APRESENTA ALGUMA DOENÇA GRAVE?' >
                    <InputText className='' value={temDoenca} disabled />
                    <Card subTitle='Em caso de resposta afirmativa, especifique:' >
                        <InputText className='' value={doencaDiscente} disabled />
                    </Card>
                </Card>
                <Card subTitle='ALGUÉM DO SEU NÚCLEO FAMILIAR APRESENTA DOENÇA GRAVE?' >
                    <InputText className='' value={possuiFamiliarComDoencaGrave} disabled />
                    <Card subTitle='Em caso de resposta afirmativa, especifique:' >
                        <InputText className='p-mr-3' value={familiarDoente} disabled />
                        <InputText className=' p-mt-3' value={doencaDoFamiliar_op} disabled />
                    </Card>
                </Card>
            </div>
        </div>
    );
}