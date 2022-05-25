import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import QuestionarioService from '../../../services/QuestionarioService';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function ListaQuestionariosDepressaoDeBeck(){
    const [QuestionarioDepressaoDeBeck, setQuestionarioDepressaoDeBeck] = useState([])
    const allQuestionarioDepressaoDeBeck = () => {
        QuestionarioService.getListaQuestionarioDepressaoBeck().then((response) => {
            setQuestionarioDepressaoDeBeck(response.data)
            // console.log(response.data);
        });
    };
    {
        QuestionarioDepressaoDeBeck.map((QuestionarioDepressaoDeBeck, key) => {
            // console.log({ reportes });
        })

    }

    useEffect(() => {
        allQuestionarioDepressaoDeBeck()

    }, [])

    return (
        <div  > <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <div>
                <Card title="QUESTIONÁRIOS DEPRESSÃO DE BECK" ></Card>
                <Card>
                    <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={QuestionarioDepressaoDeBeck} responsiveLayout="scroll">
                                {/* <Column field="nome" header="Discente" sortable ></Column> */}
                                <Column field="data" header="Data" sortable ></Column>
                                <Column field="id" header="ID" sortable ></Column>
                                <Column field="nota" header="Nota" sortable ></Column>
                                <Column field="status" header="Status" sortable ></Column>
                                <Column field="" header=""
                                    body={
                                        <Card>
                                            <Card>
                                                <Button className="" label="VISUALIZAR" icon="pi pi-file" />
                                            </Card>
                                        </Card>
                                    }
                                ></Column>
                            </DataTable>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    )
}
