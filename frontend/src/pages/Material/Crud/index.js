import React from "react";
import './styles.css'
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import ToobarADM from "../../ADM/ToobarADM";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function Crud() {

    const cities = [
        { name: 'Depresão', code: 'NY' },
        { name: 'Ansiedade', code: 'RM' },
        { name: 'Suicidio', code: 'LDN' },
        { name: 'Outubro Rosa', code: 'IST' },
        { name: 'Biporalidade', code: 'PRS' }
    ];

    const [city, setCity] = useState('Ansiedade');

    function mudarEstado() {
        setCity('United States');
    }

    return (

        <div> <ToobarADM></ToobarADM>

            <Card title="GERENCIA DE MATERIAIS">
            </Card>
            <div>
                <h5>CATEGORIA</h5>
                <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="TODAS" />
                <Card>
                <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={cities} responsiveLayout="scroll">
                                <Column field="discente" header="Discente" ></Column>
                                <Column field="id" header="ID"></Column>
                                <Column field="curso" header="Curso"></Column>
                                <Column field="campus" header="Campus"></Column>
                                <Column field="periodo" header="Periodo"></Column>
                                <Column field="tentativaDeSuicidio" header="Ten de Suicidio"></Column>
                                <Column field="descrisao" header="Descrisão"></Column>
                                <Column field="" header="Açoes"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                <Button className="p-mb-5  p-mr-3 p-col-0" label="" icon="pi pi-file" />
                                                <Button className="p-mb-5  p-mr-3 p-col-0" label="" icon="pi pi-pencil" />
                                                <Button className="p-mb-0  p-mr-3 p-col-0 p-button-danger" label="" icon="pi pi-trash" />
                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>
                            </DataTable>
                        </div>
                    </div>
                </Card>
            </div>

        </div>

    );
}