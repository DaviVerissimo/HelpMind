import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import QuestionarioService from '../../services/QuestionarioService';
import { useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';

export default function ListaQuestionarioSocioeconomicoComponente(props) {
    const { id } = useParams();
    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "pi pi-file";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded pi pi-file";
    }

    let emptyQuestionario = {
        id: null,
        questao01: '',
        questao02: '',
    };

    const history = useHistory();
    const location = useLocation();

    const [QuestionarioSocioeconomico, setQuestionarioSocioeconomico] = useState([emptyQuestionario])
    const allQuestionarioSocioeconomico = () => {
        QuestionarioService.getListaQuestionarioSocioeconomicoPorId(id).then((response) => {
            setQuestionarioSocioeconomico(response.data)
            // console.log(response.data);
        });
    };
    {
        QuestionarioSocioeconomico.map((QuestionarioSocioeconomico, key) => {
            // console.log({ reportes });
        })

    }

    const [selectedQuestionario, setSelectedQuestionario] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const visualizarQuestionario = (questionario) => {
        history.goBack();
        const usuario = props.data;
        history.push('/' + usuario + '/VisualizarSocioeconomico/' + questionario.id)


    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnVisualizar} onClick={() => visualizarQuestionario(rowData)} > {btnVisualizarTexto} </Button>
            </React.Fragment>
        );
    }

    useEffect(() => {
        allQuestionarioSocioeconomico()

    }, [])

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por questionários</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (
        <div>
            <div>
                <Card title="QUESTIONÁRIOS SOCIOECONÔMICOS" ></Card>
                <Card>
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <div className="card">
                                    <DataTable ref={dt} value={QuestionarioSocioeconomico} selection={selectedQuestionario} onSelectionChange={(e) => setSelectedQuestionario(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="id" header="ID" sortable ></Column>
                                        <Column field="nome" header="Discente" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="curso" header="Curso" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="cidade" header="Cidade" sortable ></Column>
                                        <Column field="data" header="Data" sortable ></Column>

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
