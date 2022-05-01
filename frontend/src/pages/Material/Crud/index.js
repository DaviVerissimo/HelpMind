import React from "react";
import './styles.css'
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import ToobarProfissionalDeSaude from "../../ProfissionalDeSaude/ToobarProfissionalDeSaude";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function Crud() {

    const categorias = [
        { name: 'Depresão', code: 'NY' },
        { name: 'Ansiedade', code: 'RM' },
        { name: 'Suicidio', code: 'LDN' },
        { name: 'Outubro Rosa', code: 'IST' },
        { name: 'Biporalidade', code: 'PRS' }
    ];
    const [city, setCity] = useState('Ansiedade');

    return (

        <div> <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <Card title="GERENCIA DE MATERIAIS">
            </Card>
            <div>
                <Card subTitle='CATEGORIA' >
                    <Dropdown optionLabel="name" value={city} options={categorias} onChange={(e) => setCity(e.value)} placeholder="TODAS" />
                </Card>
                <Card>
                    {/* Realizar mapeamento com map a partir de um json e popular a tabela e add as devidas colunas */}
                    <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={categorias} responsiveLayout="scroll">
                                <Column field="discente" header="Titulo" ></Column>
                                {/* <Column field="id" header="ID"></Column>
                                <Column field="curso" header="Curso"></Column>
                                <Column field="campus" header="Campus"></Column>
                                <Column field="periodo" header="Periodo"></Column>
                                <Column field="tentativaDeSuicidio" header="Ten de Suicidio"></Column>
                                <Column field="descrisao" header="Descrisão"></Column> */}
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