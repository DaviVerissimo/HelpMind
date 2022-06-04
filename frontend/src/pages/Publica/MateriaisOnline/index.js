
import './styles.css'
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import MaterialService from '../../../services/MaterialService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import ToobarPublica from "../../Publica/ToobarPublica";

export default function MateriaisOnline() {

    var btnDownloadTexto = 'DOWNLOAD'
    var configBtnDownload = "pi pi-download";
    var largura = window. screen. width;
    
    if (largura < 640){
        btnDownloadTexto = ''
        configBtnDownload = "p-button-rounded pi pi-download";
    }

    let emptyMaterial = {
        id: null,
        nome: '',
        categoria: null,
        nomeDoArquivo: ''
    };

    const [materiais, setMateriais] = useState([])
    const allMaterial = () => {
        MaterialService.getMaterial().then((response) => {
            setMateriais(response.data)
        });
    };
    {
        materiais.map((material, key) => {
        })

    }

    useEffect(() => {
        allMaterial()

    }, [])

    const [material, setMaterial] = useState(emptyMaterial);
    const [selectedMaterias, setSelectedMateriais] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    const download = (material) => {
        setMaterial(material);
        window.open('http://localhost:8080/file/files/' +  material.nomeDoArquivo);
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnDownload} onClick={() =>download(rowData)} > {btnDownloadTexto} </Button>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Pesquise por materiais</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (

        <div> <ToobarPublica></ToobarPublica>

            <Card title="MATERIAIS DE APOIO"></Card>
            <div>
                <Card>
                <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">
                    <DataTable ref={dt} value={materiais} selection={selectedMaterias} onSelectionChange={(e) => setSelectedMateriais(e.value)}
                        dataKey="id" globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                        <Column field="nome" header="Nome" sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="categoria" header="Categoria" sortable style={{ minWidth: '12rem' }}></Column>

                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                    </DataTable>
                </div>
            </div>
                </Card>
            </div>

        </div>

    );
}