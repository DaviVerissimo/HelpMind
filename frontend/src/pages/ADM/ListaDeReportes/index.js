

import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReporteService from '../../../services/ReporteService';

export default function ListaDeReportes() {

    const [reportes, setReportes] = useState([])

    useEffect(() => {
        getReportes()
        //console.log(reportes);
    }, [])

    const getReportes = () => {

        ReporteService.getReporte().then((response) => {
            setReportes(response.data)
            // console.log(response.data);
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
                    <Column field="Discente" header="Discente" ></Column>
                    <Column field="ID" header="ID"></Column>
                    <Column field="Curso" header="Curso"></Column>
                    <Column field="Campus" header="Campus"></Column>
                    <Column field="Periodo" header="Periodo"></Column>
                    <Column field="Ten de Suicidio" header="Ten de Suicidio"></Column>
                    <Column field="Descrisão" header="Descrisão"></Column>
                </DataTable>
            </div>

            <div>
                <div className="container">

                    <h1 className="text-center"> Reporte List</h1>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>  Id</th>
                                <th>  Discente</th>
                                <th>  Curso</th>
                                <th>  Periodo</th>
                                <th>  Campus</th>
                                <th>  Periodo</th>
                                <th>  Suicidio</th>
                                <th>  Descrisão</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                reportes.map(
                                    reporte =>
                                        <tr key={reporte.id}>
                                            <td> {reporte.id}</td>
                                            <td> {reporte.discente}</td>
                                            <td> {reporte.curso}</td>
                                            <td> {reporte.periodo}</td>
                                            <td> {reporte.campus}</td>
                                            <td> {reporte.tentativaDeSuicidio}</td>
                                            <td> {reporte.descrisao}</td>

                                        </tr>

                                )
                            }

                        </tbody>


                    </table>

                </div>

            </div>

        </div>
    )
}



