import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReporteService from '../../services/ReporteService';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';

export default function ListaDeReportesComponente(props) {

    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded ";
    }

    let emptyReporte = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();

    const [reportes, setReportes] = useState([])
    const allReportes = () => {
        ReporteService.getReporte().then((response) => {
            setReportes(response.data)
        });
    };
    {
        reportes.map((reporte, key) => {
            // console.log({ reportes });
        })

    }

    useEffect(() => {
        allReportes()

    }, [])

    const [reporte, setReporte] = useState(emptyReporte);
    const [selectedReportes, setSelectedReportes] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const visualizarReporte = (reporte) => {
        setReporte(reporte);
        const usuario = props.data;
        history.push('/' + usuario + '/visualizarReporte/' + reporte.id)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    className={configBtnVisualizar}
                    label={btnVisualizarTexto}
                    icon='pi pi-bell' onClick={() => visualizarReporte(rowData)}>
                </Button>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por reportes</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (
        <div>
            <div>
                <Card title="REPORTES" ></Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <Toast ref={toast} />
                                <div className="card">
                                    <DataTable ref={dt} value={reportes} selection={selectedReportes} onSelectionChange={(e) => setSelectedReportes(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="data" header="Data" sortable ></Column>
                                        <Column field="discente" header="Discente" sortable ></Column>
                                        <Column field="curso" header="Curso" sortable ></Column>
                                        <Column field="periodo" header="Periodo" sortable ></Column>
                                        <Column field="descrisao" header="Descrição" sortable ></Column>

                                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                                    </DataTable>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Card>
            </div>

        </div>
    )
}



