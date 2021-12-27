import React from "react";
import './styles.css'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

export default function Reporte(){
    //estado da entrada e texto
    const [value,setValue] = useState('');

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
    
    function mudarEstado(){
        setCity('');
    }

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
    const [valueA,setValueA] = useState('');

    return(
        <div className="linha1" >
            <section>

            <h1 className='titulo1' >REPORTAR CASO DE VULNERABILIDADE MENTAL</h1>
                <section className='botao'>
                    <button className = "btnCancel" type = "submit">CANCEL</button>
                    <button className = "btnSalvar" type = "submit">SALVAR</button>
                </section>
                <section className="linha2" >
                </section>

                <section>
                <h5>DISCENTE*</h5>
                    <InputText className='entradaNome' value={value} onChange={(e) => setValue(e.target.value)} />
                    {console.log(value)}
                </section>

                <section className="linha3" >
                <section>
                    <h5>DISCENTE*</h5>
                    <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="Monteiro"/>
                </section>

                <section>
                    <h5>CURSO*</h5>
                    <Dropdown optionLabel="name" value={curso} options={cursos} onChange={(e) => setCurso(e.value)} placeholder="Escolha um curso"/>
                </section>
                
                <section>
                    <h5>ANO / PERÍODO*</h5>
                    <Dropdown optionLabel="name" value={ano} options={anos} onChange={(e) => setAnos(e.value)} placeholder="Não se aplica"/>
                </section>

                <section>
                    <h5>JÁ TENTOU SUICÍDIO?</h5>
                    <Dropdown optionLabel="name" value={suicidio} options={tentouSuicidio} onChange={(e) => setTentouSuicidio(e.value)} placeholder="Não se aplica"/>
                </section>

                </section>

                <section className="linha4" >
                    <section>
                    <h5>DESCRIÇÃO</h5>
                    <InputTextarea rows={5} cols={30} value={valueA} onChange={(e) => setValueA(e.target.valueA)} />
                    </section>

                </section>


            </section>
        </div>
        
    );
}