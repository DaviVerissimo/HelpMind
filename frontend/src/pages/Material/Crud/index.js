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

            <section className="principal" >

            <section className="linha1" >
                <h1 className="titulo1">GERENCIA DE MATERIAIS </h1>
                <section>
                    <h5>CATEGORIA</h5>
                    <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="TODAS"/>
                </section>

                <section className="btn">
                <button>NOVO MATERIAL</button>
                </section>

            </section>

            <section className="linha2">
            <table border="1">
                        <tr>
                            <td>Data</td>
                            <td>Nome</td>
                            <td>Categoria</td>
                            <td>Adcionado por</td>
                            <td>Açoes</td>
                        </tr>
                        <tr>
                            <td>22/10/2021</td>
                            <td>Cartilha saude Mental</td>
                            <td>Janeiro Branco</td>
                            <td>Lucivaldo Alves Ferreira</td>
                            <td>Lucivaldo Alves Ferreira</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </table>

                </section>


                <section className="linha3" >
                    
                </section>



            </section>



        </div>
        
    );
}