import React from "react";
import './styles.css'
import { Card } from 'primereact/card';
import ToobarProfissionalDeSaude from "../../ProfissionalDeSaude/ToobarProfissionalDeSaude";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { useState, useEffect } from 'react';
import MaterialService from "../../../services/MaterialService";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

export default function Crud() {

    var configBotao = "pi pi-plus-circle p-mb-3 p-col-3";
    var largura = window. screen. width;
    if (largura < 640){
        configBotao = "pi pi-plus-circle p-mt-3 ";
    }
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

    function deletar() {
        // deletar pelo ID
        teste();
        // realizar post
    }

    function teste() {
        console.log(' O nome do arquivo é: ' + nomeDoArquivo + ' nome da capa: ' + nomeDaCapa  + ' id: '  + id + ' categoria: ' + categoria + ' nome: '  + nomeMaterial);
    }

    return (

        <div> <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>

            <Card title="MATERIAIS DE APOIO"></Card>

            <Card>
            <Button className={configBotao} label=" NOVO MATERIAL "  onClick={() => { history.push('/material/create') }} />
            </Card>

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
                                                <Button  className="p-button-danger pi pi-trash " onClick={deletar} > DELETE </Button>
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