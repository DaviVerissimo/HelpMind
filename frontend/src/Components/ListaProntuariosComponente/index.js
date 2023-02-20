
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProntuarioService from '../../services/ProntuarioService';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';

export default function ListaProntuariosComponente(props) {

    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded ";
    }

    let emptyProntuario = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();
    const id = localStorage.getItem('id');
    const [prontuarios, setProntuarios] = useState([])
    const allProntuarios = () => {
        ProntuarioService.getAllProntuarios().then((response) => {
            setProntuarios(response.data)
        });
        {
            prontuarios.map((prontuario, key) => {
            })

        }
    };

    useEffect(() => {
        allProntuarios()

    }, [])

    const [prontuario, setProntuario] = useState(emptyProntuario);
    const [selectedProntuarios, setSelectedProntuarios] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const visualizarProntuario = (prontuario) => {
        setProntuario(prontuario);
        const usuario = props.data;
        history.push('/' + usuario + '/visualizarProntuarios/' + prontuario.id);
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    className={configBtnVisualizar}
                    label={btnVisualizarTexto}
                    icon='pi pi-file'
                    onClick={() => visualizarProntuario(rowData)} >
                </Button>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por prontuarios</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );


    return (
        <div>
            <div>
                <Card title="LISTA DE PRONTUÁRIOS" ></Card>
                <Card>
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <Toast ref={toast} />
                                <div className="card">
                                    <DataTable ref={dt} value={prontuarios} selection={selectedProntuarios} onSelectionChange={(e) => setSelectedProntuarios(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="data" header="Data" sortable ></Column>
                                        <Column field="discente" header="Discente" sortable ></Column>
                                        <Column field="acaoRealizada" header="Ação realizada" sortable ></Column>
                                        <Column field="curso" header="Curso" sortable ></Column>

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



