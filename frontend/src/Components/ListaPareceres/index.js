
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ParescerPsicologicoService from '../../services/ParescerPsicologicoService';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function ListaPareceres() {
    
    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "pi pi-bell";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded pi pi-bell";
    }

    let emptyParescer = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();
    const id = localStorage.getItem('id');
    const [pareceres, setPareceres] = useState([])
    const allPareceres = () => {
        ParescerPsicologicoService.getAllPareceresPsicologico().then((response) => {
            // const aux = response.data;
            // const filtro = aux.filter((value) => value.idReportante == id);
            // setProntuarios(filtro)
            setPareceres(response.data)
        });
        {
            pareceres.map((prontuario, key) => {
            })

        }
    };

    useEffect(() => {
        allPareceres()

    }, [])

    const [parescer, setParecer] = useState(emptyParescer);
    const [selectedPareceres, setSelectedPareceres] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const visualizarPareceres = (parecer) => {
        setParecer(parecer);
        history.goBack();
        // history.push('/discente/visualizarReporte/' + prontuario.id)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnVisualizar} onClick={() => visualizarPareceres(rowData)} > {btnVisualizarTexto} </Button>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por pareceres psicólogicos</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );


    return (
        <div  > 
            <div>
                <Card title="LISTA DE PARECERES PSICÓLOGICOS" ></Card>
                <Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <Toast ref={toast} />
                                <div className="card">
                                    <DataTable ref={dt} value={pareceres} selection={selectedPareceres} onSelectionChange={(e) => setSelectedPareceres(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="data" header="Data" sortable ></Column>
                                        <Column field="discente" header="Discente" sortable ></Column>
                                        <Column field="email" header="Email" sortable ></Column>
                                        {/* <Column field="periodo" header="Periodo" sortable ></Column>
                                        <Column field="campus" header="Campus" sortable ></Column> */}
                                        <Column field="parescerPsicologico" header="Parescer do psicólogo" sortable ></Column>
                                        

                                        {/* <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column> */}
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


