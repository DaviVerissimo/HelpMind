

import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReporteService from '../../../services/ReporteService';
import ToobarADM from '../ToobarADM';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useStates } from 'react';
import { Dropdown } from 'primereact/dropdown';

export default function ListaDeReportes() {

    const cities = [
        { name: 'Alfabetica', code: 'NY' },
        { name: 'Data', code: 'RM' },
        { name: 'Tentativa de suicidio', code: 'LDN' }
    ];
    const [city, setCity] = useState();

    const [reportes, setReportes] = useState([])

    useEffect(() => {
        getReportes()
        //console.log(reportes);
        // n
    }, [])

    const getReportes = () => {

        ReporteService.getReporte().then((response) => {
            setReportes(response.data)
            console.log(response.data);
        });
    };

    {
        reportes.map((reporte, key) => {
            console.log({ reportes });
        })


    }
    return (
        <div  > <ToobarADM></ToobarADM>

            <div className="quemSomos-container p-grid p-justify-center p-align-center p-component  p-dir-col " style={{ height: '100%' }} >
                <Card title="REPORTES" ></Card>

                <Card >
                    <Button className="p-mb-0  p-mr-3 p-col-0" label="" icon="pi pi-search" />
                    <InputText className='className="p-mb-5 p-mr-3 p-col-5 ' ></InputText>
                    {/* <InputText className='className="p-mb-5 p-col-4 ' ></InputText> */}
                    <Dropdown className='className="p-mb-4 p-col-1' optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.target.value)} placeholder="Ordenar por" />
                </Card>

                <Card>
                    <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={reportes} responsiveLayout="scroll">
                                <Column field="discente" header="Discente" ></Column>
                                <Column field="id" header="ID"></Column>
                                <Column field="curso" header="Curso"></Column>
                                <Column field="campus" header="Campus"></Column>
                                <Column field="periodo" header="Periodo"></Column>
                                <Column field="tentativaDeSuicidio" header="Ten de Suicidio"></Column>
                                <Column field="descrisao" header="Descrisão"></Column>
                                <Column field="" header="Açoes Iventario"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                <Button className="p-mb-5  p-mr-3 p-col-0" label="VISUALIZAR" icon="pi pi-file" />
                                                <Button className="p-mb-0  p-mr-3 p-col-0" label="SOLICITAR" icon="pi pi-book" />
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
    )
}



