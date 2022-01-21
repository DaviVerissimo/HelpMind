

import React, {useState, useEffect} from 'react'
import ReporteService from '../../../services/ReporteService';

export default function ListaDeReportes() {

    const [reportes, setReportes] = useState([])

    useEffect(() => {
        getReportes()
    }, [])

    const getReportes = () => {

        ReporteService.getReporte().then((response) => {
            setReportes(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className = "container">
            
            <h1 className = "text-center"> Reporte List</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Reporte Id</th>
                        <th> Reporte First Name</th>
                        <th> Reporte Last</th>
                        <th> Reporte Email</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        reportes.map(
                            reporte =>
                                <tr key = {reporte.id}>
                                    <td> {reporte.id }</td>
                                    <td> {reporte.discente }</td>
                                    <td> {reporte.curso }</td>    
                                    <td> {reporte.periodo }</td>

                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
    )
}



