import { Card } from 'primereact/card';
import React from 'react';
import './styles.css'

import logoImg from '../../../assets/logo.png';
import ToobarPublica from '../ToobarPublica/index';

export default function QuemSomos() {

    return (
        <div>
            <ToobarPublica></ToobarPublica>
            <div className="quemSomos-container p-grid p-justify-center p-align-center p-component  p-dir-col " style={{ height: '100%' }} >
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
                
                <div className="home-ladoEsquerdo p-col-4 " >
                    
                </div>
                <div>

                </div>
            </div>

        </div>
    );
}