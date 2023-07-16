import React, { useRef, useEffect, useState } from 'react';
import ContatoService from '../../../services/ContatoService';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import ToobarAdmin from '../ToobarAdmin';
import { Toast } from 'primereact/toast';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import URL from '../../../services/URL';
import { Dropdown } from 'primereact/dropdown';
import BotaoVoltar from './../../../Components/BotaoVoltar/index';

export default function UpdateContato() {

    const { id } = useParams();
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
            detail: 'Todo contato deve ter ao menos um nome e campus.',
            life: 5000
        });
    }

    const contatoAux =
    {
        "id": "carregando",
        "nome": "carregando",
        "telefone": "carregando",
        "email": "carregando",
        "campus": "carregando",

    }
    const [telefone, setTelefone] = useState(null);
    const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null);
    const [nomeObrigatorio, setNomeObrigatorio] = useState();
    const [campi, setCampi] = useState(null);
    const [campusDoDiscente, setCampusDoDiscente] = useState('');
    const [campusObrigatorio, setCampusObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');
    const [contato, setContato] = useState(contatoAux);
    const obterContato = () => {
        ContatoService.getBuscarContatoById(id).then((response) => {
            setContato(response.data)
        });
    };

    useEffect(async () => {
        obterContato();
        ContatoService.getBuscarContatoById(id).then((response) => {
            setContato(response.data)
        });
        if (contato != undefined && contato != null && contato != contatoAux) {
            if (nome == null && telefone == null && email == null) {

                setTelefone(contato.telefone);
                setNome(contato.nome);
                setEmail(contato.email);
                setCampusDoDiscente(contato.campus);
            }

        }

    }, [contato]);

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

        if (validar()) {

            const updateContato =
            {
                "id": contato.id,
                "nome": nome,
                "telefone": telefone,
                "email": email,
                "campus": campusDoDiscente,

            }
            const headers = {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }

            axios.post(URL.getDominio() + "/contato/updateContato", updateContato, headers)
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
            <ToobarAdmin></ToobarAdmin>
            <Toast ref={toast} />
            <Card title="ATUALIZAR CONTATO"></Card>
            <Card>
                <BotaoVoltar></BotaoVoltar>
                <Button
                    className={'p-ml-3'}
                    label="SALVAR"
                    onClick={submeter}
                />
            </Card>
            <Card >
                <Card subTitle='NOME' >
                    <InputText
                        className={nomeObrigatorio}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        style={{ width: '100%' }}
                    />
                </Card>
                <Card subTitle='TELEFONE' >
                    <InputText
                        className={''}
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        style={{ width: '100%' }}
                    />
                </Card>
                <Card subTitle='EMAIL' >
                    <InputText
                        className={''}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%' }}
                    />
                </Card>
                <Card subTitle='CAMPUS' >
                    <Dropdown
                        className={campusObrigatorio}
                        filter
                        value={campusDoDiscente}
                        options={campi}
                        onChange={(e) => setCampusDoDiscente(e.value)}
                        placeholder="Escolha um campus"
                        style={{ width: '100%' }}
                    />
                </Card>
            </Card>


        </div>

    );
}