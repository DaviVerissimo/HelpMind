import { Card } from 'primereact/card';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../ToobarDiscente';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';

export default function QuestionarioSocioeconomico() {
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
    const [email, setEmail] = useState('silviaantony@gmail.com');
    const [campusDoDiscente, setCampusDoDiscente] = useState(null);
    const [campi, setCampi] = useState(null);
    const [checked, setChecked] = useState();
    const [nome, setNome] = useState(null);
    const [matricula, setMatricula] = useState(null);
    const [curso, setCurso] = useState(null);
    const [cursos, setCursos] = useState([]);
    const [periodo, setPeriodo] = useState(null);
    const periodos = [
        { name: '1º' },
        { name: '2º' },
        { name: '3º' },
    ];
    const [idade, setIdade] = useState(null);
    const idades = [
        { name: '13 anos' },
        { name: '14 anos' },
        { name: '15 anos' },
        { name: '16 a 21 anos' },
        { name: 'Mais de 21 anos' },
    ];
    const [cidade, setCidade] = useState(null);
    const cidades = [ //sugestão usar serviço de terceiro que retorne todas as cidades por estado
        { name: 'Monteiro' },
        { name: 'Outro' },

    ];
    const [zonaHurbanaRural_op, setZonaHurbanaRural_op] = useState(null);
    const [estadoCivil, setEstadoCivil] = useState(null);
    const estadosCivis = [
        { name: 'Solteiro (a)' },
        { name: 'Casado (a)' },
        { name: 'Separado (a) / divorciado (a) / desquitado (a)' },
        { name: 'Viúvo (a)' },
        { name: 'União estável' },
    ];
    const [comQuemVive, setComQuemVive] = useState(null);
    const comQuemVives = [
        { name: 'Sozinho (a)' },
        { name: 'Pais' },
        { name: 'Familiares' },
        { name: 'Mora com companheiro (a)' },
        { name: 'Outros' },
    ];
    const [rendaFamiliar, setRendaFamiliar] = useState(null);
    const rendasFamiliar = [
        { name: 'R$ 0,00 a 522,50' },
        { name: 'R$ 522,51 a R$ 1.080,00' },
        { name: 'R$ 1.045,01 a R$ 1.567,50' },
        { name: 'Acima de R$ 1.567,51' },
    ];
    const [cor, setCor] = useState(null);
    const cores = [
        { name: 'Branco (a)' },
        { name: 'Pardo (a)' },
        { name: 'Preto (a)' },
        { name: 'Amarelo (a)' },
    ];
    const [genero, setGenero] = useState(null);
    const generos = [
        { name: 'mulher' },
        { name: 'homem' },
        { name: 'mulher transexual/transgênero' },
        { name: 'homem transexual/transgênero' },
        { name: 'travesti' },
        { name: 'não binário' },
        { name: 'outros' },
    ];
    const [ingressantePorVagaDeCota, setIngressantePorVagaDeCota] = useState(null);
    const cotas = [
        { name: 'Sim' },
        { name: 'Não' },
    ];
    const [pessoaDeficiente, setPessoaDeficiente] = useState(null);
    const deficiencias = [
        { name: 'Sim' },
        { name: 'Não' },
    ];
    const [deficiencia_op_tipo, setDeficiencia_op_tipo] = useState(null);
    const [usoBebidaAlcoolica, setUsoBebidaAlcoolica] = useState(null);
    const bebidasAlcoolica = [
        { name: '02 vezes por semana/final de semana' },
        { name: '03 vezes ou mais semana' },
        { name: 'Não faço uso atualmente' },
        { name: 'Nunca bebi' },
    ];
    const [bullyng, setBullyng] = useState(null);
    const bullyngs = [
        { name: 'Sim, já sofri' },
        { name: 'Não sofri' },
        { name: 'Sim, em outra escola' },
        { name: 'Sim, continuo sofrendo' },
    ];
    const [resideComPortadorDeProblemaMental, setResideComPortadorDeProblemaMental] = useState(null);
    const residentesSofrimentoMental = [
        { name: 'Sim, meus pais' },
        { name: 'Sim, irmãos' },
        { name: 'Sim, parentes' },
        { name: 'Sim, outros,' },
        { name: 'Não' },
    ];
    const [discenteSofrimentoMental, setDiscenteSofrimentoMental] = useState(null);
    const discenteSofrimentosMental = [
        { name: 'Sim, acredito que ansiedade' },
        { name: 'Sim, acredito que seja depressão' },
        { name: 'Sim, com diagnóstico de ansiedade' },
        { name: 'Sim, com diagnóstico de depressão' },
        { name: 'Sim, outro com diagnóstico' },
        { name: 'Sim, outro mas sem diagnóstico' },
        { name: 'Não' },
    ];
    const [psicotropico, setPsicotropico] = useState(null);
    const psicotropicos = [
        { name: 'Sim, mas no momento não estou fazendo uso' },
        { name: 'Sim, no momento estou fazendo uso' },
        { name: 'Não' },
    ];
    const [interesseAjudaPsicologica, setInteresseAjudaPsicologica] = useState(null);
    const interessesAjudaPsicologica = [
        { name: 'Sim, procurei' },
        { name: 'Sim, não procurei' },
        { name: 'Não' },
    ];
    const [beneficio, setBeneficio] = useState(null);
    const beneficios = [
        { name: 'Sim, Índice de vulnerabilidade social' },
        { name: 'Sim, Auxílio de inclusão digital COVID – aulas remotas' },
        { name: 'Sim, outros programas' },
        { name: 'Não' },
    ];
    const [domicilio, setDomicilio] = useState(null);
    const domicilios = [
        { name: 'Residência própria' },
        { name: 'Alugada' },
        { name: 'Cedida' },
        { name: 'Financiada' },
    ];
    const [doencaDiscente, setDoencaDiscente] = useState(null);
    const DiscenteDoencas = [
        { name: 'Sim' },
        { name: 'Não' },
    ];
    const doencasParente = [
        { name: 'Sim' },
        { name: 'Não' },
    ];
    const [doencaDoFamiliar_op, setDoencaDoFamiliar_op] = useState(null);
    const [problemaPsifico_op, setProblemaPsifico_op] = useState(null);
    const [outroBeneficio, setOutroBeneficio] = useState(null);
    const [quantidadeComodos_op, setQuantidadeComodos_op] = useState(null);
    const [temDoenca, setTemDoenca] = useState(null);
    const [possuiFamiliarComDoencaGrave, setPossuiFamiliarComDoencaGrave] = useState(null);
    const [familiarDoente, setFamiliarDoente] = useState(null);
    const [diaguinostico_op, setDiaguinostico_op] = useState(null);
    const [cotista_op, setCotista_op] = useState(null);

    const [nomeObrigatorio, setNomeObrigatorio] = useState();
    const [cursoObrigatorio, setCursoObrigatorio] = useState();
    const [campusObrigatorio, setCampusObrigatorio] = useState();
    const [periodoObrigatorio, setPeriodoObrigatorio] = useState();
    const [matriculaObrigatoria, setMatriculaObrigatoria] = useState();
    const [idadeObrigatoria, setIdadeObrigatoria] = useState();
    const [cidadeObrigatoria, setCidadeObrigatoria] = useState();
    const [estadoCivilObrigatorio, setEstadoCivilObrigatoria] = useState();
    const [comQuemViveObrigatoria, setComQuemViveObrigatoria] = useState();
    const [rendaFamiliarObrigatoria, setRendaFamiliarObrigatoria] = useState();
    const [corObrigatoria, setCorObrigatoria] = useState();
    const [generoObrigatoria, setGeneroObrigatoria] = useState();
    const [ingressantePorVagaDeCotaObrigatoria, setIngressantePorVagaDeCotaObrigatoria] = useState();
    const [pessoaDeficienteObrigatoria, setPessoaDeficienteObrigatoria] = useState();
    const [usoBebidaAlcoolicaObrigatoria, setUsoBebidaAlcoolicaObrigatoria] = useState();
    const [bullyngObrigatoria, setbullyngObrigatoria] = useState();
    const [resideComPortadorDeProblemaMentalObrigatoria, setResideComPortadorDeProblemaMentalObrigatoria] = useState();
    const [discenteSofrimentoMentalObrigatoria, setDiscenteSofrimentoMentalObrigatoria] = useState();
    const [psicotropicoObrigatoria, setPsicotropicoObrigatoria] = useState();
    const [interesseAjudaPsicologicaObrigatoria, setInteresseAjudaPsicologicaObrigatoria] = useState();
    const [beneficioObrigatoria, setBeneficioObrigatoria] = useState();
    const [domicilioObrigatoria, setDomicilioObrigatoria] = useState();
    const [quantidadeComodos_opObrigatoria, setQuantidadeComodos_opObrigatoria] = useState();
    const [temDoencaObrigatoria, setTemDoencaObrigatoria] = useState();
    const [possuiFamiliarComDoencaGraveObrigatoria, setPossuiFamiliarComDoencaGraveObrigatoria] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');

    var configBotaoCancel = "p-mb-3 p-col-1 p-button-secondary ";
    var configBotaoSalvar = "p-mb-3 p-mt-3 p-col-1";
    var espacamento = '10px';
    var altura = window.screen.height;
    var largura = window.screen.width;

    if (largura < 640) {
        configBotaoCancel = "p-mb-3 p-button-secondary "
        configBotaoSalvar = "p-mb-3"
    }

    useEffect(async () => { //cursos
        var lista = [];
        const cursosIFPB = "http://localhost:8080/curso/listarCursosPorCampus";
        axios.get(cursosIFPB)
            .then(Response => {
                var dataCurso = Response.data;
                dataCurso.forEach(item => {
                    lista.push(item);
                });

                lista = lista.map(
                    (elementoCurso) => {
                        return {
                            label: elementoCurso,
                            value: elementoCurso
                        }
                    }
                ).sort((a, b) => a.label.localeCompare(b.label));

                setCursos(lista);
            })
            .catch(error => console.log(error))

    }, [campusDoDiscente]);

    useEffect(async () => { //campus
        var lista = [];
        const campus = "http://localhost:8080/curso/listarCampus";
        axios.get(campus)
            .then(Response => {
                var dataCampus = Response.data;
                dataCampus.forEach(item => {
                    lista.push(item);
                });

                lista = lista.map(
                    (elementoCampus) => {
                        return {
                            label: elementoCampus,
                            value: elementoCampus
                        }
                    }
                ).sort((a, b) => a.label.localeCompare(b.label));
                setCampi(lista);

            })
            .catch(error => console.log(error))

    }, []);

    function validar() {
        var valido = true;

        if (nome == null || nome == '') {
            setNomeObrigatorio(invalid);
            valido = false;
        }

        if (curso == null || curso == '') {
            setCursoObrigatorio(invalid);
            valido = false;
        }

        if (campusDoDiscente == null || campusDoDiscente  == '') {
            setCampusObrigatorio(invalid);
            valido = false;
        }

        if (periodo == null) {
            setPeriodoObrigatorio(invalid);
            valido = false;
        }

        if (matricula == null  || matricula  == '') {
            setMatriculaObrigatoria(invalid);
            valido = false;
        }

        if (idade == null || idade  == '') {
            setIdadeObrigatoria(invalid);
            valido = false;
        }

        if (cidade == null  || cidade  == '') {
            setCidadeObrigatoria(invalid);
            valido = false;
        }

        if (zonaHurbanaRural_op == null) {
            setCidadeObrigatoria(invalid);
            valido = false;
        }

        if (estadoCivil == null) {
            setEstadoCivilObrigatoria(invalid);
            valido = false;
        }

        if (comQuemVive == null) {
            setComQuemViveObrigatoria(invalid);
            valido = false;
        }

        if (rendaFamiliar == null) {
            setRendaFamiliarObrigatoria(invalid);
            valido = false;
        }

        if (cor == null) {
            setCorObrigatoria(invalid);
            valido = false;
        }

        if (genero == null) {
            setGeneroObrigatoria(invalid);
            valido = false;
        }

        if (ingressantePorVagaDeCota == null) {
            setIngressantePorVagaDeCotaObrigatoria(invalid);
            valido = false;
        }

        if (pessoaDeficiente == null) {
            setPessoaDeficienteObrigatoria(invalid);
            valido = false;
        }

        if (usoBebidaAlcoolica == null) {
            setUsoBebidaAlcoolicaObrigatoria(invalid);
            valido = false;
        }

        if (bullyng == null) {
            setbullyngObrigatoria(invalid);
            valido = false;
        }

        if (resideComPortadorDeProblemaMental == null) {
            setResideComPortadorDeProblemaMentalObrigatoria(invalid);
            valido = false;
        }

        if (discenteSofrimentoMental == null) {
            setDiscenteSofrimentoMentalObrigatoria(invalid);
            valido = false;
        }

        if (psicotropico == null) {
            setPsicotropicoObrigatoria(invalid);
            valido = false;
        }

        if (interesseAjudaPsicologica == null) {
            setInteresseAjudaPsicologicaObrigatoria(invalid);
            valido = false;
        }

        if (beneficio == null) {
            setBeneficioObrigatoria(invalid);
            valido = false;
        }

        if (beneficio == null) {
            setBeneficioObrigatoria(invalid);
            valido = false;
        }

        if (domicilio == null) {
            setDomicilioObrigatoria(invalid);
            valido = false;
        }

        if (quantidadeComodos_op == null || quantidadeComodos_op  == '') {
            setQuantidadeComodos_opObrigatoria(invalid);
            valido = false;
        }

        if (temDoenca == null) {
            setTemDoencaObrigatoria(invalid);
            valido = false;
        }

        if (possuiFamiliarComDoencaGrave == null) {
            setPossuiFamiliarComDoencaGraveObrigatoria(invalid);
            valido = false;
        }

        return valido;
    }

    async function submeter() {

        if (checked === true && validar()) {

            const novoQuestionario = {
                "email": email,
                "nome": nome,
                "campusDoDiscente": campusDoDiscente,
                "matricula": matricula,
                "curso": curso,
                "periodo": periodo.name,
                "idade": idade.name,
                "cidade": cidade.name,
                "zonaHurbanaRural_op": zonaHurbanaRural_op,
                "estadoCivil": estadoCivil.name,
                "comQuemVive": comQuemVive.name,
                "rendaFamiliar": rendaFamiliar.name,
                "cor": cor.name,
                "genero": genero.name,
                "ingressantePorVagaDeCota": ingressantePorVagaDeCota.name,
                "cotista_op": cotista_op,
                "pessoaDeficiente": pessoaDeficiente.name,
                "deficiencia_op_tipo": deficiencia_op_tipo,
                "usoBebidaAlcoolica": usoBebidaAlcoolica.name,
                "bullyng": bullyng.name,
                "resideComPortadorDeProblemaMental": resideComPortadorDeProblemaMental.name,
                "discenteSofrimentoMental": discenteSofrimentoMental.name,
                "diaguinostico_op": diaguinostico_op,
                "problemaPsifico_op": problemaPsifico_op,
                "psicotropico": psicotropico.name,
                "interesseAjudaPsicologica": interesseAjudaPsicologica.name,
                "beneficio": beneficio.name,
                "beneficio_op": outroBeneficio,
                "domicilio": domicilio.name,
                "quantidadeComodos_op": quantidadeComodos_op,
                "doencaGrave": temDoenca.name,
                "doencaGraveDiscente_op": doencaDiscente,
                "possuiFamiliarComDoencaGrave": possuiFamiliarComDoencaGrave.name,
                "familiarDoente": familiarDoente,
                "doencaDoFamiliar_op": doencaDoFamiliar_op

            }

            const headers = {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }

            axios.post("http://localhost:8080/discente/salvarDiscenteComBaseQuestionarioSoxioeconomico", novoQuestionario, headers)
                .then(Response => { })
                .catch(error => console.log(error))

            showSuccess();
        }
        else { showError() }

    }

    return (
        <div>
            <ToobarDiscente></ToobarDiscente>
            <div>
                <Toast ref={toast} />
                <Card className="" >
                    <div className="   align-items-end "  >
                        <Button className={configBotaoCancel} style={{ right: espacamento }} label="CANCEL" />
                        <Button className={configBotaoSalvar} label="SALVAR" onClick={submeter} />
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
                <Card subTitle='NOME' >
                    <InputText className={nomeObrigatorio} value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
                </Card>
                <Card subTitle='MATRICULA' >
                    <InputText className={matriculaObrigatoria} value={matricula} onChange={(e) => setMatricula(e.target.value)} placeholder="Digite sua matricula" />
                </Card>
                <Card subTitle='CAMPUS' >
                    <Dropdown className={campusObrigatorio} value={campusDoDiscente} options={campi} onChange={(e) => setCampusDoDiscente(e.value)} placeholder="Escolha um campus" />
                </Card>
                <Card subTitle='CURSO' >
                    <Dropdown className={cursoObrigatorio} value={curso} options={cursos} onChange={(e) => setCurso(e.value)} placeholder="Escolha um curso" />
                </Card>
                <Card subTitle='PERIODO' >
                    <Dropdown className={periodoObrigatorio} optionLabel="name" value={periodo} options={periodos} onChange={(e) => setPeriodo(e.target.value)} placeholder="Escolha um periodo" />
                </Card>
                <Card subTitle='IDADE' >
                    <Dropdown className={idadeObrigatoria} optionLabel="name" value={idade} options={idades} onChange={(e) => setIdade(e.target.value)} placeholder="Escolha uma idade" />
                </Card>
                <Card subTitle='CIDADE' >
                    <Dropdown className={cidadeObrigatoria} optionLabel="name" value={cidade} options={cidades} onChange={(e) => setCidade(e.target.value)} placeholder="Escolha uma cidade" />
                    <Card className='p-mt-3' subTitle='Escolha a zona: ' >
                        <RadioButton className="p-ml-3" value='Zona urbana' onChange={(e) => setZonaHurbanaRural_op(e.value)} checked={zonaHurbanaRural_op === 'Zona urbana'} />
                        <label> Zona urbana</label>
                        <RadioButton className="p-ml-3" value='' name="city" onChange={(e) => setZonaHurbanaRural_op(e.value)} checked={zonaHurbanaRural_op === 'Zona rural'} />
                        <label> Zona rural</label>
                    </Card>
                </Card>
                <Card subTitle='ESTADO CIVIL' >
                    <Dropdown className={estadoCivilObrigatorio} optionLabel="name" value={estadoCivil} options={estadosCivis} onChange={(e) => setEstadoCivil(e.target.value)} placeholder="Escolha seu estado civil" />
                </Card>
                <Card subTitle='COM QUEM VIVE' >
                    <Dropdown className={comQuemViveObrigatoria} optionLabel="name" value={comQuemVive} options={comQuemVives} onChange={(e) => setComQuemVive(e.target.value)} placeholder="Escolha com quem vive" />
                </Card>
                <Card subTitle='RENDA FAMILIAR' >
                    <Dropdown className={rendaFamiliarObrigatoria} optionLabel="name" value={rendaFamiliar} options={rendasFamiliar} onChange={(e) => setRendaFamiliar(e.target.value)} placeholder="Escolha uma renda" />
                </Card>
                <Card subTitle='COR' >
                    <Dropdown className={corObrigatoria} optionLabel="name" value={cor} options={cores} onChange={(e) => setCor(e.target.value)} placeholder="Escolha sua cor" />
                </Card>
                <Card subTitle='GÊNERO' >
                    <Dropdown className={generoObrigatoria} optionLabel="name" value={genero} options={generos} onChange={(e) => setGenero(e.target.value)} placeholder="Escolha seu gênero" />
                </Card>
                <Card subTitle='OPTANTE/ INGRESSANTE POR VAGAS DE COTAS?' >
                    <Dropdown className={ingressantePorVagaDeCotaObrigatoria} optionLabel="name" value={ingressantePorVagaDeCota} options={cotas} onChange={(e) => setIngressantePorVagaDeCota(e.target.value)} placeholder="Optou pelas cotas?" />
                    <Card className='p-mt-3' subTitle='Em caso de resposta afirmativa especifique: ' >
                        <RadioButton className="p-ml-3" value='Ensino público' onChange={(e) => setCotista_op(e.value)} checked={cotista_op === 'Ensino público'} />
                        <label> ensino público </label>
                        <RadioButton className="p-ml-3" value='Cotas raciais' onChange={(e) => setCotista_op(e.value)} checked={cotista_op === 'Cotas raciais'} />
                        <label> cotas raciais </label>
                    </Card>
                </Card>
                <Card subTitle='É PESSOA COM DEFICIÊNCIA?'  >
                    <Dropdown className={pessoaDeficienteObrigatoria} optionLabel="name" value={pessoaDeficiente} options={deficiencias} onChange={(e) => setPessoaDeficiente(e.target.value)} placeholder="Possui algum tipo de deficiência:" />
                    <Card className='p-mt-3' subTitle='Em caso de resposta afirmativa especifique:' >
                        <InputText className='' value={deficiencia_op_tipo} onChange={(e) => setDeficiencia_op_tipo(e.target.value)} placeholder="Digite a deficiência" />
                    </Card>
                </Card>
                <Card subTitle='FAZ USO DE BEBIDA ALCOÓLICA'>
                    <Dropdown className={usoBebidaAlcoolicaObrigatoria} optionLabel="name" value={usoBebidaAlcoolica} options={bebidasAlcoolica} onChange={(e) => setUsoBebidaAlcoolica(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='VOCÊ JÁ SOFREU OU SOFRE BULLYING NA ESCOLA?' >
                    <Dropdown className={bullyngObrigatoria} optionLabel="name" value={bullyng} options={bullyngs} onChange={(e) => setBullyng(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='ALGUÉM NA SUA RESIDÊNCIA SOFRE COM ALGUM PROBLEMA DE SAÚDE MENTAL?' >
                    <Dropdown className={resideComPortadorDeProblemaMentalObrigatoria} optionLabel="name" value={resideComPortadorDeProblemaMental} options={residentesSofrimentoMental} onChange={(e) => setResideComPortadorDeProblemaMental(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='VOCÊ SOFRE DE ALGUM PROBLEMA DE SAÚDE MENTAL?' >
                    <Dropdown className={discenteSofrimentoMentalObrigatoria} optionLabel="name" value={discenteSofrimentoMental} options={discenteSofrimentosMental} onChange={(e) => setDiscenteSofrimentoMental(e.target.value)} placeholder="Escolha uma opção" />
                    <Card className='p-mt-3' subTitle='Caso tenha escolhido uma opção outro expecifique. Marque o circulo caso tenha diagnóstico:' >
                        <RadioButton className="p-ml-3" value='outro' onChange={(e) => setDiaguinostico_op(e.value)} checked={diaguinostico_op === 'outro'} />
                        <label> outro(diagnóstico) </label>
                        <InputText className='' value={problemaPsifico_op} onChange={(e) => setProblemaPsifico_op(e.target.value)} placeholder="Digite o seu problema" />
                    </Card>
                </Card>
                <Card subTitle='JÁ FEZ USO DE PSICOTRÓPICO: ANSIEDADE OU DEPRESSÃO?' >
                    <Dropdown className={psicotropicoObrigatoria} optionLabel="name" value={psicotropico} options={psicotropicos} onChange={(e) => setPsicotropico(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='EM ALGUM MOMENTO DA VIDA MANIFESTOU INTERESSE EM PROCURAR AJUDA PSICÓLOGO?' >
                    <Dropdown className={interesseAjudaPsicologicaObrigatoria} optionLabel="name" value={interesseAjudaPsicologica} options={interessesAjudaPsicologica} onChange={(e) => setInteresseAjudaPsicologica(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='VOCÊ É BENEFICIADO COM ALGUM BOLSA OU PROGRAMA DE ASSISTÊNCIA ESTUDANTIL IFPB' >
                    <Dropdown className={beneficioObrigatoria} optionLabel="name" value={beneficio} options={beneficios} onChange={(e) => setBeneficio(e.target.value)} placeholder="Escolha uma opção" />
                    <Card className='p-mt-3' subTitle='Caso tenha escolhido uma opção outro expecifique o beneficio:' >
                        <InputText className='entradaOutro p-mt-3' value={outroBeneficio} onChange={(e) => setOutroBeneficio(e.target.value)} placeholder="Digite o beneficio" />
                    </Card>
                </Card>
                <Card subTitle='O DOMICÍLIO DO GRUPO FAMILIAR É' >
                    <Dropdown className={domicilioObrigatoria} optionLabel="name" value={domicilio} options={domicilios} onChange={(e) => setDomicilio(e.target.value)} placeholder="Escolha uma opção" />
                    <Card className='p-mt-3' subTitle='Informe a quantidade de cômodos:' >
                        <InputText className={quantidadeComodos_opObrigatoria} value={quantidadeComodos_op} onChange={(e) => setQuantidadeComodos_op(e.target.value)} placeholder="Cômodos" />
                    </Card>
                </Card>
                <Card subTitle='VOCÊ APRESENTA ALGUMA DOENÇA GRAVE?' >
                    <Dropdown className={temDoencaObrigatoria} optionLabel="name" value={temDoenca} options={DiscenteDoencas} onChange={(e) => setTemDoenca(e.target.value)} placeholder="Escolha uma opção" />
                    <Card className='p-mt-3' subTitle='Em caso de resposta afirmativa, especifique:' >
                        <InputText className='' value={doencaDiscente} onChange={(e) => setDoencaDiscente(e.target.value)} placeholder="Sua doença" />
                    </Card>
                </Card>
                <Card subTitle='ALGUÉM DO SEU NÚCLEO FAMILIAR APRESENTA DOENÇA GRAVE?' >
                    <Dropdown className={possuiFamiliarComDoencaGraveObrigatoria} optionLabel="name" value={possuiFamiliarComDoencaGrave} options={doencasParente} onChange={(e) => setPossuiFamiliarComDoencaGrave(e.target.value)} placeholder="Escolha uma opção" />
                    <Card className='p-mt-3' subTitle='Em caso de resposta afirmativa, especifique:' >
                        <InputText className='p-mr-3' value={familiarDoente} onChange={(e) => setFamiliarDoente(e.target.value)} placeholder="Seu parente" />
                        <InputText className=' p-mt-3' value={doencaDoFamiliar_op} onChange={(e) => setDoencaDoFamiliar_op(e.target.value)} placeholder="A doença do seu parente" />
                    </Card>
                </Card>
            </div>
        </div>
    );
}