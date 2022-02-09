import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';

import ToobarPublica from '../../ToobarPublica/index';

export default function SimuladorDeQuestionario() {

    const citySelectItems = [
        { label: 'Questão 01', value: 'NY' },
        { label: 'Questão 02', value: 'NY' },
        // { label: 'Questão 03', value: 'NY' },
        // { label: 'Questão 04', value: 'NY' },
        // { label: 'Questão 05', value: 'NY' },
        // { label: 'Questão 06', value: 'NY' },
        // { label: 'Questão 07', value: 'NY' },
        // { label: 'Questão 08', value: 'NY' },
        // { label: 'Questão 09', value: 'NY' },
        // { label: 'Questão 10', value: 'NY' },
        // { label: 'Questão 11', value: 'NY' },
        // { label: 'Questão 12', value: 'NY' },
        // { label: 'Questão 13', value: 'NY' },
        // { label: 'Questão 14', value: 'NY' },

        // { label: 'Questão 16', value: 'NY' },
        { label: 'Questão 17', value: 'NY' },
        { label: 'Questão 18', value: 'NY' }

    ];

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }

    ];

    const [city, setCity] = useState();
    const [checked, setChecked] = useState();

    return (
        <div> <ToobarPublica></ToobarPublica>
            <div>
                <Card title='SIMULAÇÃO DE QUESTIONÁRIO' ></Card>
            </div>

            <div>
                <Card subTitle='Este questionário consiste em 21 grupos de afirmações. Marque a afirmação que descreve melhor a maneira que você tem se sentido na última semana, incluindo hoje. Se várias afirmações num
grupo parecerem se aplicar igualmente bem, marque cada uma. Tome cuidado de ler todas as afirmações, em cada grupo, antes de fazer sua escolha.' >
                </Card>
            </div>
            <div>
                <Card title='QUESTIONÁRIO' className='p-col-15'>

                    <div>
                        <Card subTitle="Se o sistema recomendar: Realize um auto reporte." >
                            <Button className="p-mb-3 p-col-1 p-button-secondary  " style={{ right: '10px' }} label="ANTERIOR" />
                            <Button className="p-mb-3 p-col-2" label="PRÓXIMA QUESTÃO" />
                        </Card>
                    </div>

                    <Card className='' >
                        <div className="home-container p-grid p-justify-center p-align-center p-col-14 " style={{ height: '100%' }} >

                            <div className="div-listbox p-col-2 " >

                                <Card className='' >
                                    <ListBox value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} />
                                </Card>

                            </div>

                            <div className="card-pergunta p-col-6" >
                                <Card title="Como você se sente em relação ao seu futuro?" >

                                </Card>

                                <Card className='card-alternativas p-col-12' >
                                    <div>
                                        <Checkbox name='New York' name="city" value="Chicago" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                        <label > Não estou especialmente desanimado quanto ao futuro </label>
                                    </div>
                                    <div>
                                        <Checkbox name='New York' name="city" value="Chicago" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                        <label> Eu me sinto desanimado quanto ao futuro </label>
                                    </div>
                                    <div>
                                        <Checkbox name='New York' name="city" value="Chicago" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                        <label>  Acho que nada tenho a esperar </label>
                                    </div>
                                    <div>
                                        <Checkbox name='New York' name="city" value="Chicago" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                        <label> Acho o futuro sem esperanças e tenho a impressão de que as coisas não podem melhorar  </label>
                                    </div>
                                </Card>
                            </div>

                        </div>
                    </Card>
                </Card>
            </div>

        </div>

    );

}