import React from "react";
import './styles.css'
import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import ToobarDiscente from "../ToobarDiscente";

export default function Reporte() {

    const [campus, setCampus] = useState(null); //campus = singular, campi = plural
    const [campi, setCampi] = useState();
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [descrisao, setDescrisao] = useState('');
    const [periodo, setPeriodos] = useState('1º');
    const periodos = [
        { name: '1º' },
        { name: '2º' },
        { name: '3º' },
    ];
    const [suicidio, setSuicidio] = useState('NÂO');
    const tentouSuicidio = [
        { name: 'SIM' },
        { name: 'NÂO' },
    ];

    var configBotaoCancel = "p-mb-3 p-col-1 p-button-secondary ";
    var configBotaoSalvar = "p-mb-3 p-mt-3 p-col-1";
    var espacamento = '10px';
    var largura = window. screen. width;
    if (largura < 640){
        configBotaoCancel = "p-mb-3 p-button-secondary "
        configBotaoSalvar = "p-mb-3 ";
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

        axios.post("http://localhost:8080/curso/definirCampus", campus, headers)
            .then(Response => { })
            .catch(error => console.log(error))

    }, [campus]);

    async function submeter() {

        var tentativaDeSuicidio = false;
        if (suicidio.name == "SIM") {
            tentativaDeSuicidio = true;
        }
        const novoReporte =
        {
            "discente": nome,
            "curso": curso,
            "campus": campus,
            "periodo": periodo.name,
            "descrisao": descrisao,
            "tentativaDeSuicidio": tentativaDeSuicidio
        }
        const headers = {
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        axios.post("http://localhost:8080/reporte/salvarReporte", novoReporte, headers)
            .then(Response => { })
            .catch(error => console.log(error))
    }

    return (
        <div> <ToobarDiscente></ToobarDiscente>
            <div class="flex align-items-center justify-content-center" >
                <div >
                    <Card title="REPORTAR CASO DE VULNERABILIDADE MENTAL"></Card>
                    <div className='botao'>
                        <Card className="" >
                            <div className=""  >
                                <Button className={configBotaoCancel} style={{ right: espacamento }} label="CANCEL" />
                                <Button className={configBotaoSalvar} label="SALVAR" onClick={submeter} />
                            </div>
                        </Card>
                    </div>

                    <div className="" >
                        <Card >
                            <div className="p-mb-3" >
                                <h5>DISCENTE*</h5>
                                <InputText className='entradaNome' value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className="p-mb-3" >
                                <h5>CAMPUS*</h5>
                                <Dropdown value={campus} options={campi} onChange={(e) => setCampus(e.value)} placeholder="Escolha um campus" />
                            </div>
                            <div className="p-mb-3" >
                                <h5>CURSO*</h5>
                                <Dropdown value={curso} options={cursos} onChange={(e) => setCurso(e.value)} placeholder="Escolha um curso" />
                            </div>
                            <div className="p-mb-3" >
                                <h5>ANO / PERÍODO*</h5>
                                <Dropdown optionLabel="name" value={periodo} options={periodos} onChange={(e) => setPeriodos(e.target.value)} placeholder="Não se aplica" />
                            </div>
                            <div className="p-mb-3" >
                                <h5>JÁ TENTOU SUICÍDIO?</h5>
                                <Dropdown optionLabel="name" value={suicidio} options={tentouSuicidio} onChange={(e) => setSuicidio(e.target.value)} placeholder="Não se aplica" />
                            </div>
                            <div className="p-mb-3" >
                                <div>
                                    <h5>DESCRIÇÃO</h5>
                                    <InputTextarea rows={5} cols={30} value={descrisao} onChange={(e) => setDescrisao(e.target.value)} />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>

    );
}