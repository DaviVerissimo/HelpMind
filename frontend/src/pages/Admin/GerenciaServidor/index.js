
import ToobarAdmin from '../ToobarAdmin';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Toolbar } from 'primereact/toolbar';
import ServidorService from '../../../services/ServidorService';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../../../Components/BotaoVoltar';

export default function GerenciaServidor() {

    var btnTextoAddpermissaoProfSaude = 'ADICIONAR PERMISSÃO PROF DE SAÚDE'
    var btnTextoAddpermissaoPsicologo = 'ADICIONAR PERMISSÃO PSICOLOGO'
    var btnTextoRemoverpermissaoProfSaude = 'REMOVER PERMISSÃO PROF DE SAÚDE'
    var btnTextoRemoverpermissaoPsicologo = 'REMOVER PERMISSÃO PSICOLOGO'
    var estadoPositivo = '';
    var estadoNegativo = "p-button-danger";

    let emptyServidores = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();
    const [servidores, setServidores] = useState([])
    const allServidores = () => {
        ServidorService.getAllServidor().then((response) => {
            setServidores(response.data)
            // console.log(response.data);
        });
    };
    {
        servidores.map((Discente, key) => {
            // console.log({ reportes });
        })

    }

    useEffect(() => {
        allServidores()

    }, [])

    const [servidor, setServidor] = useState(emptyServidores);
    const [selectedServidores, setSelectedServidores] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const definirAcessoProfSaude = (servidor) => {
        setServidor(servidor);

        if (servidor.permissaoDeAcessoProfissionalDeSaude == true) {
            ServidorService.getRemoverAcessoProfSaude(servidor.id)
            showError();
            allServidores();
        }
        if (servidor.permissaoDeAcessoProfissionalDeSaude == false) {
            ServidorService.getConcederAcessoProfSaude(servidor.id)
            showSuccess();
            allServidores();
        }

    }

    const definirAcessoPsicologo = (servidor) => {
        setServidor(servidor);

        if (servidor.permissaoDeAcessoPsicologo == true) {
            ServidorService.getRemoverAcessoPsicologo(servidor.id)
            showError();
            allServidores();
        }
        if (servidor.permissaoDeAcessoPsicologo == false) {
            ServidorService.getConcederAcessoPsicologo(servidor.id)
            showSuccess();
            allServidores();
        }

    }

    const actionBodyTemplate1 = (rowData) => {
        var estado;
        var texto;
        if (rowData.permissaoDeAcessoProfissionalDeSaude == true) {
            estado = estadoNegativo;
            texto = btnTextoRemoverpermissaoProfSaude;

        }
        if (rowData.permissaoDeAcessoProfissionalDeSaude == false) {
            estado = estadoPositivo;
            texto = btnTextoAddpermissaoProfSaude;
        }

        return (
            <React.Fragment>
                <Button className={estado} label={texto} onClick={() => definirAcessoProfSaude(rowData)} ></Button>
            </React.Fragment>
        );
    }

    const actionBodyTemplate2 = (rowData) => {
        var estado;
        var texto;

        if (rowData.permissaoDeAcessoPsicologo == true) {
            estado = estadoNegativo;
            texto = btnTextoRemoverpermissaoPsicologo;
        }
        if (rowData.permissaoDeAcessoPsicologo == false) {
            estado = estadoPositivo;
            texto = btnTextoAddpermissaoPsicologo;
        }

        return (
            <React.Fragment>
                <Button className={estado} label={texto} onClick={() => definirAcessoPsicologo(rowData)} ></Button>
            </React.Fragment>
        );
    }

    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'ACESSO REMOVIDO!',
            detail: 'Recarregue para ver mudança(s). ',
            life: 7000
        });
    }

    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'ACESSO CONCEDIDO!',
            detail: 'Recarregue para ver mudança(s). ',
            life: 7000
        });
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <BotaoVoltar></BotaoVoltar>
            </React.Fragment>
        )
    }

    const header = (
        <div className="table-header">

            <h5 className="mx-0 my-1">Pesquise por servidores</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <div>
                <Card title="SERVIDORES" ></Card>
                <Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <Toast ref={toast} />
                                <div className="card">
                                    <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>
                                    <DataTable ref={dt} value={servidores} selection={selectedServidores} onSelectionChange={(e) => setSelectedServidores(e.value)}
                                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                        <Column field="nome" header="Servidor" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="email" header="Email" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column body={actionBodyTemplate1} exportable={false} header="Profissional de saúde" sortable style={{ minWidth: '8rem' }}></Column>
                                        <Column body={actionBodyTemplate2} exportable={false} header="Psicólogo" sortable style={{ minWidth: '8rem' }}></Column>
                                    </DataTable>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Card>
            </div>
        </div>
    );
}