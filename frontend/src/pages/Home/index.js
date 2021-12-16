import React from 'react';
import './styles.css'

import logoImg from '../../assets/logo.png';


export default function Home(){
    return (
      
        <div 
        className = "home-container"
        >
        <section className='quadrado' >
            
            <section className = "logo">
            <img src = {logoImg} alt = "logo"></img>
            </section>

        </section>

        <section className='fraseImpacto' >
            <h1>
            CONHEÇA SUA NOVA FERRAMENTA DE AUXILIO
                </h1>
            <h1>
            A <b>SAÚDE MENTAL</b> DOS ESTUDANTES DO IFPB
            </h1>

            <section className = "buttons" >
                <button type = "submit">SOU ESTUDANTE/SERVIDOR DO IFPB</button>
                <button type = "submit">MATERIAIS DE APOIO ONLINE</button>
                <button type = "submit">INVENTARIO BECK</button>
                <button type = "submit">QUEM SOMOS</button>
            </section>

        </section>
    </div>

        


    );
        
}