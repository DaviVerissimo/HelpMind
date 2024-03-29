import React from "react";
import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import ToobarDiscente from "../ToobarDiscente";
import { useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ReporteService from "../../../services/ReporteService";
import BotaoVoltar from "../../../Components/BotaoVoltar";

export default function VisualizarReporteDiscente() {

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
            ReporteService.getReportanteById(reporte.idReportante).then((response) => {
                setNomeReportante(response.data)

            });
        }

    }, [reporte]);

    return (
        <div> <ToobarDiscente></ToobarDiscente>
            <div >
                <Card title="REPORTE CASO DE VULNERABILIDADE MENTAL"></Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card >
                    <Card subTitle='REPORTADOR POR' >
                        <InputText
                            value={NomeReportante}
                            disabled
                            style={{ width: '100%' }}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Card>
                    <Card subTitle='DISCENTE' >
                        <InputText
                            value={nome}
                            disabled
                            style={{ width: '100%' }}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Card>
                    <Card subTitle='CAMPUS' >
                        <InputText
                            value={campus}
                            disabled
                            style={{ width: '100%' }}
                            onChange={(e) => setCampus(e.value)}
                        />
                    </Card>
                    <Card subTitle='CURSO' >
                        <InputText
                            value={curso}
                            disabled
                            style={{ width: '100%' }}
                            onChange={(e) => setCurso(e.value)}
                        />
                    </Card>
                    <Card subTitle='ANO / PERÍODO' >
                        <InputText
                            value={periodo}
                            disabled
                            style={{ width: '100%' }}
                            onChange={(e) => setPeriodos(e.target.value)}
                        />
                    </Card>
                    <Card subTitle='JÁ TENTOU SUICÍDIO?' >
                        <InputText
                            optionLabel="name"
                            value={suicidio}
                            disabled
                            style={{ width: '100%' }}
                            onChange={(e) => setSuicidio(e.target.value)}
                        />
                    </Card>
                    <Card subTitle='DESCRIÇÃO' >
                        <InputTextarea
                            value={descrisao}
                            disabled
                            onChange={(e) => setDescrisao(e.target.value)}
                            style={{ width: '100%' }}
                            autoResize
                        />
                    </Card>
                </Card>
            </div>
        </div>
    );
}