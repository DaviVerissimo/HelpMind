import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EncaminhamentoService from '../../services/EncaminhamentoService';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';

export default function ListaDeEncaminhamentosDoDiscenteComponente(props) {

    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded ";
    }

    let emptyEncaminhamento = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const discenteStr = localStorage.getItem('discente');
    const discente = JSON.parse(discenteStr);
    const id = discente.id;
    const [encaminhamentos, setEncaminhamentos] = useState([])
    const allEncaminhamentos = () => {

        EncaminhamentoService.getEncaminhamentosDoDiscente(id).then((response) => {
            setEncaminhamentos(response.data)
        });
    };
    {
        encaminhamentos.map((reporte, key) => {

        })

    }

    useEffect(() => {
        allEncaminhamentos()

    }, [])

    const [encaminhamento, setEncaminhamento] = useState(emptyEncaminhamento);
    const [selectedEncaminhamentos, setSelectedEncaminhamentos] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const visualizarEncaminhamento = (encaminhamento) => {
        setEncaminhamento(encaminhamento);
        const usuario = props.data;
        history.push('/' + usuario + '/visualizarEncaminhamento/' + encaminhamento.id)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    className={configBtnVisualizar}
                    label={btnVisualizarTexto}
                    icon='pi pi-heart-fill'
                    onClick={() => visualizarEncaminhamento(rowData)}>
                </Button>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por encaminhamentos</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (
        <div>
            <div>
                <Card title="ENCAMINHAMENTOS" ></Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <Toast ref={toast} />
                                <div className="card">
                                    <DataTable ref={dt} value={encaminhamentos} selection={selectedEncaminhamentos} onSelectionChange={(e) => setSelectedEncaminhamentos(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="data" header="Data" sortable ></Column>
                                        <Column field="discente" header="Discente" sortable ></Column>
                                        <Column field="profSaude" header="Profissional de saúde" sortable ></Column>
                                        <Column field="psicologo" header="Psicólogo" sortable ></Column>
                                        <Column field="status" header="Status" sortable ></Column>

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



