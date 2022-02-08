import { Card } from 'primereact/card';
import React from 'react';
import './styles.css'

import logoImg from '../../../assets/logo.png';
import ToobarPublica from '../ToobarPublica/index';

export default function QuemSomos() {
    // document.body.style.backgroundColor = '#e3f2e4';
    document.body.style.backgroundColor = '#f8f9fa';
    return (
        
        <div>
            <ToobarPublica></ToobarPublica>
            <div className="quemSomos-container p-grid p-justify-center p-align-center p-component  p-dir-col " style={{ height: '100%' }} >

                <div className="home-ladoEsquerdo p-col-10 " >
                    <Card>

                    </Card>
                </div>

                <div className="home-ladoEsquerdo p-col-8 " >
                    <Card>

                    </Card>
                </div>

                <div className="home-ladoEsquerdo p-col-6 " >
                    <Card>

                    </Card>
                </div>


                <div className="home-ladoEsquerdo p-col-4 " >
                    <Card>

                    </Card>
                </div>

                <div className="home-ladoEsquerdo p-col-4" >
                    <Card title="Sobre o HelpMind"
                        subTitle="Uma ferramenta com intuito de ajudar alunos do IFPB, que se encontram com
                                algum tipo de dificuldade psicológica" >
                    </Card>
                </div>

                <div className="home-ladoEsquerdo p-col-4 " >
                    <Card title="Visão"
                        subTitle="Além do alcance" >
                    </Card>
                </div>

                <div className="home-ladoEsquerdo p-col-4 " >
                    <Card title="Missão"
                        subTitle="Se aprovado na disciplina" >
                    </Card>
                </div>


                <div className="home-ladoEsquerdo p-col-4 " >
                    <Card>

                    </Card>
                </div>
                <div className="home-ladoEsquerdo p-col-6 " >
                    <Card>

                    </Card>
                </div>

                <div className="home-ladoEsquerdo p-col-8 " >
                    <Card>

                    </Card>
                </div>

                <div className="home-ladoEsquerdo p-col-10 " >
                    <Card>

                    </Card>
                </div>
            </div>

        </div>
    );
}