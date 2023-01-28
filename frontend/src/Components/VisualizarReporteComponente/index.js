import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import { useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ReporteService from '../../services/ReporteService';
import BotaoVoltar from '../BotaoVoltar';

export default function VisualizarReporteComponente() {

    const { id } = useParams();
    const location = useLocation();
    const [reporte, setReporte] = useState();
    const obterReporte = () => {
        ReporteService.getReporteById(id).then((response) => {
            setReporte(response.data)

        });
    };

    const history = useHistory();
    const [campus, setCampus] = useState(null);
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState([]);
    const [descrisao, setDescrisao] = useState('');
    const [periodo, setPeriodos] = useState();
    const [suicidio, setSuicidio] = useState();
    const [NomeReportante, setNomeReportante] = useState();

    useEffect(async () => {
        if (reporte == null) {
            obterReporte();
        }

        if (reporte != undefined) {

            setCampus(reporte.campus);
            setNome(reporte.discente);
            setCurso(reporte.curso);
            setDescrisao(reporte.descrisao);
            setPeriodos(reporte.periodo);
            var surto = 'NÃO'
            if (reporte.suicidio) {
                surto = 'SIM'
            }
            setSuicidio(surto);

            // ReporteService.getReportanteById(reporte.idReportante).then((response) => {
            //     setNomeReportante(response.data)

            // });

        }

    }, [reporte]);

    return (
        <div>
            <div >
                <Card title="REPORTE CASO DE VULNERABILIDADE MENTAL"></Card>
                <Card >
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <Card subTitle='REPORTADOR POR' >
                        <InputText value={NomeReportante} disabled onChange={(e) => setNomeReportante(e.target.value)} />
                    </Card>
                    <Card subTitle='DISCENTE' >
                        <InputText value={nome} disabled onChange={(e) => setNome(e.target.value)} />
                    </Card>
                    <Card subTitle='CAMPUS' >
                        <InputText value={campus} disabled onChange={(e) => setCampus(e.value)} />
                    </Card>
                    <Card subTitle='CURSO' >
                        <InputText value={curso} disabled onChange={(e) => setCurso(e.value)} />
                    </Card>
                    <Card subTitle='ANO / PERÍODO' >
                        <InputText value={periodo} disabled onChange={(e) => setPeriodos(e.target.value)} />
                    </Card>
                    <Card subTitle='JÁ TENTOU SUICÍDIO?' >
                        <InputText optionLabel="name" value={suicidio} disabled onChange={(e) => setSuicidio(e.target.value)} />
                    </Card>
                    <Card subTitle='DESCRIÇÃO' >
                        <InputTextarea rows={5} cols={30} value={descrisao} disabled onChange={(e) => setDescrisao(e.target.value)} />)
                    </Card>
                </Card>

            </div>
        </div>

    );
}