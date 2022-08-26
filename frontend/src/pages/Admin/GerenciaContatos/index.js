import './styles.css'
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ContatoService from '../../../services/ContatoService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import ToobarAdmin from '../ToobarAdmin';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../../../Components/BotaoVoltar';

export default function GerenciaContatos() {

    const history = useHistory();
    const location = useLocation();
    var btnDeleteTexto = 'DELETE'
    var btnEditTexto = 'EDITAR'
    var configBtnDelete = "p-button-danger pi pi-trash";
    var configBtnEdit = " p-mr-3 p-button-warning pi pi-pencil";
    var largura = window.screen.width;

    if (largura < 640) {
        btnDeleteTexto = ''
        configBtnDelete = "p-mt-3 p-button-danger p-button-rounded pi pi-trash";
        btnEditTexto = ''
        configBtnEdit = "p-button-warning  p-button-rounded pi pi-pencil";
    }

    let emptyContato = {
        id: null,
        nome: '',
        email: null,
        telefone: ''
    };

    const [contatos, setContatos] = useState([])
    const allContatos = () => {
        ContatoService.getAllContatos().then((response) => {
            setContatos(response.data)
        });
    };
    {
        contatos.map((material, key) => {
        })

    }

    useEffect(() => {
        allContatos()

    }, [])

    const [deleteContatoDialog, setDeleteContatoDialog] = useState(false);
    const [contato, setContato] = useState(emptyContato);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const hideDeleteProductDialog = () => {
        setDeleteContatoDialog(false);
    }

    const deleteContato = () => {
        ContatoService.getDeleteContato(contato.id);
        toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'O Contato ' + contato.nome + ' foi deletado! RECARREGUE PARA VER MUDANÇAS.', life: 5000 });
        setDeleteContatoDialog(false);
        allContatos();
    }

    const editar = (contato) => {
        history.goBack();
        history.push('/Admin/updateContato/' + contato.id)
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <BotaoVoltar></BotaoVoltar>
                <Button label="Novo Contato" icon="pi pi-plus" className="mr-2 p-ml-3" onClick={() => { history.push('/Admin/NovoContato') }} />
            </React.Fragment>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnEdit} onClick={() => editar(rowData)} > {btnEditTexto} </Button>
                <Button className={configBtnDelete} onClick={() => deletar(rowData)} > {btnDeleteTexto} </Button>

            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Manage Products</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const deleteMaterialDialogFooter = (
        <React.Fragment>
            <Button label="Não" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Sim" icon="pi pi-check" className="p-button-text" onClick={deleteContato} />
        </React.Fragment>
    );

    const deletar = (material) => {
        setContato(material);
        setDeleteContatoDialog(true)
    }

    return (

        <div> <ToobarAdmin></ToobarAdmin>

            <Card title="GERENCIA DE CONTATOS"></Card>

            <div>
                <div>
                    <Card>
                        <div className="datatable-crud-demo">
                            <Toast ref={toast} />

                            <div className="card">

                                <Toolbar className="mb-4" left={leftToolbarTemplate}
                                ></Toolbar>
                                <DataTable ref={dt} value={contatos} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id"
                                    globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                    <Column field="nome" header="Nome" sortable style={{ minWidth: '12rem' }}></Column>
                                    <Column field="telefone" header="Telefone" sortable style={{ minWidth: '12rem' }}></Column>
                                    <Column field="email" header="Email" sortable style={{ minWidth: '12rem' }}></Column>
                                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                                </DataTable>
                            </div>

                            <Dialog visible={deleteContatoDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteMaterialDialogFooter}>
                                <div className="confirmation-content">
                                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                    {<span> Deseja realmente deletar esse contato: {contato.nome}?  </span>}
                                </div>
                            </Dialog>

                        </div>
                    </Card>
                </div>
            </div>

        </div>

    );
}