import React from "react";
import './styles.css'
import { useState, useEffect } from 'react';
import MaterialService from "../../../services/MaterialService";
import { Card } from 'primereact/card';
import ToobarPublica from "../../Publica/ToobarPublica";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

export default function MateriaisOnline() {

    const history = useHistory();
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

    let nomeDoArquivo;
    let nomeMaterial;
    let nomeDaCapa;
    let categoria;
    let id;

    let setDadosMaterial = (rowData) => {
        nomeDoArquivo = rowData.nomeDoArquivo;
        nomeMaterial = rowData.nome;
        nomeDaCapa = rowData.nomeDaCapa;
        categoria = rowData.categoria;
        id = rowData.id;
        
        return rowData.nomeDoArquivo;
    }

    function download() {
        
        window.open('http://localhost:8080/file/files/' +  nomeDoArquivo);
    }

    function teste() {
        console.log(' O nome do arquivo é: ' + nomeDoArquivo + ' nome da capa: ' + nomeDaCapa  + ' id: '  + id + ' categoria: ' + categoria + ' nome: '  + nomeMaterial);
    }

    return (

        <div> <ToobarPublica></ToobarPublica>

            <Card title="MATERIAIS DE APOIO"></Card>
            <div>
                <Card>
                    <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={materiais} responsiveLayout="scroll" >

                                <Column field="nome" header="Nome" sortable></Column>

                                <Column field="categoria" header="Categoria" body={setDadosMaterial} sortable ></Column>

                                <Column field="" header="Arquivo" 
                                    body={
                                        <Card>
                                            <Card>
                                                <Button onClick={download} >DOWNLOAD</Button>
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

    );
}