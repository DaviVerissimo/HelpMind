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
    const [btnTextoAddpermissaoProfSaude, setBtnTextoAddpermissaoProfSaude] = useState('ADICIONAR PERMISSÃO PROF DE SAÚDE');
    const [btnTextoAddpermissaoPsicologo, setBtnTextoAddpermissaoPsicologo] = useState('ADICIONAR PERMISSÃO PSICOLOGO');
    const [btnTextoRemoverpermissaoProfSaude, setBtnTextoRemoverpermissaoProfSaude] = useState('REMOVER PERMISSÃO PROF DE SAÚDE');
    const [btnTextoRemoverpermissaoPsicologo, setBtnTextoRemoverpermissaoPsicologo] = useState('REMOVER PERMISSÃO PSICOLOGO');
    const [estadoPositivo, setEstadoPositivo] = useState('');
    const [estadoNegativo, setEstadoNegativo] = useState('p-button-danger');

    let emptyServidores = {
        id: null,
        nome: '',
        Curso: null,
    };

    const history = useHistory();
    const location = useLocation();
    const [servidores, setServidores] = useState([]);

    const allServidores = () => {
        ServidorService.getAllServidor().then((response) => {
            setServidores(response.data);
        });
    };

    useEffect(() => {
        allServidores();
    }, []);

    const [servidor, setServidor] = useState(emptyServidores);
    const [selectedServidores, setSelectedServidores] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const definirAcessoProfSaude = (servidor) => {
        setServidor(servidor);

        if (servidor.permissaoDeAcessoProfissionalDeSaude) {
            ServidorService.getRemoverAcessoProfSaude(servidor.id);
            showError();
            allServidores();
        } else {
            ServidorService.getConcederAcessoProfSaude(servidor.id);
            showSuccess();
            allServidores();
        }
    }

    const acessarPerfilServidor = (servidor) => {
        const servidorStr = JSON.stringify(servidor);
        localStorage.setItem('servidorPerfilEdit', servidorStr)
        history.push('/Admin/perfilServidor')
    }

    const definirAcessoPsicologo = (servidor) => {
        setServidor(servidor);

        if (servidor.permissaoDeAcessoPsicologo) {
            ServidorService.getRemoverAcessoPsicologo(servidor.id);
            showError();
            allServidores();
        } else {
            ServidorService.getConcederAcessoPsicologo(servidor.id);
            showSuccess();
            allServidores();
        }
    }

    const actionBodyTemplate1 = (rowData) => {
        let estado;
        let texto;

        if (rowData.permissaoDeAcessoProfissionalDeSaude) {
            estado = estadoNegativo;
            texto = btnTextoRemoverpermissaoProfSaude;
        } else {
            estado = estadoPositivo;
            texto = btnTextoAddpermissaoProfSaude;
        }

        return (
            <React.Fragment>
                <Button className={estado} label={texto} onClick={() => definirAcessoProfSaude(rowData)} />
            </React.Fragment>
        );
    }

    const actionBodyTemplate2 = (rowData) => {
        let estado;
        let texto;

        if (rowData.permissaoDeAcessoPsicologo) {
            estado = estadoNegativo;
            texto = btnTextoRemoverpermissaoPsicologo;
        } else {
            estado = estadoPositivo;
            texto = btnTextoAddpermissaoPsicologo;
        }

        return (
            <React.Fragment>
                <Button className={estado} label={texto} onClick={() => definirAcessoPsicologo(rowData)} />
            </React.Fragment>
        );
    }

    const actionBodyTemplate3 = (rowData) => {
        // let estado;
        // let texto;

        // if (rowData.permissaoDeAcessoProfissionalDeSaude) {
        //     estado = estadoNegativo;
        //     texto = btnTextoRemoverpermissaoProfSaude;
        // } else {
        //     estado = estadoPositivo;
        //     texto = btnTextoAddpermissaoProfSaude;
        // }

        return (
            <React.Fragment>
                <Button label={'ACESSAR'} icon={'pi pi-user-plus'} onClick={() => acessarPerfilServidor(rowData)} />
            </React.Fragment>
        );
    }

    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'ACESSO REMOVIDO!',
            detail: 'Servidor desautorizado.',
            life: 7000
        });
    }

    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'ACESSO CONCEDIDO!',
            detail: 'Servidor autorizado',
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
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card>
                    <div>
                        <Card>
                            <div className="datatable-crud-demo">
                                <Toast ref={toast} />
                                <div className="card">
                                    {/* <Toolbar className="mb-4" ></Toolbar> */}
                                    <DataTable
                                        ref={dt}
                                        value={servidores}
                                        selection={selectedServidores}
                                        onSelectionChange={(e) => setSelectedServidores(e.value)}
                                        dataKey="id"
                                        globalFilter={globalFilter}
                                        header={header}
                                        responsiveLayout="scroll"
                                    >
                                        <Column field="nome" header="Servidor" sortable style={{ minWidth: '12rem' }}></Column>
                                        <Column field="email" header="Email" sortable style={{ minWidth: '12rem' }}></Column>
                                        {/* <Column
                                            body={actionBodyTemplate1}
                                            exportable={false}
                                            header="Profissional de saúde"
                                            sortable
                                            style={{ minWidth: '8rem' }}
                                        ></Column>
                                        <Column
                                            body={actionBodyTemplate2}
                                            exportable={false}
                                            header="Psicólogo"
                                            sortable
                                            style={{ minWidth: '8rem' }}
                                        ></Column> */}
                                        <Column
                                            body={actionBodyTemplate3}
                                            exportable={false}
                                            header=""
                                            style={{ minWidth: '8rem' }}
                                        ></Column>
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
