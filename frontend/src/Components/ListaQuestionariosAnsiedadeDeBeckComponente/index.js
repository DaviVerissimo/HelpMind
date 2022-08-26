import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import QuestionarioService from '../../services/QuestionarioService';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';

export default function ListaQuestionariosAnsiedadeDeBeckComponente(props) {

    const { id } = useParams();
    var btnVisualizarTexto = 'VISUALIZAR'
    var configBtnVisualizar = "pi pi-file";
    var largura = window.screen.width;

    if (largura < 640) {
        btnVisualizarTexto = ''
        configBtnVisualizar = "p-button-rounded pi pi-user";
    }

    let emptyQuestionario = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();
    const [QuestionariosAnsiedadeDeBeck, setQuestionariosAnsiedadeDeBeck] = useState([])
    const allQuestionariosAnsiedadeDeBeck = () => {
        QuestionarioService.getQuestionariosAnsiedadePorId(id).then((response) => {
            setQuestionariosAnsiedadeDeBeck(response.data)
            // console.log(response.data);
        });
    };
    {
        QuestionariosAnsiedadeDeBeck.map((QuestionarioAnsiedadeDeBeck, key) => {
            // console.log({ reportes });
        })

    }

    useEffect(() => {
        allQuestionariosAnsiedadeDeBeck()

    }, [])

    const [questionario, setQuestionario] = useState(emptyQuestionario);
    const [selectedQuestionarios, setSelectedQuestionarios] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);

    const visualizarQuestionario = (questionario) => {
        setQuestionario(questionario);
        history.goBack();
        const usuario = props.data;
        history.push('/' + usuario + '/VisualizarQuestionarioDeAnsiedadeDeBeck/' + questionario.id)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnVisualizar} onClick={() => visualizarQuestionario(rowData)} > {btnVisualizarTexto} </Button>
            </React.Fragment>
        );
    }

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
                <Card title="QUESTIONÁRIOS ANSIEDADE DE BECK" ></Card>
                <Card>
                    <Card>
                        <BotaoVoltar></BotaoVoltar>
                    </Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <div className="card">
                                    <DataTable ref={dt} value={QuestionariosAnsiedadeDeBeck} selection={selectedQuestionarios} onSelectionChange={(e) => setSelectedQuestionarios(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="data" header="Data" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="status" header="Status" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="nota" header="Nota" sortable style={{ minWidth: '12rem' }}></Column>


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
