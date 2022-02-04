import React from "react";
import './styles.css'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import apiCursosIFPB from '../../../services/apiCursosIFPB';
import { Card } from 'primereact/card';
import axios from "axios";


export default function Reporte() {
    //estado da entrada e texto
    const [nome, setNome] = useState('');

    //dropdown
    // campus
    const cities = [
        { name: 'Monteiro', code: 'NY' },
        { name: 'Cajazeiras', code: 'RM' },
        { name: 'João Pessoa', code: 'LDN' },
        { name: 'Rio Tinto', code: 'IST' },
        { name: 'Campina Grande', code: 'PRS' }
    ];
    const [city, setCity] = useState('Monteiro');

    //curso

    const cursos = [
        { name: 'TÉCNICO INTEGRADO EM INSTRUMENTO MUSICAL', code: 'NY' },
        { name: 'TÉCNICO INTEGRADO EM INFORMÁTICA', code: 'RM' },

    ];

    const [curso, setCurso] = useState('TÉCNICO INTEGRADO EM INSTRUMENTO MUSICAL');

    //ano /periodo
    const anos = [
        { name: '1º' },
        { name: '2º' },
        { name: '3º' },
    ];

    const [ano, setAnos] = useState('1º');

    //tentou suicidio?
    const tentouSuicidio = [
        { name: 'SIM', code: 'NY' },
        { name: 'NÂO', code: 'RM' },

    ];
    const [suicidio, setTentouSuicidio] = useState('NÂO');

    //estado da entrada e texto
    const [descrisao, setDescrisao] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });


    async function submeter() {




        //const data = {nome, city, curso, ano, suicidio, descrisao}
        //console.log(data)

        var surtada = false;

        if (suicidio.name == "SIM") {
            surtada = true;
        }

        const newReporte =

        {
            "discente": nome,
            "curso": curso.name,
            "campus": city.name,
            "periodo": ano.name,
            "descrisao": descrisao,
            "tentativaDeSuicidio": surtada
        }



        //teste
        //const dataJ = JSON.stringify(data)
        //const listaCursos = cursos.map((curso) => curso + " suellen ")
        //console.log(listaCursos)

        //teste

        //const aux = JSON.stringify(newReporte)
        //console.log(aux + "  LUANA")
        //const objeto = JSON.parse(aux)

        const headers = {
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const config = {
            'headers': {

                
            }
        }

        //api do ifpb

        const apiCursosIFPB = "https://dados.ifpb.edu.br/api/3/action/datastore_search_sql?sql=SELECT * from  'd6314b94-1623-4aa6-9e73-cf2cbd227ac3'";
        console.log(apiCursosIFPB)
        //axios.use()
        axios.get(apiCursosIFPB, config) //FAZER COM FETCH
            .then(Response => {
                var dataCurso = Response.data;
                console.log(dataCurso)
            })
            .catch(error => console.log(error))

        //   apiCursosIFPB
        //   .get("/", headers)
        //   .then((response) => console.log((response.data)))
        //   .catch((err) => {
        //     console.error("ops! ocorreu um erro" + err);
        //   });

        //api do ifpb


        axios.post("http://localhost:8080/reporte/salvarReporte", newReporte, headers)
            .then(Response => { })
            .catch(error => console.log(error))

    }

    return (
        <div class="flex align-items-center justify-content-center" >
            <div >

                <Card title="REPORTAR CASO DE VULNERABILIDADE MENTAL"></Card>
                <div className='botao'>
                    <Card>
                        <button className="btnCancel" type="submit">CANCEL</button>
                        <button className="btnSalvar" onClick={submeter} type="submit">SALVAR</button>
                    </Card>
                </div>

                <div className="linha3" >
                    <Card >

                        <div>
                            <h5>DISCENTE*</h5>
                            <InputText className='entradaNome' value={nome} onChange={(e) => setNome(e.target.value)} />

                        </div>
                        <div>
                            <h5>CAMPUS*</h5>
                            <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.target.value)} placeholder="Monteiro" />
                        </div>

                        <div>
                            <h5>CURSO*</h5>
                            <Dropdown optionLabel="name" value={curso} options={cursos} onChange={(e) => setCurso(e.target.value)} placeholder="Escolha um curso" />
                        </div>

                        <div>
                            <h5>ANO / PERÍODO*</h5>
                            <Dropdown optionLabel="name" value={ano} options={anos} onChange={(e) => setAnos(e.target.value)} placeholder="Não se aplica" />
                        </div>

                        <div>
                            <h5>JÁ TENTOU SUICÍDIO?</h5>
                            <Dropdown optionLabel="name" value={suicidio} options={tentouSuicidio} onChange={(e) => setTentouSuicidio(e.target.value)} placeholder="Não se aplica" />
                        </div>
                        <div className="linha4" >
                            <div>
                                <h5>DESCRIÇÃO</h5>
                                <InputTextarea rows={5} cols={30} value={descrisao} onChange={(e) => setDescrisao(e.target.value)} />
                            </div>

                        </div>
                    </Card>

                </div>

            </div>
        </div>

    );
}