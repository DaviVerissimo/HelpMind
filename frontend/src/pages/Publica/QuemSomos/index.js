import { Card } from 'primereact/card';
import React from 'react';
import './styles.css'

import logoImg from '/home/davi/WORKSPACEs/Projeto I/HelpMind/frontend/src/assets/logo.png';

export default function QuemSomos() {

    return (
        <div className="quemSomos-container p-grid p-justify-center p-align-center p-component  p-col-6 " style={{ height: '100%' }} >
            <div className="home-ladoEsquerdo p-col-4 " >
                <img src={logoImg} alt="logo"></img>
            </div>
            <div>
                <Card title="Sobre o HelpMind"
                    subTitle="Uma ferramenta com intuito de ajudar alunos do IFPB, que se encontram com
                                algum tipo de dificuldade psicológica" >
                </Card>

                <Card title="Visão"
                    subTitle="Além do alcance" >
                </Card>

                <Card title="Missão"
                    subTitle="Se aprovado na disciplina" >
                </Card>
            </div>
        </div>
    );
}