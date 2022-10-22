import React, { useRef, useEffect, useState } from 'react';
import ContatoService from '../../../services/ContatoService';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import ToobarAdmin from '../ToobarAdmin';
import { Toast } from 'primereact/toast';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import URL from '../../../services/URL';

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
            detail: 'Todo contato deve ter ao menos um nome.',
            life: 5000
        });
    }

    const contatoAux =
    {
        "id":"carregando",
        "nome": "carregando",
        "telefone": "carregando",
        "email": "carregando",

    }
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
        if (contato != undefined && contato != null  && contato != contatoAux) {
            if(nome == null && telefone == null && email == null){
                
                setTelefone(contato.telefone);
                setNome(contato.nome);
                setEmail(contato.email);
            }

        }

    }, [contato]);

    const [telefone, setTelefone] = useState(null); 
    const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null);
    const [nomeObrigatorio, setNomeObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');
    var configBotaoCancel = "p-mb-3 p-col-1 p-button-secondary ";
    var configBotaoSalvar = "p-mb-3 p-mt-3 p-col-1";
    var espacamento = '10px';
    var largura = window.screen.width;
    if (largura < 640) {
        configBotaoCancel = "p-mb-3 p-button-secondary "
        configBotaoSalvar = "p-mb-3 ";
    }

    function validar() {
        var valido = true;

        if (nome == null || nome == '') {
            setNomeObrigatorio(invalid);
            valido = false;
        }

        return valido;
    }

    async function submeter() {

        if (validar()) {

            const updateContato =
            {
                "id":contato.id,
                "nome": nome,
                "telefone": telefone,
                "email": email,

            }
            const headers = {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
            //criar rota para novo contato
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
        <div> <ToobarAdmin></ToobarAdmin>
            <Toast ref={toast} />
            <div >
                <Card title="ATUALIZAR CONTATO"></Card>

                <Card className="" >
                    <div>
                        <Button className={configBotaoCancel} style={{ right: espacamento }} label="CANCEL" />
                        <Button className={configBotaoSalvar} label="SALVAR" onClick={submeter} />
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
                </Card>

            </div>
        </div>

    );
}