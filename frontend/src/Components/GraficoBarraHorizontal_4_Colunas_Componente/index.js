import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function GraficoBarraHorizontal_4_Colunas_Componente (props) {
    
    const [rotulos, setRotulos] = useState('carregando');
    const identificador = props.identificador;
    const coluna1 = props.coluna1;
    const coluna2 = props.coluna2;
    const coluna3 = props.coluna3;
    const coluna4 = props.coluna4;
    const limite = props.limite;

    useEffect(() => {
      setRotulos(props.rotulos);
    
    }, [rotulos]);

    const [basicData] = useState({
        labels: identificador,
        datasets: [
            {
                label: rotulos[0],
                backgroundColor: '#30db2e',
                data: coluna1
            },
            {
                label: rotulos[1],
                backgroundColor: '#e6ed0c',
                data: coluna2
            },
            {
                label: rotulos[2],
                backgroundColor: '#ed7d0c',
                data: coluna3
            },
            {
                label: rotulos[3],
                backgroundColor: '#ed0c0c',
                data: coluna4
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
            maintainAspectRatio: limite,
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