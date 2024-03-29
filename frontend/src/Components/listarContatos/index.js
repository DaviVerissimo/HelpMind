import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ContatoService from '../../services/ContatoService';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';

export default function ListarContatos() {

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
    const campus = localStorage.getItem('campusComponente')
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

    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por contatos</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (

        <div>
            <Card title="CONTATOS"></Card>
            <div>
                <div>
                    <Card>
                        <div className="datatable-crud-demo">
                            <Toast ref={toast} />
                            <div className="card">
                                <DataTable ref={dt} value={contatos} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id"
                                    globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                    <Column field="nome" header="Nome" sortable style={{ minWidth: '12rem' }}></Column>
                                    <Column field="telefone" header="Telefone" sortable style={{ minWidth: '12rem' }}></Column>
                                    <Column field="email" header="Email" sortable style={{ minWidth: '12rem' }}></Column>
                                    <Column field="campus" header="Campus" sortable style={{ minWidth: '12rem' }}></Column>
                                </DataTable>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

        </div>

    );
}