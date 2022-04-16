import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../../Publica/ToobarPublica/index';

export default function QuestionarioDeDepresaoDeBeck() {

    const [checked, setChecked] = useState();
    const history = useHistory();

    return (
        <div> <ToobarDiscente></ToobarDiscente>
            <div>
            <Card title='INVENTÁRIO DE DEPRESSÃO DE BECK (BDI)' >

            </Card>
            <Card subTitle='Este questionário consiste em 21 grupos de afirmações. 
                Marque a afirmação que descreve melhor a maneira que você tem se 
                sentido na última semana, incluindo hoje. Tome cuidado
                 de ler todas as afirmações, em cada grupo, antes de fazer sua escolha.' >
            </Card>
            <Card></Card>
            </div>
        </div>

    );

}