import React from "react";
import './styles.css'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import api from '../../../config/configApi';

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

        const headers = {
            'headers': {
              'Content-Type': 'application/json'
            }
          }
      
          await api.post("/reportes-list", data, headers)
          .then((response) => {
            setStatus({
              type: 'success',
              mensagem: response.data.mensagem
            });
          }).catch((err) => {
            if(err.response){
              setStatus({
                type: 'error',
                mensagem: err.response.data.mensagem
              });
            }else{
              setStatus({
                type: 'error',
                mensagem: "Erro: Tente mais tarde!"
              });
            }
          });

    }

    return(
        <div className="linha1" >
            <section>

            <h1 className='titulo1' >REPORTAR CASO DE VULNERABILIDADE MENTAL</h1>
                <section className='botao'>
                    <button className = "btnCancel" type = "submit">CANCEL</button>
                    <button className = "btnSalvar" onClick={submeter} type = "submit">SALVAR</button>
                </section>
                <section className="linha2" >
                </section>

                <section>
                <h5>DISCENTE*</h5>
                    <InputText className='entradaNome' value={nome} onChange={(e) => setNome(e.target.value)} />
                    
                </section>

                <section className="linha3" >
                <section>
                    <h5>DISCENTE*</h5>
                    <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.target.value)} placeholder="Monteiro"/>
                </section>

                <section>
                    <h5>CURSO*</h5>
                    <Dropdown optionLabel="name" value={curso} options={cursos} onChange={(e) => setCurso(e.target.value)} placeholder="Escolha um curso"/>
                </section>
                
                <section>
                    <h5>ANO / PERÍODO*</h5>
                    <Dropdown optionLabel="name" value={ano} options={anos} onChange={(e) => setAnos(e.target.value)} placeholder="Não se aplica"/>
                </section>

                <section>
                    <h5>JÁ TENTOU SUICÍDIO?</h5>
                    <Dropdown optionLabel="name" value={suicidio} options={tentouSuicidio} onChange={(e) => setTentouSuicidio(e.target.value)} placeholder="Não se aplica"/>
                </section>

                </section>

                <section className="linha4" >
                    <section>
                    <h5>DESCRIÇÃO</h5>
                    <InputTextarea rows={5} cols={30} value={descrisao} onChange={(e) => setDescrisao(e.target.value)} />
                    </section>

                </section>


            </section>
        </div>
        
    );
}