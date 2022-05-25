import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import DiscenteService from '../../../services/DiscenteService';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ListaDiscentes(){
    const history = useHistory();
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

    useEffect(() => {
        allDiscentes()

    }, [])

    return (
        <div  > <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <div>
                <Card title="DISCENTES" ></Card>
                <Card>
                    <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={discentes} responsiveLayout="scroll">
                                <Column field="nome" header="Discente" sortable ></Column>
                                {/* <Column field="data" header="Data" sortable ></Column>
                                <Column field="id" header="ID" sortable ></Column>
                                <Column field="nota" header="Nota" sortable ></Column>
                                <Column field="status" header="Status" sortable ></Column> */}
                                <Column field="" header=""
                                    body={
                                        <Card>
                                            <Card>
                                                <Button className="" label="VISUALIZAR" icon="pi pi-user" onClick={() => { history.push('/profissionalDeSaude/PerfilDiscenteDetalhado') }} />
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
