import React, { useRef, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import URL from '../../services/URL';
import BotaoVoltar from '../BotaoVoltar';
import DiscenteNome from '../DiscenteNome';
import PsicologoNomeComponente from '../PsicologoNomeComponente';
import { InputText } from 'primereact/inputtext';
import ListarConversasComponente from '../ListarConversasComponente';

export default function NovoEncaminhamentoParaPsicologoComponente() {

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
    const discenteStr = localStorage.getItem('discente');
    const discente = JSON.parse(discenteStr);
    const [psicologoNome, setPsicologoNome] = useState();
    const [discenteNome, setDiscenteNome] = useState(discente.nome);
    const [discenteID, setDiscenteId] = useState(JSON.stringify(discente.id));
    const [descrisao, setDescrisao] = useState();

    const retornaNomeDoPsicologo = (nome) => {
        setPsicologoNome(nome);
    }
    const [psicologoNomeObrigatorio, setPsicologoNomeObrigatorio] = useState(false);
    const [discenteNomeObrigatorio, setDiscenteNomeObrigatorio] = useState(false);
    const [descrisaoObrigatorio, setDescrisaoObrigatorio] = useState(false);
    const [invalid, setInvalid] = useState('p-invalid block');

    function validar() {
        var valido = true;

        if (psicologoNome == null || psicologoNome == '') {
            setPsicologoNomeObrigatorio(invalid);
            valido = false;
        }

        if (discenteNome == null || discenteNome == '') {
            setDiscenteNomeObrigatorio(invalid);
            valido = false;
        }

        if (descrisao == null || descrisao == '') {
            setDescrisaoObrigatorio(invalid);
            valido = false;
        }

        return valido;
    }

    async function submeter() {

        if (validar()) {
            const idProfissionalDeSaude = localStorage.getItem('idServidor');
            const novoEncaminhamento =
            {
                "psicologo": psicologoNome,
                "discente": discenteNome,
                "descrisao": descrisao,
                "idDiscente": discenteID,
                "idProfissionalDeSaude": idProfissionalDeSaude

            }
            const headers = {
                'headers': {
                    'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
                    'Content-Type': 'application/json'
                }
            }

            axios.post(URL.getDominio() + "/Encaminhamento/salvar", novoEncaminhamento, headers)
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
                <Card title="ENCAMINHAMENTO PARA PSICÓLOGO"></Card>
                <Card>
                    <div>
                        <BotaoVoltar></BotaoVoltar>
                        <Button className={'p-ml-3'} label="ENVIAR" onClick={submeter} />
                    </div>
                </Card>
                <Card >
                    <Card subTitle='PSICÓLOGO' >
                        <PsicologoNomeComponente
                            nomePsicologo={retornaNomeDoPsicologo}
                            preenchimentoObrigatorio={psicologoNomeObrigatorio}
                        ></PsicologoNomeComponente>
                    </Card>
                    <Card subTitle='DISCENTE ENCAMINHADO'>

                        <InputText
                            value={discenteNome}
                            style={{ width: '100%' }}
                            disabled
                        ></InputText>
                    </Card>
                    <Card subTitle='DESCRIÇÃO' >
                        <InputTextarea
                            className={descrisaoObrigatorio}
                            value={descrisao}
                            onChange={(e) => setDescrisao(e.target.value)}
                            autoResize
                            style={{ width: '100%' }}
                        />
                    </Card>
                </Card>
            </div>
            {/* <ListarConversasComponente></ListarConversasComponente> */}
        </div>

    );
}
