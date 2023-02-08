import React, { useRef } from 'react';
import './styles.css'
import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import ToobarAdmin from '../ToobarAdmin';
import { Toast } from 'primereact/toast';
import URL from '../../../services/URL';
import { Dropdown } from 'primereact/dropdown';
import BotaoVoltar from './../../../Components/BotaoVoltar/index';

export default function NovoContato() {
    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'Contato salvo com Sucesso!',
            detail: 'Obrigado',
            life: 5000
        });
    }
    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Não foi possivel salvar!',
            detail: 'Todo contato deve ter ao menos um nome.',
            life: 5000
        });
    }
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [nome, setNome] = useState();
    const [campi, setCampi] = useState(null);
    const [campusDoDiscente, setCampusDoDiscente] = useState('Não informado');
    const [nomeObrigatorio, setNomeObrigatorio] = useState();
    const [campusObrigatorio, setCampusObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');

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

    function validar() {
        var valido = true;

        if (nome == null || nome == '') {
            setNomeObrigatorio(invalid);
            valido = false;
        }

        if (campusDoDiscente == null || campusDoDiscente == '') {
            setCampusObrigatorio(invalid);
            valido = false;
        }

        return valido;
    }

    async function submeter() {
        let campusAux = campusDoDiscente;
        if (validar()) {

            const novoContato =
            {
                "nome": nome,
                "telefone": telefone,
                "email": email,
                "campus": campusAux,

            }
            const headers = {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }

            axios.post(URL.getDominio() + "/contato/salvarContato", novoContato, headers)
                .then(Response => { })
                .catch(error => console.log(error))
            showSuccess();
        }
        else {
            showError();
        }

    }

    return (
        <div> <ToobarAdmin></ToobarAdmin>
            <Toast ref={toast} />
            <div >
                <Card title="NOVO CONTATO"></Card>

                <Card className="" >
                    <div>
                        <BotaoVoltar></BotaoVoltar>
                        <Button className={'p-ml-3'} label="SALVAR" onClick={submeter} />
                    </div>
                </Card>

                <Card >
                    <Card subTitle='NOME' >
                        <InputText className={nomeObrigatorio} value={nome} onChange={(e) => setNome(e.target.value)} />
                    </Card>

                    <Card subTitle='TELEFONE' >
                        <InputText className={''} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </Card>
                    <Card subTitle='EMAIL' >
                        <InputText className={''} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Card>
                    <Card subTitle='CAMPUS' >
                        <Dropdown className={campusObrigatorio} value={campusDoDiscente} options={campi} onChange={(e) => setCampusDoDiscente(e.value)} placeholder="Escolha um campus" />
                    </Card>
                </Card>

            </div>
        </div>

    );
}