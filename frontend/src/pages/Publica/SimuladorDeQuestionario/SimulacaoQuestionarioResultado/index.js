import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';

import ToobarPublica from '../../ToobarPublica/index';

export default function SimulacaoQuestionarioResultado() {

    return (
        <div>
            <ToobarPublica></ToobarPublica>
            <div className="simulacao-container p-grid p-justify-center p-align-center p-component  p-dir-col " style={{ height: '100%' }} >
                <Card title="RESULTADO"></Card>
                <div className="home-ladoEsquerdo p-col-4 p-mt-3" >
                    <Card
                        subTitle="PONTOS" >
                        <h1>26</h1>
                    </Card>
                </div>
                <div className=" p-col-4 p-mt-3" >
                    <Card subTitle="RESULTADO" >
                        <h1>Depresão moderada</h1>
                    </Card>
                </div>
                <div className=" p-col-4 p-mt-3" >
                    <Card title="Recomendamos que realize um auto reporte!"
                        subTitle="O iventario de beck considera todos os valores como depresão. Valores NÂO SIGNIFICAM que vc esterja com depressão." >
                        <div className=" " >
                            <Card>
                                <Button>AUTO REPORTE</Button>
                            </Card>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}