
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ParescerPsicologicoService from '../../services/ParescerPsicologicoService';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';

export default function GerenciaPareceresComponent(props) {

    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "p-mr-3 pi pi-file";
    var btnDeletarTexto = 'DELETAR'
    var configBtnDeletar = " p-button-danger pi pi-trash ";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-mr-3 p-button-rounded pi pi-file";
        btnDeletarTexto = ''
        configBtnDeletar = "p-mr-3 p-button-rounded p-button-danger pi pi-trash ";
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
//        history.goBack();
        const usuario = props.data;
        history.push('/' + usuario + '/visualizarParescer/' + parecer.id);
    }

    const deletarParescer = (prontuario) => {
        ParescerPsicologicoService.getDeleteParescerPsicologico(prontuario.id)
        toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'O Parescer Psicólogico ' + prontuario.discente + ' foi deletado! RECARREGUE PARA VER MUDANÇAS.', life: 5000 });
        allPareceres()
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnVisualizar} onClick={() => visualizarPareceres(rowData)} > {btnVisualizarTexto} </Button>
                <Button className={configBtnDeletar} onClick={() => deletarParescer(rowData)} > {btnDeletarTexto} </Button>
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
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
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
                                        {/* <Column field="parescerPsicologico" header="Parescer do psicólogo" sortable ></Column> */}

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



