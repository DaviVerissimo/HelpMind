import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../ToobarDiscente';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';

export default function QuestionarioSocioeconomico() {

    const [campus, setCampus] = useState(null); //campus = singular, campi = plural
    const [campi, setCampi] = useState();
    const [checked, setChecked] = useState();
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState();
    const [curso, setCurso] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [descrisao, setDescrisao] = useState('');
    const [periodo, setPeriodos] = useState('1º');
    const periodos = [
        { name: '1º' },
        { name: '2º' },
        { name: '3º' },
    ];
    const [idade, setIdade] = useState();
    const idades = [
        { name: '13 anos' },
        { name: '14 anos' },
        { name: '15 anos' },
        { name: '16 a 21 anos' },
        { name: 'Mais de 21 anos' },
    ];
    const [cidade, setCidade] = useState('Monteiro');
    const cidades = [ //sugestão usar serviço de terceiro que retorne todas as cidades por estado
        { name: 'Monteiro' },
        { name: 'Outro' },

    ];
    const [value, setValue] = useState();
    const [estadoCivil, setEstadoCivil] = useState();
    const estadosCivis = [
        { name: 'Solteiro (a)' },
        { name: 'Casado (a)' },
        { name: 'Separado (a) / divorciado (a) / desquitado (a)' },
        { name: 'Viúvo (a)' },
        { name: 'União estável' },
    ];
    const [comQuemVive, setComQuemVive] = useState();
    const comQuemVives = [
        { name: 'Sozinho (a)' },
        { name: 'Pais' },
        { name: 'Familiares' },
        { name: 'Mora com companheiro (a)' },
        { name: 'Outros' },
    ];
    const [rendaFamiliar, setRendaFamiliar] = useState();
    const rendasFamiliar = [
        { name: 'R$ 0,00 a 522,50' },
        { name: 'R$ 522,51 a R$ 1.080,00' },
        { name: 'R$ 1.045,01 a R$ 1.567,50' },
        { name: 'Acima de R$ 1.567,51' },
    ];
    const [cor, setCor] = useState();
    const cores = [
        { name: 'Branco (a)' },
        { name: 'Pardo (a)' },
        { name: 'Preto (a)' },
        { name: 'Amarelo (a)' },
    ];
    const [genero, setGenero] = useState();
    const generos = [
        { name: 'mulher' },
        { name: 'homem' },
        { name: 'mulher transexual/transgênero' },
        { name: 'homem transexual/transgênero' },
        { name: 'travesti' },
        { name: 'não binário' },
        { name: 'outros' },
    ];
    const [cota, setCota] = useState();
    const cotas = [
        { name: 'Sim' },
        { name: 'Não' },
    ];
    const [deficiencia, setDeficiencia] = useState();
    const deficiencias = [
        { name: 'Sim' },
        { name: 'Não' },
    ];
    const [deficiente, setDeficiente] = useState();
    const [bebidaAlcoolica, setBebidaAlcoolica] = useState();
    const bebidasAlcoolica = [
        { name: '02 vezes por semana/final de semana' },
        { name: '03 vezes ou mais semana' },
        { name: 'Não faço uso atualmente' },
        { name: 'Nunca bebi' },
    ];
    const [bullyng, setBullyng] = useState();
    const bullyngs = [
        { name: 'Sim, já sofri' },
        { name: 'Não sofri' },
        { name: 'Sim, em outra escola' },
        { name: 'Sim, continuo sofrendo' },
    ];
    const [residenteSofrimentoMental, setResidenteSofrimentoMental] = useState();
    const residentesSofrimentoMental = [
        { name: 'Sim, meus pais' },
        { name: 'Sim, irmãos' },
        { name: 'Sim, parentes' },
        { name: 'Sim, outros,' },
        { name: 'Não' },
    ];
    const [discenteSofrimentoMental, setDiscenteSofrimentoMental] = useState();
    const discenteSofrimentosMental = [
        { name: 'Sim, acredito que ansiedade' },
        { name: 'Sim, acredito que seja depressão' },
        { name: 'Sim, com diagnóstico de ansiedade' },
        { name: 'Sim, com diagnóstico de depressão' },
        { name: 'Sim, outro com diagnóstico' },
        { name: 'Sim, outro mas sem diagnóstico' },
        { name: 'Não' },
    ];
    const [psicotropico, setPsicotropico] = useState();
    const psicotropicos = [
        { name: 'Sim, mas no momento não estou fazendo uso' },
        { name: 'Sim, no momento estou fazendo uso' },
        { name: 'Não' },
    ];
    const [interesseAjudaPsicologica, setInteresseAjudaPsicologica] = useState();
    const interessesAjudaPsicologica = [
        { name: 'Sim, procurei' },
        { name: 'Sim, não procurei' },
        { name: 'Não' },
    ];
    const [beneficio, setBeneficio] = useState();
    const beneficios = [
        { name: 'Sim, Índice de vulnerabilidade social' },
        { name: 'Sim, Auxílio de inclusão digital COVID – aulas remotas' },
        { name: 'Sim, outros programas' },
        { name: 'Não' },
    ];
    const [domicilio, setDomicilio] = useState();
    const domicilios = [
        { name: 'Residência própria' },
        { name: 'Alugada' },
        { name: 'Cedida' },
        { name: 'Financiada' },
    ];
    const [doencaDiscente, setDoencaDiscente] = useState();
    const doencasDiscente = [
        { name: 'Sim' },
        { name: 'Não' },
    ];
    const [doencaParente, setDoencaParente] = useState();
    const doencasParente = [
        { name: 'Sim' },
        { name: 'Não' },
    ];

    var configBotaoCancel = "p-mb-3 p-col-1 p-button-secondary ";
    var configBotaoSalvar = "p-mb-3 p-mt-3 p-col-1";
    var espacamento = '10px';
    var altura = window. screen. height;
    var largura = window. screen. width;
    console.log(altura)
    console.log(largura)
    if (largura < 640){
        configBotaoCancel = "p-mb-3 p-button-secondary "
        configBotaoSalvar = "p-mt-3 ";
        espacamento = '0px';
    }
    console.log(configBotaoCancel)

    useEffect(async () => { 


    }, []);

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

    }, [campus]);

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

    return (
        <div>
            <ToobarDiscente></ToobarDiscente>
            <div>
                <Card className="" >
                    <div className="   align-items-end "  >
                        <Button className={configBotaoCancel}  style={{ right: espacamento }} label="CANCEL" />
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
                <Card subTitle='NOME' >
                    <InputText className='entradaNome' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
                </Card>
                <Card subTitle='MATRICULA' >
                    <InputText className='entradaNome' value={matricula} onChange={(e) => setNome(e.target.value)} placeholder="Digite sua matricula" />
                </Card>
                <Card subTitle='CAMPUS' >
                    <Dropdown value={campus} options={campi} onChange={(e) => setCampus(e.value)} placeholder="Escolha um campus" />
                </Card>
                <Card subTitle='CURSO' >
                    <Dropdown value={curso} options={cursos} onChange={(e) => setCurso(e.value)} placeholder="Escolha um curso" />
                </Card>
                <Card subTitle='PERIODO' >
                    <Dropdown optionLabel="name" value={periodo} options={periodos} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha um periodo" />
                </Card>
                <Card subTitle='IDADE' >
                    <Dropdown optionLabel="name" value={idade} options={idades} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma idade" />
                </Card>
                <Card subTitle='CIDADE' >
                    <Dropdown className='p-mb-3' optionLabel="name" value={cidade} options={cidades} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma cidade" />
                    <Card subTitle='Escolha a zona: ' >
                        <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                        <label> Zona urbana</label>
                        <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                        <label> Zona rural</label>
                    </Card>
                </Card>
                <Card subTitle='ESTADO CIVIL' >
                    <Dropdown optionLabel="name" value={estadoCivil} options={estadosCivis} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma idade" />
                </Card>
                <Card subTitle='COM QUEM VIVE' >
                    <Dropdown optionLabel="name" value={comQuemVive} options={comQuemVives} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha com quem vive" />
                </Card>
                <Card subTitle='RENDA FAMILIAR' >
                    <Dropdown optionLabel="name" value={rendaFamiliar} options={rendasFamiliar} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma renda" />
                </Card>
                <Card subTitle='COR' >
                    <Dropdown optionLabel="name" value={cor} options={cores} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha sua cor" />
                </Card>
                <Card subTitle='GÊNERO' >
                    <Dropdown optionLabel="name" value={genero} options={generos} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha seu gênero" />
                </Card>
                <Card subTitle='OPTANTE/ INGRESSANTE POR VAGAS DE COTAS?' >
                    <Dropdown className='p-mb-3' optionLabel="name" value={cota} options={cotas} onChange={(e) => setPeriodos(e.target.value)} placeholder="Optou pelas cotas?" />
                    <Card subTitle='Em caso de resposta afirmativa especifique: ' >
                        <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                        <label> ensino público </label>
                        <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                        <label> cotas raciais </label>
                    </Card>
                </Card>
                <Card subTitle='É PESSOA COM DEFICIÊNCIA?'  >
                    <Dropdown className='p-mb-3' optionLabel="name" value={deficiencia} options={deficiencias} onChange={(e) => setPeriodos(e.target.value)} placeholder="Possui algum tipo de deficiência:" />
                    <Card subTitle='Em caso de resposta afirmativa especifique:' >
                        <InputText className='entradadeficiente' value={deficiente} onChange={(e) => setNome(e.target.value)} placeholder="Digite a deficiência" />
                    </Card>
                </Card>
                <Card subTitle='FAZ USO DE BEBIDA ALCOÓLICA'>
                    <Dropdown className='' optionLabel="name" value={bebidaAlcoolica} options={bebidasAlcoolica} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='VOCÊ JÁ SOFREU OU SOFRE BULLYING NA ESCOLA?' >
                    <Dropdown className='' optionLabel="name" value={bullyng} options={bullyngs} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='ALGUÉM NA SUA RESIDÊNCIA SOFRE COM ALGUM PROBLEMA DE SAÚDE MENTAL?' >
                    <Dropdown className='' optionLabel="name" value={residenteSofrimentoMental} options={residentesSofrimentoMental} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='VOCÊ SOFRE DE ALGUM PROBLEMA DE SAÚDE MENTAL?' >
                    <Dropdown className='p-mb-3' optionLabel="name" value={discenteSofrimentoMental} options={discenteSofrimentosMental} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                    <Card subTitle='Caso tenha escolhido uma opção outro expecifique. Marque o circulo caso tenha diagnóstico:' >
                        <RadioButton className="" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                        <label> outro(diagnóstico) </label>
                        <InputText className='entradaOutro p-mt-3' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o seu problema" />
                    </Card>
                </Card>
                <Card subTitle='JÁ FEZ USO DE PSICOTRÓPICO: ANSIEDADE OU DEPRESSÃO?' >
                    <Dropdown className='' optionLabel="name" value={psicotropico} options={psicotropicos} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='EM ALGUM MOMENTO DA VIDA MANIFESTOU INTERESSE EM PROCURAR AJUDA PSICÓLOGO?' >
                    <Dropdown className='' optionLabel="name" value={interesseAjudaPsicologica} options={interessesAjudaPsicologica} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                </Card>
                <Card subTitle='VOCÊ É BENEFICIADO COM ALGUM BOLSA OU PROGRAMA DE ASSISTÊNCIA ESTUDANTIL IFPB' >
                    <Dropdown className='p-mb-3' optionLabel="name" value={beneficio} options={beneficios} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                    <Card subTitle='Caso tenha escolhido uma opção outro expecifique o beneficio:' >
                        <InputText className='entradaOutro p-mt-3' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o beneficio" />
                    </Card>
                </Card>
                <Card subTitle='O DOMICÍLIO DO GRUPO FAMILIAR É' >
                    <Dropdown className='p-mb-3' optionLabel="name" value={domicilio} options={domicilios} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                    <Card subTitle='Informe a quantidade de cômodos:' >
                        <InputText className='entradaOutro p-col-1' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Cômodos" />
                    </Card>
                </Card>
                <Card subTitle='VOCÊ APRESENTA ALGUMA DOENÇA GRAVE?' >
                    <Dropdown className='p-mb-3' optionLabel="name" value={doencaDiscente} options={doencasDiscente} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                    <Card subTitle='Em caso de resposta afirmativa, especifique:' >
                        <InputText className='entradaOutro ' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Sua doença" />
                    </Card>
                </Card>
                <Card subTitle='ALGUÉM DO SEU NÚCLEO FAMILIAR APRESENTA DOENÇA GRAVE?' >
                    <Dropdown className='p-mb-3' optionLabel="name" value={doencaParente} options={doencasParente} onChange={(e) => setPeriodos(e.target.value)} placeholder="Escolha uma opção" />
                    <Card subTitle='Em caso de resposta afirmativa, especifique:' >
                        <InputText className='entradaOutro ' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu parente" />
                        <InputText className='entradaOutro p-mt-3' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="A doença do seu parente" />
                    </Card>
                </Card>
            </div>
        </div>
    );
}