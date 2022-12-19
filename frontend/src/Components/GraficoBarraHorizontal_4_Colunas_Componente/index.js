import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function GraficoBarraHorizontal_4_Colunas_Componente (props) {
    
    const rotulos = props.rotulos;
    const identificador = props.identificador;
    const dados = props.dados;
    const [basicData] = useState({
        labels: identificador,
        datasets: [
            {
                label: rotulos[0],
                backgroundColor: '#30db2e',
                data: dados[0]
            },
            {
                label: rotulos[1],
                backgroundColor: '#e6ed0c',
                data: dados[1]
            },
            {
                label: rotulos[2],
                backgroundColor: '#ed7d0c',
                data: dados[2]
            },
            {
                label: rotulos[3],
                backgroundColor: '#ed0c0c',
                data: dados[3]
            },
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

        let horizontalOptions = {
            indexAxis: 'y',
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
            horizontalOptions
        }
    }

    const { basicOptions, horizontalOptions, multiAxisOptions, stackedOptions } = getLightTheme();

    return (
        <div>
            <div className="card">
                {/* <h5>Horizontal</h5> */}
                <Chart type="bar" data={basicData} options={horizontalOptions} />
            </div>
        </div>
    );
}