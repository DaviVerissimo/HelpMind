import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function GraficoBarraVerticalComponente(props) {

    const rotulos = props.rotulos;
    const dados = props.dados;
    const identificador = props.identificador;
    const [basicData] = useState({
        labels: rotulos,
        datasets: [
            {
                label: identificador[0],
                backgroundColor: '#42A5F5',
                data: dados[0]
            },
            {
                label: identificador[1],
                backgroundColor: '#FFA726',
                data: dados[1]
            }
        ]
    });

  

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions,
        }
    }

    const { basicOptions, horizontalOptions, multiAxisOptions, stackedOptions } = getLightTheme();

    return (
        <div>
            <div className="card">
                {/* <h5>Vertical</h5> */}
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    );
}