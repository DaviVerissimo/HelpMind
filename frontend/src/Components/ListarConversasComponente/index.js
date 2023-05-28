import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import ConversaService from '../../services/ConversaService';
import { useHistory, useLocation,} from 'react-router-dom/cjs/react-router-dom.min';

export default function ListaConversasComponente(props) {
    const privado = props.privado;
    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded ";
    }

    let emptyMensagen = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();
    const [conversas, setConversas] = useState([])
    const ID = localStorage.getItem('idServidor');
    const allConversas = () => {
        if (localStorage.getItem('loginAdmin')) {
            ConversaService.getAllConversas().then((response) => {
                setConversas(response.data)
            });
        }
        if (localStorage.getItem('loginProfSaude')) {
            ConversaService.retornaConversasProfSaude(ID).then((response) => {
                setConversas(response.data)
            });
        }
        if (localStorage.getItem('loginPsicologo')) {
            ConversaService.retornaConversasPsicologo(ID).then((response) => {
                setConversas(response.data)
            });
        }

        if (localStorage.getItem('loginAdmin') && privado) {
            ConversaService.retornaConversasProfSaude(ID).then((response) => {
                setConversas(response.data)
            });
        }

    };
    {
        conversas.map((Discente, key) => {
            // console.log({ reportes });
        })

    }

    useEffect(() => {
        allConversas()

    }, [])

    const [conversa, setConversa] = useState(emptyMensagen);
    const [selectedConversas, setSelectedConversas] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const acessarConversa = (conversa) => {
        setConversa(conversa);
        const usuario = props.data;
        history.push('/' + usuario + '/conversa/' + conversa.id)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    className={configBtnVisualizar}
                    label={btnVisualizarTexto}
                    icon='pi pi-envelope'
                    onClick={() => acessarConversa(rowData)} >
                </Button>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por conversas</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (
        <div>
            <div>
                <Card title="MENSAGENS" ></Card>
                <Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <Toast ref={toast} />
                                <div className="card">
                                    <DataTable ref={dt} value={conversas} selection={selectedConversas} onSelectionChange={(e) => setSelectedConversas(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="nomeDiscente" header="Discente" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="nomePsicologo" header="Psicólogo" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="nomeProfSaude" header="Profissional de saúde" sortable style={{ minWidth: '12rem' }}></Column>

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
