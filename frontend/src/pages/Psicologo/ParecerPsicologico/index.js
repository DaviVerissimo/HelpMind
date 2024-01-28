import React, { useRef, useState, useEffect } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import ToobarPsicologo from '../ToobarPsicologo';
import { Toast } from 'primereact/toast';
import URL from '../../../services/URL';
import BotaoVoltar from '../../../Components/BotaoVoltar';
import { InputText } from 'primereact/inputtext';
import EncaminhamentoService from '../../../services/EncaminhamentoService';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ParecerPsicologico() {

    const { id } = useParams();
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
    const [parescer, setParescer] = useState('');
    var configBotaoSalvar = "p-ml-3";
    const [parecerObrigatoria, setDescrisaoObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');

    function validar() {
        var valido = true;
        if (parescer == '') {
            setDescrisaoObrigatorio(invalid);
            valido = false;
        }

        return valido;
    }

    async function submeter() {
        if (validar()) {
            const novoParecerPsicologico =
            {
                "discente": discente.nome,
                "email": discente.email,
                "parescerPsicologico": parescer,
                "idEncaminhamento": id

            }
            const headers = {
                'headers': {
                    'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
                    'Content-Type': 'application/json'
                }
            }

            axios.post(URL.getDominio() + "/parecerPsicologico/salvarParecerPsicologico", novoParecerPsicologico, headers)
                .then(Response => { })
                .catch(error => console.log(error))
            showSuccess();
            EncaminhamentoService.mudarStatusDoEncaminhamentoParaComRelatorio(id);
        }
        else {
            showError();
        }

    }
    // pegar discente do localStorage- lembrar que usar hooks
    // refatorar codigo
    // ajuste de designer no style como emm novo encaminhamento
    // olhar no git branch dev2 correção de portugues entre outros detalhes que podem ser necessarios
    // renomear tudo que for parescer para relatorio. componentes titulos rotulos de botao e rotas
    // setar  relatorios com seus respectivos encaminhamentos

    return (
        <div> <ToobarPsicologo></ToobarPsicologo>
            <Toast ref={toast} />
            <div >
                <Card title="NOVO RELÁTORIO DO PSICÓLOGO"></Card>
                <Card className="" >
                    <BotaoVoltar></BotaoVoltar>
                    <Button
                        className={configBotaoSalvar}
                        label="SALVAR"
                        onClick={submeter}
                    />
                </Card>
                <Card >
                    <Card subTitle='DISCENTE' >
                        <InputText
                            value={discente.nome}
                            disabled
                            style={{ width: '100%' }}
                        />
                    </Card>
                    <Card subTitle='EMAIL' >
                        <InputText
                            value={discente.email}
                            disabled
                            style={{ width: '100%' }}
                        />
                    </Card>
                    <Card subTitle='PARESCER DO PSICOLOGO' >
                        <InputTextarea
                            className={parecerObrigatoria}
                            value={parescer}
                            onChange={(e) => setParescer(e.target.value)}
                            autoResize
                            style={{ width: '100%' }}
                        />
                    </Card>
                </Card>
            </div>
        </div>

    );
}
