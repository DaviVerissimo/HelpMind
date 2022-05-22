import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import QuestionarioService from '../../../services/QuestionarioService';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function ListaQuestionarioAnsiedadeDeBeck(){
    const [QuestionarioAnsiedadeDeBeck, setQuestionarioAnsiedadeDeBeck] = useState([])
    const allQuestionarioAnsiedadeDeBeck = () => {
        QuestionarioService.getListaQuestionarioAnsiedadeBeck().then((response) => {
            setQuestionarioAnsiedadeDeBeck(response.data)
            // console.log(response.data);
        });
    };
    {
        QuestionarioAnsiedadeDeBeck.map((QuestionarioAnsiedadeDeBeck, key) => {
            // console.log({ reportes });
        })

    }

    useEffect(() => {
        allQuestionarioAnsiedadeDeBeck()

    }, [])

    return (
        <div  > <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <div>
                <Card title="QUESTIONÁRIOS ANSIEDADE DE BECK" ></Card>
                <Card>
                    <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={QuestionarioAnsiedadeDeBeck} responsiveLayout="scroll">
                                {/* <Column field="nome" header="Discente" sortable ></Column> */}
                                <Column field="data" header="Data" sortable ></Column>
                                <Column field="id" header="ID" sortable ></Column>
                                <Column field="nota" header="Nota" sortable ></Column>
                                <Column field="status" header="Status" sortable ></Column>
                                {/* <Column field="matricula" header="Matricula" sortable ></Column> */}
                                {/* <Column field="curso" header="Curso" sortable ></Column> */}
                                {/* <Column field="campusDoDiscente" header="Campus" sortable ></Column> */}
                                {/* <Column field="email" header="Email" sortable ></Column> */}

                                
                                {/* <Column field="periodo" header="Periodo" sortable ></Column>
                                <Column field="idade" header="Idade" sortable ></Column>
                                <Column field="cidade" header="Cidade" sortable ></Column>
                                <Column field="zonaHurbanaRural_op" header="Zona" sortable ></Column>
                                <Column field="estadoCivil" header="Estado Civil" sortable ></Column>
                                <Column field="comQuemVive" header="Com Quem Vive" sortable ></Column>
                                <Column field="rendaFamiliar" header="Renda Familiar" sortable ></Column>
                                <Column field="cor" header="Cor" sortable ></Column>
                                <Column field="genero" header="Gênero" sortable ></Column>
                                <Column field="ingressantePorVagaDeCota" header="Ingressante Por Vaga De Cota" sortable ></Column>
                                <Column field="cotista_op" header="Cotista" sortable ></Column>
                                <Column field="pessoaDeficiente" header="Deficiente" sortable ></Column>
                                <Column field="deficiencia_op_tipo" header="Deficiência" sortable ></Column>
                                <Column field="usoBebidaAlcoolica" header="Uso De Bebida alcoólica" sortable ></Column>
                                <Column field="bullyng" header="Bullying" sortable ></Column>
                                <Column field="resideComPortadorDeProblemaMental" header="Reside Com Portador De Problema Mental" sortable ></Column>
                                <Column field="discenteSofrimentoMental" header="Discente Sofrimento Mental" sortable ></Column>
                                <Column field="diaguinostico_op" header="Outro Diaguinostico" sortable ></Column>
                                <Column field="problemaPsifico_op" header="problema Psíquico" sortable ></Column>
                                <Column field="psicotropico" header="psicotrópico" sortable ></Column>
                                <Column field="interesseAjudaPsicologica" header="Interesse Ajuda Psicológica" sortable ></Column>
                                <Column field="beneficio" header="Beneficiado Com Algum Bolsa Ou Programa De Assistência Estudantil Do IFPB" sortable ></Column>
                                <Column field="beneficio_op" header="Outro benefício" sortable ></Column>
                                <Column field="domicilio" header="Domicílio" sortable ></Column>
                                <Column field="quantidadeComodos_op" header="Quantidade Comodos" sortable ></Column>
                                <Column field="doencaGrave" header="Doença Grave" sortable ></Column>
                                <Column field="doencaGraveDiscente_op" header="Doença Grave Espercificada" sortable ></Column>
                                <Column field="possuiFamiliarComDoencaGrave" header="Possui Familiar Com Doença Grave" sortable ></Column>
                                <Column field="familiarDoente" header="Familiar Doente" sortable ></Column>
                                <Column field="doencaDoFamiliar_op" header="Doença do familiar Espercificada" sortable ></Column> */}
                                <Column field="" header=""
                                    body={
                                        <Card>
                                            <Card>
                                                <Button className="p-mb-5  p-mr-3 p-col-0" label="VISUALIZAR" icon="pi pi-file" />
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
