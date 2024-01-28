import React, { useRef, useState, useEffect } from 'react';
import './styles.css'
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

export default function NovoProntuarioComponente() {

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
    
    //campus = singular, campi = plural
    const discenteStr = localStorage.getItem('discente');
    const discente = JSON.parse(discenteStr);
    const [nome, setNome] = useState(discente.nome);
    const [idDiscente, setIdDiscente] = useState(JSON.stringify(discente.id));
    const [idProfissionalDeSaude, setIdProfissionalDeSaude] = useState(localStorage.getItem('idServidor'));
    const [campus, setCampus] = useState(discente.campus); 
    const [curso, setCurso] = useState(discente.curso);
    const [parescer, setParescer] = useState('');
    const [periodo, setPeriodos] = useState(discente.periodo);
    const [acaoObrigatorio, setAcaoObrigatorio] = useState('NÂO');
    const destino = [
        { name: 'Psiclogo(a) do campus' },
        { name: 'Rede externa' },
    ];
    const [acaoRealizadaObrigatorio, setSuicidioObrigatorio] = useState();
    const [parecerObrigatoria, setDescrisaoObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');

    // useEffect(async () => { //cursos
    //     var lista = [];
    //     const cursosIFPB = URL.getDominio() + "/curso/listarAllCursos";
    //     axios.get(cursosIFPB)
    //         .then(Response => {
    //             var dataCurso = Response.data;
    //             dataCurso.forEach(item => {
    //                 lista.push(item);
    //             });

    //             lista = lista.map(
    //                 (elementoCurso) => {
    //                     return {
    //                         label: elementoCurso,
    //                         value: elementoCurso
    //                     }
    //                 }
    //             ).sort((a, b) => a.label.localeCompare(b.label));

    //             setCursos(lista);
    //         })
    //         .catch(error => console.log(error))

    // }, [campus]);

    // useEffect(async () => {
    //     var lista = [];
    //     const campus = URL.getDominio() + "/curso/listarCampus";
    //     axios.get(campus)
    //         .then(Response => {
    //             var dataCampus = Response.data;
    //             dataCampus.forEach(item => {
    //                 lista.push(item);
    //             });

    //             lista = lista.map(
    //                 (elementoCampus) => {
    //                     return {
    //                         label: elementoCampus,
    //                         value: elementoCampus
    //                     }
    //                 }
    //             ).sort((a, b) => a.label.localeCompare(b.label));
    //             setCampi(lista);

    //         })
    //         .catch(error => console.log(error))

    // }, []);

    useEffect(async () => {
        const headers = {
            'headers': {
                'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
                'Content-Type': 'application/json'
            }
        }

        if (!nome == null) {
            axios.post(URL.getDominio() + "/curso/definirCampus", campus, headers)
                .then(Response => { })
                .catch(error => console.log(error))
        }


    }, [campus]);

    function validar() {
        var valido = true;

        if (acaoObrigatorio.name == null) {
            setSuicidioObrigatorio(invalid);
            valido = false;
        }

        if (parescer == '') {
            setDescrisaoObrigatorio(invalid);
            valido = false;
        }

        return valido;
    }

    async function submeter() {

        if (validar()) {
            const novoProntuario =
            {
                "discente": nome,
                "curso": curso,
                "campus": campus,
                "periodo": periodo,
                "parescerProfissionalSaude": parescer,
                "acaoRealizada": acaoObrigatorio.name,
                "idDiscente": idDiscente,
                "idProfissionalDeSaude": idProfissionalDeSaude

            }
            const headers = {
                'headers': {
                    'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
                    'Content-Type': 'application/json'
                }
            }

            axios.post(URL.getDominio() + "/prontuario/salvarProntuario", novoProntuario, headers)
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
            <div >
                <Card title="PRONTUARIO DO DISCENTE"></Card>

                <Card className="" >
                    <div>
                        <BotaoVoltar></BotaoVoltar>
                        <Button className={'p-ml-3'} label="SALVAR" onClick={submeter} />
                    </div>
                </Card>

                <Card >
                    <Card subTitle='DISCENTE' >
                        <InputText
                            value={nome}
                            style={{ width: '100%' }}
                            disabled
                        />
                    </Card>
                    <Card subTitle='CAMPUS' >
                        <InputText
                            value={campus}
                            style={{ width: '100%' }}
                            disabled
                        />
                    </Card>
                    <Card subTitle='CURSO' >
                        <InputText
                            value={curso}
                            disabled
                            style={{ width: '100%' }}
                        />
                    </Card>
                    <Card subTitle='ANO / PERÍODO' >
                        <InputText
                            value={periodo}
                            disabled
                            style={{ width: '100%' }}
                        />
                    </Card>
                    <Card subTitle='PARESCER DO PROFISSIONAL DE SAÚDE' >
                        <InputTextarea
                            className={parecerObrigatoria}
                            value={parescer}
                            onChange={(e) => setParescer(e.target.value)}
                            placeholder="Digite o parescer quanto ao discente"
                            autoResize
                            style={{ width: '100%' }}
                        />
                    </Card>
                    <Card subTitle='AÇÃO REALIZADA' >
                        <Dropdown
                            className={acaoRealizadaObrigatorio}
                            filter
                            optionLabel="name"
                            value={acaoObrigatorio}
                            options={destino}
                            onChange={(e) => setAcaoObrigatorio(e.target.value)}
                            placeholder="Escolha uma ação"
                            style={{ width: '100%' }}
                        />
                    </Card>
                </Card>
            </div>
        </div>

    );
}
