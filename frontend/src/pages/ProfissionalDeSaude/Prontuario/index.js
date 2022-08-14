import React, { useRef } from 'react';
import './styles.css'
import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import { Toast } from 'primereact/toast';

export default function Prontuario() {

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

    const [campus, setCampus] = useState(null); //campus = singular, campi = plural
    const [campi, setCampi] = useState();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [cursos, setCursos] = useState([]);
    const [parescer, setParescer] = useState('');
    const [periodo, setPeriodos] = useState('1º');
    const periodos = [
        { name: '1º' },
        { name: '2º' },
        { name: '3º' },
        { name: 'Outro' },
        { name: 'Superior' },
    ];
    const [acaoObrigatorio, setAcaoObrigatorio] = useState('NÂO');
    const destino = [
        { name: 'Psiclogo(a) do campus' },
        { name: 'Rede externa' },
    ];

    var configBotaoCancel = "p-mb-3 p-col-1 p-button-secondary ";
    var configBotaoSalvar = "p-mb-3 p-mt-3 p-col-1";
    var espacamento = '10px';
    var largura = window.screen.width;
    if (largura < 640) {
        configBotaoCancel = "p-mb-3 p-button-secondary "
        configBotaoSalvar = "p-mb-3 ";
    }

    const [nomeObrigatorio, setNomeObrigatorio] = useState();
    const [cursoObrigatorio, setCursoObrigatorio] = useState();
    const [campusObrigatorio, setCampusObrigatorio] = useState();
    const [periodoObrigatorio, setPeriodoObrigatorio] = useState();
    const [acaoRealizadaObrigatorio, setSuicidioObrigatorio] = useState();
    const [parecerObrigatoria, setDescrisaoObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');

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

    useEffect(async () => { //enviar campus para o servidor
        const headers = {
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        if (!nome == null) {
            axios.post("http://localhost:8080/curso/definirCampus", campus, headers)
                .then(Response => { })
                .catch(error => console.log(error))
        }


    }, [campus]);

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

        if (campus == null || campus == '') {
            setCampusObrigatorio(invalid);
            valido = false;
        }

        if (periodo.name == null) {
            setPeriodoObrigatorio(invalid);
            valido = false;
        }

        if (acaoObrigatorio.name == null) {
            setSuicidioObrigatorio(invalid);
            valido = false;
        }

        if (parescer == '') {
            setDescrisaoObrigatorio(invalid);
            valido = false;
        }

        return valido;
    }

    async function submeter() {

        if (validar()) {
            // const idReportante = localStorage.getItem('id');
            const novoProntuario =
            {
                "discente": nome,
                "curso": curso,
                "campus": campus,
                "periodo": periodo.name,
                "parescerProfissionalSaude": parescer,
                "acaoRealizada": acaoObrigatorio.name,
                // "idReportante": idReportante

            }
            const headers = {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }

            axios.post("http://localhost:8080/prontuario/salvarProntuario", novoProntuario, headers)
                .then(Response => { })
                .catch(error => console.log(error))
            showSuccess();
        }
        else {
            showError();
        }

    }

    return (
        <div> <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <Toast ref={toast} />
            <div >
                <Card title="PRONTUARIO DO DISCENTE"></Card>

                <Card className="" >
                    <div>
                        <Button className={configBotaoCancel} style={{ right: espacamento }} label="CANCEL" />
                        <Button className={configBotaoSalvar} label="SALVAR" onClick={submeter} />
                    </div>
                </Card>

                <Card >
                    <Card subTitle='DISCENTE' >
                        <InputText className={nomeObrigatorio} value={nome} onChange={(e) => setNome(e.target.value)} />
                    </Card>
                    <Card subTitle='CAMPUS' >
                        <Dropdown className={campusObrigatorio} value={campus} options={campi} onChange={(e) => setCampus(e.value)} placeholder="Escolha um campus" />
                    </Card>
                    <Card subTitle='CURSO' >
                        <Dropdown className={cursoObrigatorio} value={curso} options={cursos} onChange={(e) => setCurso(e.value)} placeholder="Escolha um curso" />
                    </Card>
                    <Card subTitle='ANO / PERÍODO' >
                        <Dropdown className={periodoObrigatorio} optionLabel="name" value={periodo} options={periodos} onChange={(e) => setPeriodos(e.target.value)} placeholder="Digite o parescer quanto ao discente" />
                    </Card>
                    <Card subTitle='PARESCER DO PROFISSIONAL DE SAÚDE' >
                        <InputTextarea className={parecerObrigatoria} rows={5} cols={30} value={parescer} onChange={(e) => setParescer(e.target.value)} />
                    </Card>
                    <Card subTitle='AÇÃO REALIZADA' >
                        <Dropdown className={acaoRealizadaObrigatorio} optionLabel="name" value={acaoObrigatorio} options={destino} onChange={(e) => setAcaoObrigatorio(e.target.value)} placeholder="Escolha uma ação" />
                    </Card>
                </Card>

            </div>
        </div>

    );
}