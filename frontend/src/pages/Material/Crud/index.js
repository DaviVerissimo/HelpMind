import React from "react";
import './styles.css'
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

export default function Crud(){

    const cities = [
        {name: 'Depresão', code: 'NY'},
        {name: 'Ansiedade', code: 'RM'},
        {name: 'Suicidio', code: 'LDN'},
        {name: 'Outubro Rosa', code: 'IST'},
        {name: 'Biporalidade', code: 'PRS'}
    ];

    const [city, setCity] = useState('Ansiedade');
    
    function mudarEstado(){
        setCity('United States');
    }

    return(

        <div>

            <section className="coluna1" >
                <h1 className="titulo1">GERENCIA DE MATERIAIS </h1>
                <section className="coluna2">
                    <h5>CATEGORIA</h5>
                    <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="TODAS"/>
                </section>

                <section className="coluna3" >
                    <button>NOVO MATERIAL</button>
                </section>

            </section>



            <section>
            
            </section>
        </div>
        
    );
}