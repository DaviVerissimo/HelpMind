
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
    var largura = window.screen.width;

    if (largura < 640) {
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
        window.open('http://localhost:8080/file/files/' + material.nomeDoArquivo);
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnDownload} onClick={() => download(rowData)} > {btnDownloadTexto} </Button>
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

                    <Card title='Saúde mental na escola!'
                        subTitle='
        Segundo Sousa et al. (2017), os problemas percebidos no ambiente educacional constituem um importante 
        fator precipitante para o adoecimento mental e para o suicídio na infância e na adolescência. Os autores 
        elencam como situações-problemas relacionadas à instituição educacional: o bullying, o abandono escolar, 
        as crises disciplinares e as dificuldades de interação social e convívio. Registram ainda que as crianças 
        e os adolescentes que evoluíram ao suicídio apresentaram, em algum momento da vida educacional, sinais como: 
        queda no rendimento; desencorajamento; dificuldade de relacionamento com a turma e os professores; e apatia 
        para com o curso, os professores ou a instituição.
     Percebe-se, portanto, que, quando o adolescente não
      se sente parte integrante da instituição de ensino, pode vir a desenvolver sinais de irritabilidade, desprazer, 
      desorganização, desinteresse e, possivelmente, desencadear prejuízos de cunho emocional, mental e social.
     Para Padovani et al. (2014), devido à vulnerabilidade em que se encontram os adolescentes no espaço educacional, 
     há a necessidade de promover a atenção à sua saúde mental, desenvolvendo programas de intervenção que contemplem 
     as suas necessidades e que visem à permanência na instituição.
     Nos setores de saúde e ambulatórios, as atividades de promoção da saúde do estudante visam à redução dos chamados 
     espaços e meios de vulnerabilidades de ordem individual, social e institucional. 
     É fundamental que a equipe esteja preparada para o acolhimento, que compreende desde a ciência do estudante que 
     se encontra com queixas em saúde mental até a escuta, anamnese, triagem, encaminhamento, ações e orientações.
        '
                    ></Card>

                    <Card title='O acolhimento!' subTitle='Segundo o Ministério da Saúde, o acolhimento é uma das diretrizes da 
        Política Nacional de Humanização e pode ser realizada por qualquer profissional em qualquer local e hora. O acolhimento 
        é uma postura ética que consiste na escuta do usuário em seus anseios, no reconhecimento do seu protagonismo no processo 
        saúde-doença e na responsabilização pela resolução por meio da ativação de redes de compartilhamento de saberes (BRASIL, 2015).
        Estamos juntos! 
      Tendo em vista as questões de saúde trazidas para o âmbito escolar que se pensou nesta plataforma de instrução e orientação ao acolhimento
       e triagem em saúde mental. Esperamos que você possa se apropriar do mesmo tendo em vista a necessidade de uma abordagem mais efetiva e humana, 
       norteadora de ações e de acolhimento. ' ></Card>
                </Card>
            </div>

        </div>

    );
}