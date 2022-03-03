import React from "react";
import './styles.css'
import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
//import ToobarPublica from '../../Publica/ToobarPublica';
import ToobarDiscente from "../ToobarDiscente";
import { JsonPipe } from "@angular/common";



export default function Reporte() {

    // async function buscarCursosIFPB() {
    //     var lista = [];
    //     const cursosIFPB = "http://localhost:8080/reporte/c";
    //     axios.get(cursosIFPB) //problema esta na API do IFPB
    //         .then(Response => {
    //             var dataCurso = Response.data;
    //             //console.log(dataCurso)
    //             dataCurso.forEach(item => {
    //                 //console.log(item.descricao);
    //                 lista.push(item.descricao);
    //              });
    //              console.log(lista)

    //         })
    //         .catch(error => console.log(error))
    //         return lista;
    // }

    //estado da entrada e texto
    const [nome, setNome] = useState('');

    //dropdown
    // campus
    //const cities = kakaroto();

    // function kakaroto(){

    //     var lista = [];
    //     const campus = "http://localhost:8080/curso/listarCampus";
    //     axios.get(campus) //problema esta na API do IFPB
    //         .then(Response => {
    //             var dataCampus = Response.data;
    //             //console.log(dataCurso)
    //             dataCampus.forEach(item => {
    //                 //console.log(item.descricao);
    //                 lista.push(item);
    //             });
    //             //console.log("campus " + lista)
    //             setCity(lista);
                
    //             //console.log("campus " + lista);
    //             console.log(lista);
                
    //         })
    //         .catch(error => console.log(error))

    //         return lista;
    // }
    
    const [city, setCity] = useState(null);
    const [cities, setCities] = useState();
    //LEITURA DOS CAMPUS PELO BACKEND
    // const [cities, setCities] = useState();
    // useEffect( async () => {

    //     var lista = [];
    //     const cursosIFPB = "http://localhost:8080/reporte/c";
    //     axios.get(cursosIFPB) //problema esta na API do IFPB
    //         .then(Response => {
    //             var dataCurso = Response.data;
    //             //console.log(dataCurso)
    //             dataCurso.forEach(item => {

    //                 lista.push(item.diretoria);
    //              });
    //              console.log(lista)
    //              setCities(lista);
    //         })
    //         .catch(error => console.log(error))



    // }, []);


    //curso



    // const cursos = [
    //     { name: 'TÉCNICO INTEGRADO EM INSTRUMENTO MUSICAL', code: 'NY' },
    //     { name: 'TÉCNICO INTEGRADO EM INFORMÁTICA', code: 'RM' },

    // ];

    const [curso, setCurso] = useState([]);
    const [cursos, setCursos] = useState([]);
    //cursos
    useEffect(async () => {

        var lista = [];
        const cursosIFPB = "http://localhost:8080/reporte/c";
        axios.get(cursosIFPB) //problema esta na API do IFPB
            .then(Response => {
                var dataCurso = Response.data;
                //console.log(dataCurso)
                dataCurso.forEach(item => {
                    //console.log(item.descricao);
                    lista.push(item.descricao);
                });
                console.log(lista)
                setCursos(lista);
            })
            .catch(error => console.log(error))

            // const headers = {
            //     'headers': {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': '*'
            //     }
            // }
            
            // axios.post("http://localhost:8080/reporte/d", lista, headers)
            // .then(Response => { 
            //     //console.log(" AQUI " + Response.data)
            // })
            // .catch(error => console.log(error))



    }, []);

        //campus
        useEffect(async () => {

            var lista = [];
            const campus = "http://localhost:8080/curso/listarCampus";
            axios.get(campus) //problema esta na API do IFPB
                .then(Response => {
                    var dataCampus = Response.data;
                    //console.log(dataCurso)
                    dataCampus.forEach(item => {
                        //console.log(item.descricao);
                        lista.push(item);
                    });
                    //console.log("campus " + lista)
                    //setCity(lista);
                    
                    //console.log("campus " + lista);
                   // console.log(setCity);
                   lista = lista.map(
                     (elementoCampus) => {
                         return {
                             label:elementoCampus, 
                              value: elementoCampus
                            }
                     }
                   ).sort((a, b) => a.label.localeCompare(b.label));
                   setCities(lista);
                   console.log("campus " , lista)
                })
                .catch(error => console.log(error))
    
                // const headers = {
                //     'headers': {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json',
                //         'Access-Control-Allow-Origin': '*'
                //     }
                // }
                
                // axios.post("http://localhost:8080/reporte/d", lista, headers)
                // .then(Response => { 
                //     //console.log(" AQUI " + Response.data)
                // })
                // .catch(error => console.log(error))
    
    
    
        }, []);


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



        // const c = '';

        // fetch('../../../../public/cursos.json', {
        //     headers: {
        //         Accept: 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(res => setCurso2(res.data))

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
        //const apiCursosIFPB = "https://dados.ifpb.edu.br/api/3/action/datastore_search_sql?sql=SELECT * from  'd6314b94-1623-4aa6-9e73-cf2cbd227ac3'";
        //const apiAntiga = "https://dados.ifpb.edu.br/dataset/f2902132-dfc9-4fba-98ab-40346075224e/resource/47c6e782-6ef9-4942-8361-38d8aac22922/download/cursos.json";
        //const cabraDaPeste = 'https://jsonplaceholder.typicode.com/posts'
        // fetch(cabraDaPeste)
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        //console.log(apiCursosIFPB)
        //axios.use()

        //CODIGO IMPORTANTE
        // const cursosIFPB = "http://localhost:8080/reporte/c";
        // axios.get(cursosIFPB) //problema esta na API do IFPB
        //     .then(Response => {
        //         var dataCurso = Response.data;
        //         //console.log(dataCurso)

        //         var lista = [];
        //         dataCurso.forEach(item => {
        //             //console.log(item.descricao);
        //             lista.push(item.descricao);
        //          });
        //          //console.log(lista)

        //     })
        //     .catch(error => console.log(error))

        //console.log(buscarCursosIFPB())


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
        <div> <ToobarDiscente></ToobarDiscente>
                    <div class="flex align-items-center justify-content-center" >
            <div >

                <Card title="REPORTAR CASO DE VULNERABILIDADE MENTAL"></Card>
                <div className='botao'>
                    <Card className="" >

                        <div className="   align-items-end "  >
                            <Button className="p-mb-3 p-col-1 p-button-secondary " style={{ right: '10px' }} label="CANCEL" />

                            <Button className="p-mb-3 p-col-1" label="SALVAR" onClick={submeter} />
                        </div>
                    </Card>
                </div>

                <div className="linha3" >
                    <Card >

                        <div className="p-mb-3" >
                            <h5>DISCENTE*</h5>
                            <InputText className='entradaNome' value={nome} onChange={(e) => setNome(e.target.value)} />

                        </div>
                        <div className="p-mb-3" >
                            <h5>CAMPUS*</h5>
                            <Dropdown  value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="Escolha um campus" />
                        </div>

                        <div className="p-mb-3" >
                            <h5>CURSO*</h5>
                            <Dropdown optionLabel="name" value={curso} options={cursos} onChange={(e) => setCurso(e.target.value)} placeholder="Escolha um curso" />
                        </div>

                        <div className="p-mb-3" >
                            <h5>ANO / PERÍODO*</h5>
                            <Dropdown optionLabel="name" value={ano} options={anos} onChange={(e) => setAnos(e.target.value)} placeholder="Não se aplica" />
                        </div>

                        <div className="p-mb-3" >
                            <h5>JÁ TENTOU SUICÍDIO?</h5>
                            <Dropdown optionLabel="name" value={suicidio} options={tentouSuicidio} onChange={(e) => setTentouSuicidio(e.target.value)} placeholder="Não se aplica" />
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