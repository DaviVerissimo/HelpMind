

import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReporteService from '../../../services/ReporteService';

export default function ListaDeReportes() {

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
        <div>
            <div className="card">
                <DataTable value={reportes} responsiveLayout="scroll">
                    <Column field="discente" header="Discente" ></Column>
                    <Column field="id" header="ID"></Column>
                    <Column field="curso" header="Curso"></Column>
                    <Column field="campus" header="Campus"></Column>
                    <Column field="periodo" header="Periodo"></Column>
                    <Column field="tentativaDeSuicidio" header="Ten de Suicidio"></Column>
                    <Column field="descrisao" header="Descrisão"></Column>
                </DataTable>
            </div>



        </div>
    )
}



