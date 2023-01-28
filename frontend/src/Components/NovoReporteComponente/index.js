import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import URL from '../../services/URL';
import BotaoVoltar from '../BotaoVoltar';

export default function NovoReporteComponente(props) {
    const history = useHistory();
    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'Enviado com Sucesso!',
            detail: 'Obrigado',
            life: 5000
        });
    }
    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Não foi possivel Enviar!',
            detail: 'Verifique  se todos os campos foram preenchidos.',
            life: 5000
        });
    }

    const [campus, setCampus] = useState(null); //campus = singular, campi = plural
    const [campi, setCampi] = useState();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [cursos, setCursos] = useState([]);
    const [descrisao, setDescrisao] = useState('');
    const [periodo, setPeriodos] = useState('1º');
    const periodos = [
        { name: '1º' },
        { name: '2º' },
        { name: '3º' },
        { name: 'Outro' },
        { name: 'Superior' },
    ];
    const [suicidio, setSuicidio] = useState('NÂO');
    const tentouSuicidio = [
        { name: 'SIM' },
        { name: 'NÂO' },
    ];

    const [nomeObrigatorio, setNomeObrigatorio] = useState();
    const [cursoObrigatorio, setCursoObrigatorio] = useState();
    const [campusObrigatorio, setCampusObrigatorio] = useState();
    const [periodoObrigatorio, setPeriodoObrigatorio] = useState();
    const [suicidioObrigatorio, setSuicidioObrigatorio] = useState();
    const [descrisaoObrigatoria, setDescrisaoObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');

    useEffect(async () => { //cursos
        var lista = [];
        const cursosIFPB = URL.getDominio() + "/curso/listarCursosPorCampus";
        axios.get(cursosIFPB)
            .then(Response => {
                var dataCurso = Response.data;
                dataCurso.forEach(item => {
                    lista.push(item);
                });

                lista = lista.map(
                    (elementoCurso) => {
                        return {
                            label: elementoCurso,
                            value: elementoCurso
                        }
                    }
                ).sort((a, b) => a.label.localeCompare(b.label));

                setCursos(lista);
            })
            .catch(error => console.log(error))

    }, [campus]);

    useEffect(async () => { //campus
        var lista = [];
        const campus = URL.getDominio() + "/curso/listarCampus";
        axios.get(campus)
            .then(Response => {
                var dataCampus = Response.data;
                dataCampus.forEach(item => {
                    lista.push(item);
                });

                lista = lista.map(
                    (elementoCampus) => {
                        return {
                            label: elementoCampus,
                            value: elementoCampus
                        }
                    }
                ).sort((a, b) => a.label.localeCompare(b.label));
                setCampi(lista);

            })
            .catch(error => console.log(error))

    }, []);

    // useEffect(async () => { //enviar campus para o servidor
    //     const headers = {
    //         'headers': {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     }

    //     if (!nome == null) {
    //         axios.post(URL.getDominio() + "/curso/definirCampus", campus, headers)
    //             .then(Response => { })
    //             .catch(error => console.log(error))
    //     }


    // }, [campus]);

    function validar() {
        var valido = true;

        if (nome == null || nome == '') {
            setNomeObrigatorio(invalid);
            valido = false;
        }

        if (curso == null || curso == '') {
            setCursoObrigatorio(invalid);
            valido = false;
        }

        if (campus == null || campus == '') {
            setCampusObrigatorio(invalid);
            valido = false;
        }

        if (periodo.name == null) {
            setPeriodoObrigatorio(invalid);
            valido = false;
        }

        if (suicidio.name == null) {
            setSuicidioObrigatorio(invalid);
            valido = false;
        }

        if (descrisao == '') {
            setDescrisaoObrigatorio(invalid);
            valido = false;
        }

        return valido;
    }

    async function submeter() {
        if (validar()) {
            var tentativaDeSuicidio = false;
            if (suicidio.name == "SIM") {
                tentativaDeSuicidio = true;
            }
            let idReportante = localStorage.getItem('id');
            if (localStorage.getItem('id') == null) {
                idReportante = localStorage.getItem('idServidor');
            }

            const novoReporte =
            {
                "discente": nome,
                "curso": curso,
                "campus": campus,
                "periodo": periodo.name,
                "descrisao": descrisao,
                "tentativaDeSuicidio": tentativaDeSuicidio,
                "idReportante": idReportante
            }
            const headers = {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }

            axios.post(URL.getDominio() + "/reporte/salvarReporte", novoReporte, headers)
                .then(Response => { })
                .catch(error => console.log(error))
            showSuccess();
        }
        else {
            showError();
        }

    }

    return (
        <div>
            <Toast ref={toast} />
            <Card title="REPORTAR CASO DE VULNERABILIDADE MENTAL"></Card>
            <Card>
                <BotaoVoltar></BotaoVoltar>
                <Button className={'p-ml-3'} label="SALVAR" onClick={submeter} />
            </Card>
            <Card >
                <Card subTitle='DISCENTE' >
                    <InputText className={nomeObrigatorio} value={nome} onChange={(e) => setNome(e.target.value)} />
                </Card>
                <Card subTitle='CAMPUS' >
                    <Dropdown className={campusObrigatorio} value={campus} options={campi} onChange={(e) => setCampus(e.value)} placeholder="Escolha um campus" />
                </Card>
                <Card subTitle='CURSO' >
                    <Dropdown className={cursoObrigatorio} value={curso} options={cursos} onChange={(e) => setCurso(e.value)} placeholder="Escolha um curso" />
                </Card>
                <Card subTitle='ANO / PERÍODO' >
                    <Dropdown className={periodoObrigatorio} optionLabel="name" value={periodo} options={periodos} onChange={(e) => setPeriodos(e.target.value)} placeholder="Não se aplica" />
                </Card>
                <Card subTitle='JÁ TENTOU SUICÍDIO?' >
                    <Dropdown className={suicidioObrigatorio} optionLabel="name" value={suicidio} options={tentouSuicidio} onChange={(e) => setSuicidio(e.target.value)} placeholder="Não se aplica" />
                </Card>
                <Card subTitle='DESCRIÇÃO' >
                    <InputTextarea className={descrisaoObrigatoria} rows={5} cols={30} value={descrisao} onChange={(e) => setDescrisao(e.target.value)} />
                </Card>
            </Card>
        </div>

    );
}
