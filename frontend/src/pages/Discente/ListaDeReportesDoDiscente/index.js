
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReporteService from '../../../services/ReporteService';
import ToobarDiscente from '../ToobarDiscente';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../../../Components/BotaoVoltar';

export default function ListaDeReportesDoDiscente() {

    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "pi pi-bell";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded pi pi-bell";
    }

    let emptyReporte = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();
    const id = localStorage.getItem('id');
    const [reportes, setReportes] = useState([])
    const allReportes = () => {
        ReporteService.getReporte().then((response) => {
            const aux = response.data;
            const filtro = aux.filter((value) => value.idReportante == id);
            setReportes(filtro)
        });
        {
            reportes.map((reporte, key) => {
            })

        }
    };

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
        // history.goBack();
        history.push('/discente/visualizarReporte/' + reporte.id)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnVisualizar} onClick={() => visualizarReporte(rowData)} > {btnVisualizarTexto} </Button>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por discentes</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );


    return (
        <div  > <ToobarDiscente></ToobarDiscente>
            <div>
                <Card title="REPORTES REALIZADOS" ></Card>
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
                                        <Column field="descrisao" header="Descrisão" sortable ></Column>

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



