import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import { useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';
import ProntuarioService from '../../services/ProntuarioService';

export default function VisualizarProntuarioComponente() {

    const { id } = useParams();
    const [prontuario, setProntuario] = useState();
    const obterProntuario = () => {
        ProntuarioService.getBuscarProntuarioById(id).then((response) => {
            setProntuario(response.data)

        });
    };
    const [nome, setNome] = useState();
    const [campus, setCampus] = useState(); //campus = singular, campi = plural
    const [curso, setCurso] = useState();
    const [parescer, setParescer] = useState();
    const [periodo, setPeriodos] = useState();
    const [acaoRealizada, setAcaoRealizada] = useState();

    useEffect(async () => {
        if (prontuario == null) {
            obterProntuario();
        }

        if (prontuario != undefined) {
            setNome(prontuario.discente);
            setCampus(prontuario.campus);
            setCurso(prontuario.curso);
            setParescer(prontuario.parescerProfissionalSaude);
            setPeriodos(prontuario.periodo);
            setAcaoRealizada(prontuario.acaoRealizada);

        }

    }, [prontuario]);

    return (
        <div> 
            <div >
                <Card title="PRONTUARIO DO DISCENTE"></Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card >
                    <Card subTitle='DISCENTE' >
                        <InputText value={nome} disabled />
                    </Card>
                    <Card subTitle='CAMPUS' >
                        <InputText value={campus} disabled />
                    </Card>
                    <Card subTitle='CURSO' >
                        <InputText value={curso} disabled />
                    </Card>
                    <Card subTitle='ANO / PERÍODO' >
                        <InputText value={periodo} disabled />
                    </Card>
                    <Card subTitle='PARESCER DO PROFISSIONAL DE SAÚDE' >
                        <InputTextarea rows={5} cols={30} value={parescer} disabled />
                    </Card>
                    <Card subTitle='AÇÃO REALIZADA' >
                        <InputText value={acaoRealizada} disabled />
                    </Card>
                </Card>

            </div>
        </div>

    );
}