import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import ToobarPsicologo from '../ToobarPsicologo';
import { Toast } from 'primereact/toast';
import Cursos from '../../../Components/Cursos';
import Campus from '../../../Components/Campus';
import DiscenteEmail from '../../../Components/DiscenteEmail';
import DiscenteNome from '../../../Components/DiscenteNome';

export default function ParecerPsicologico() {

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

    const [email, setEmail] = useState(null); //campus = singular, campi = plural
    const [nome, setNome] = useState();
    const [parescer, setParescer] = useState('');

    var configBotaoCancel = "p-mb-3 p-col-1 p-button-secondary ";
    var configBotaoSalvar = "p-mb-3 p-mt-3 p-col-1";
    var espacamento = '10px';
    var largura = window.screen.width;
    if (largura < 640) {
        configBotaoCancel = "p-mb-3 p-button-secondary "
        configBotaoSalvar = "p-mb-3 ";
    }

    const [parecerObrigatoria, setDescrisaoObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');




    const nomeData = localStorage.getItem('nomeComponente')
    useEffect(async () => {
        setNome(nomeData);

    }, [nomeData]);

    const emailData = localStorage.getItem('emailComponente')
    useEffect(async () => {
        setEmail(emailData);

    }, [emailData]);

    function validar() {
        var valido = true;

        if (nome == null || nome == '') {
            localStorage.setItem('errorNomeComponente', invalid);
            valido = false;
        }

        if (email == null || email == '') {
            localStorage.setItem('errorEmailComponente', invalid);
            valido = false;
        }

        if (parescer == '') {
            setDescrisaoObrigatorio(invalid);
            valido = false;
        }
        // console.log(nome + " " + email + " " + parescer + " " + valido)

        return valido;
    }

    async function submeter() {

        if (validar()) {
            // const idReportante = localStorage.getItem('id');
            const novoParecerPsicologico =
            {
                "discente": nome,
                "email": email,
                // "curso": curso,
                "parescerPsicologico": parescer,

                // "idReportante": idReportante

            }
            const headers = {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }

            axios.post("http://localhost:8080/parecerPsicologico/salvarParecerPsicologico", novoParecerPsicologico, headers)
                .then(Response => { })
                .catch(error => console.log(error))
            showSuccess();
            localStorage.removeItem("errorNomeComponente");
            localStorage.removeItem("errorEmailComponente");
        }

        else {
            showError();
        }

    }

    return (
        <div> <ToobarPsicologo></ToobarPsicologo>
            <Toast ref={toast} />
            <div >
                <Card title="PARESCER DO PSICÓLOGO"></Card>

                <Card className="" >
                    <div>
                        <Button className={configBotaoCancel} style={{ right: espacamento }} label="CANCEL" />
                        <Button className={configBotaoSalvar} label="SALVAR" onClick={submeter} />
                    </div>
                </Card>

                <Card >
                    <Card subTitle='DISCENTE' >
                        <DiscenteNome></DiscenteNome>

                    </Card>
                    <Card subTitle='EMAIL' >
                        <DiscenteEmail></DiscenteEmail>
                    </Card>
                    {/* <Card subTitle='CURSO' >
                        <Cursos></Cursos>
                    </Card> */}

                    {/* criar componente para parescer do PSICOLOGO */}
                    {/* corrigir bug que impede salvar novo parescer do psicologo */}
                    {/* pergunta a val sobre campus e curso no parescer psicologico */}
                    <Card subTitle='PARESCER DO PSICOLOGO' >
                        <InputTextarea className={parecerObrigatoria} rows={5} cols={30} value={parescer} onChange={(e) => setParescer(e.target.value)} />
                    </Card>

                </Card>

            </div>
        </div>

    );
}
