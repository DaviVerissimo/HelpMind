

import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReporteService from '../../../services/ReporteService';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useStates } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ListaDeReportes() {

    // const [pesquisa, setPesquisa] = useState('');
    // const history = useHistory();
    // console.log('pesquisa = ' + pesquisa);
    const [reportes, setReportes] = useState([])
    const allReportes = () => {
        ReporteService.getReporte().then((response) => {
            setReportes(response.data)
            // console.log(response.data);
        });
    };
    {
        reportes.map((reporte, key) => {
            // console.log({ reportes });
        })

    }

    // implemetar atributo Date nos reportes com localDateTime e listar por data no front
    // perguntar a val se o sistema faz algum arlerta sobre se chegou o prazo de aplicar os questionarios aos discentes: ex passou 6 meses desde a ultima aplicação, o que fazer?, 
    // sistema marcar um alerta para que o prof de saude busque atualizar o preechimento dos questionarios por parte do discente?

    useEffect(() => {
        allReportes()

    }, [])


    // if (pesquisa == '' || pesquisa  == null ){
    //     console.log('entrou')
    // }

    // else{
    //     console.log('errou')
    // }

    return (
        <div  > <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <div className="quemSomos-container p-grid p-justify-center p-align-center p-component  p-dir-col " style={{ height: '100%' }} >
                <Card title="REPORTES" ></Card>
                {/* <Card >
                    <Button className="p-mb-0  p-mr-3 p-col-0" label="" icon="pi pi-search" onClick={() => { history.push('/discente/QuestionarioSocioeconomico')}} />
                    <InputText className='className="p-mb-5 p-mr-3 p-col-10 '  value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Pesquisar" ></InputText>
                </Card> */}

                <Card>
                    <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={reportes} responsiveLayout="scroll">
                                <Column field="discente" header="Discente" sortable ></Column>
                                <Column field="data" header="Data" sortable ></Column>
                                <Column field="id" header="ID" sortable ></Column>
                                <Column field="curso" header="Curso" sortable ></Column>
                                <Column field="campus" header="Campus" sortable ></Column>
                                <Column field="periodo" header="Periodo" sortable ></Column>
                                <Column field="tentativaDeSuicidio" header="Ten de Suicidio" sortable ></Column>
                                <Column field="descrisao" header="Descrisão" sortable ></Column>
                                <Column field="" header=""
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Button className="p-mb-5  p-mr-3 p-col-0" label="VISUALIZAR" icon="pi pi-file" />
                                                    {/* <Button className="p-mb-0  p-mr-3 p-col-0" label="SOLICITAR" icon="pi pi-book" /> */}
                                                </div>
                                            </Card>
                                        </div>
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



