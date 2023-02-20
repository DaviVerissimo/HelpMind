import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import DiscenteService from '../../services/DiscenteService';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';

export default function ListaDiscentesAumentoComponente(props) {

    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded ";
    }

    let emptyDiscente = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();
    const [discentes, setDiscentes] = useState([])
    const allDiscentes = () => {
        DiscenteService.getDiscentesComAumentoVulnerabilidadeEmocional().then((response) => {
            setDiscentes(response.data)
            // console.log(response.data);
        });
    };
    {
        discentes.map((Discente, key) => {
            // console.log({ reportes });
        })

    }

    useEffect(() => {
        allDiscentes()

    }, [])

    const [discente, setDiscente] = useState(emptyDiscente);
    const [selectedDiscentes, setSelectedDiscentes] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const visualizarPerfil = (discente) => {
        setDiscente(discente);
        const usuario = props.data;
        history.push('/' + usuario + '/PerfilDiscenteDetalhado/' + discente.id)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    className={configBtnVisualizar}
                    label={btnVisualizarTexto}
                    icon='pi pi-user'
                    onClick={() => visualizarPerfil(rowData)}>
                </Button>
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
        <div>
            <div>
                <Card title="DISCENTES COM AUMENTO NA VULNERABILIDADE EMOCIONAL" ></Card>
                <Card>
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <Toast ref={toast} />
                                <div className="card">
                                    <DataTable ref={dt} value={discentes} selection={selectedDiscentes} onSelectionChange={(e) => setSelectedDiscentes(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="nome" header="Discente" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="curso" header="Curso" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="statusDoDiscenteAnsiedade" header="Ansiedade" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="statusDoDiscenteDepresao" header="Depressão" sortable style={{ minWidth: '12rem' }}></Column>

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
