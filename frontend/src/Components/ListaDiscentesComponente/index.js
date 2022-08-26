import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import DiscenteService from '../../services/DiscenteService';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function ListaDiscentesComponente(props) {

    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "pi pi-user";
    var largura = window.screen.width;
    const configBotaoAcessar = "p-button-danger p-button-rounded ";

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded pi pi-user";
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
        DiscenteService.getAllDiscente().then((response) => {
            setDiscentes(response.data)
            // console.log(response.data);
        });
    };
    {
        discentes.map((Discente, key) => {
            // console.log({ reportes });
        })

    }

    const [aumento, setAumento] = useState(false);
    const isAumento = () => {
        DiscenteService.isAumento().then((response) => {
            setAumento(response.data)
            console.log(response.data);
        });
    };
    // const vulneravel = isAumento;

    useEffect(() => {
        allDiscentes()
        
    }, [])

    useEffect(() => {
        isAumento()
        if(aumento){
            showError();
        }
        
    }, [aumento])


    const [discente, setDiscente] = useState(emptyDiscente);
    const [selectedDiscentes, setSelectedDiscentes] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const visualizarPerfil = (discente) => {
        setDiscente(discente);
        history.goBack();
        const usuario = props.data;
        history.push('/' + usuario + '/PerfilDiscenteDetalhado/' + discente.id)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnVisualizar} onClick={() => visualizarPerfil(rowData)} > {btnVisualizarTexto} </Button>
            </React.Fragment>
        );
    }

    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Foi detectado discente(s) com aumento nas notas de Ansiedade ou Depressão',
            detail: 'Verifique estes discentes pelo botão Acessar discentes em Vulnerabilidade. ',
            life: 7000
        });
    }

    function verificarAumento() { 
        const usuario = props.data;
        history.push('/' + usuario + '/ListaDiscentesComAumentoVulnerabilidade')
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
                <Card title="DISCENTES" ></Card>
                <Card>
                    <Button className={configBotaoAcessar} label="ACESSAR DISCENTES EM VULNERABILIDADE" onClick={verificarAumento} />
                </Card>
                <Card>
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
