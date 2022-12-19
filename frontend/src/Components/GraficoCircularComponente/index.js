import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function GraficoCircularComponente(props) {
    
    const rotulos = props.rotulos;
    const dados = props.dados;
    const cores = props.cores;

    const [chartData] = useState({
        labels: rotulos,
        datasets: [
            {
                data: dados,
                backgroundColor: cores,
                hoverBackgroundColor: [
                    "#25db2e",
                ]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
        <div>
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    );
}