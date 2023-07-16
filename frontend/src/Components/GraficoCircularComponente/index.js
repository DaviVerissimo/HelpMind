import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function GraficoCircularComponente(props) {
    const rotulos = props.rotulos;
    const dados = props.dados;
    const cores = props.cores;
    const atualizarGrafico = () => {
        setShouldRefresh(true);
    };

    const [chartData, setChartData] = useState({
        labels: rotulos,
        datasets: [
            {
                data: dados,
                backgroundColor: cores,
                hoverBackgroundColor: ["#25db2e"]
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

    const [shouldRefresh, setShouldRefresh] = useState(true);

    useEffect(() => {
        if (shouldRefresh) {
            setChartData(prevState => ({
                ...prevState,
                labels: rotulos,
                datasets: [
                    {
                        ...prevState.datasets[0],
                        data: dados,
                        backgroundColor: cores
                    }
                ]
            }));
            setShouldRefresh(false);
        }
    }, [shouldRefresh, rotulos, dados, cores]);



    return (
        <div>
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
            <script>{atualizarGrafico}</script>
        </div>
    );
}
