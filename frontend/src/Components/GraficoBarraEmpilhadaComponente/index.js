import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function GraficoBarraEmpilhadaComponente(props) {

    const rotulos = props.rotulos;
    const dados = props.dados;
    const identificador = props.identificador;
    const [stackedData] = useState({
        labels: rotulos,
        datasets: [{
            type: 'bar',
            label: identificador[0],
            backgroundColor: '#42A5F5',
            data: dados[0]
        }, {
            type: 'bar',
            label: identificador[1],
            backgroundColor: '#66BB6A',
            data: dados[1]
        }, {
            type: 'bar',
            label: identificador[2],
            backgroundColor: '#FFA726',
            data: dados[2]
        }]
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

        let stackedOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    stacked: true,
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
            stackedOptions
        }
    }

    const { basicOptions, horizontalOptions, multiAxisOptions, stackedOptions } = getLightTheme();

    return (
        <div>
            <div className="card">
                {/* <h5>Stacked</h5> */}
                <Chart type="bar" data={stackedData} options={stackedOptions} />
            </div>
        </div>
    );
}