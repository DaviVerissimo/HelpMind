import React from "react";
import './styles.css'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from "axios";

export default function Reporte(){
    //estado da entrada e texto
    const [nome,setNome] = useState('');

    //dropdown
    // campus
    const cities = [
        {name: 'Monteiro', code: 'NY'},
        {name: 'Cajazeiras', code: 'RM'},
        {name: 'João Pessoa', code: 'LDN'},
        {name: 'Rio Tinto', code: 'IST'},
        {name: 'Campina Grande', code: 'PRS'}
    ];
    const [city, setCity] = useState('Monteiro');

    //curso

    const cursos = [
        {name: 'TÉCNICO INTEGRADO EM INSTRUMENTO MUSICAL', code: 'NY'},
        {name: 'TÉCNICO INTEGRADO EM INFORMÁTICA', code: 'RM'},

    ];

    const [curso, setCurso] = useState('TÉCNICO INTEGRADO EM INSTRUMENTO MUSICAL');

    //ano /periodo
    const anos = [
        {name: '1º', code: 'NY'},
        {name: '2º', code: 'RM'},
        {name: '3º', code: 'RM'},
    ];

    const [ano, setAnos] = useState('1º');

        //tentou suicidio?
    const tentouSuicidio = [
        {name: 'SIM', code: 'NY'},
        {name: 'NÂO', code: 'RM'},
    
    ];
    const [suicidio, setTentouSuicidio] = useState('NÂO');

    //estado da entrada e texto
    const [descrisao,setDescrisao] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      });
      
    
    async function submeter(){
        const data = {nome, city, curso, ano, suicidio, descrisao}
        console.log(data)


        const newReporte =         {
            "reporte" : [
                {
                    "discente": {nome},
                    "curso": {curso},
                    "campus": {city}, 
                    "periodo": {ano},
                    "descrisao": {descrisao},
                    "tentativaDeSuicidio": {suicidio}
                }
            ]
        }

        const aux = JSON.stringify(newReporte)

        const headers = {
            'headers': {
              'Content-Type': 'application/json'
            }
          }

        const uri = "http://localhost:8080/reporte/salvarReporte"

        axios.post(uri, aux, headers)
        .then(Response => {
            //alert(aux)
            console.log(Response)
        })
        .catch(error => console.log(error))


     }

    return(
        <div className="linha1" >
            <div>

            <h1 className='titulo1' >REPORTAR CASO DE VULNERABILIDADE MENTAL</h1>
                <div className='botao'>
                    <button className = "btnCancel" type = "submit">CANCEL</button>
                    <button className = "btnSalvar" onClick={submeter} type = "submit">SALVAR</button>
                </div>
                <div className="linha2" >
                </div>

                <div>
                <h5>DISCENTE*</h5>
                    <InputText className='entradaNome' value={nome} onChange={(e) => setNome(e.target.value)} />
                    
                </div>

                <div className="linha3" >
                <div>
                    <h5>DISCENTE*</h5>
                    <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.target.value)} placeholder="Monteiro"/>
                </div>

                <div>
                    <h5>CURSO*</h5>
                    <Dropdown optionLabel="name" value={curso} options={cursos} onChange={(e) => setCurso(e.target.value)} placeholder="Escolha um curso"/>
                </div>
                
                <div>
                    <h5>ANO / PERÍODO*</h5>
                    <Dropdown optionLabel="name" value={ano} options={anos} onChange={(e) => setAnos(e.target.value)} placeholder="Não se aplica"/>
                </div>

                <div>
                    <h5>JÁ TENTOU SUICÍDIO?</h5>
                    <Dropdown optionLabel="name" value={suicidio} options={tentouSuicidio} onChange={(e) => setTentouSuicidio(e.target.value)} placeholder="Não se aplica"/>
                </div>

                </div>

                <div className="linha4" >
                    <div>
                    <h5>DESCRIÇÃO</h5>
                    <InputTextarea rows={5} cols={30} value={descrisao} onChange={(e) => setDescrisao(e.target.value)} />
                    </div>

                </div>


            </div>
        </div>
        
    );
}