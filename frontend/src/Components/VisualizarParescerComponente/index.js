import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import { useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import BotaoVoltar from '../BotaoVoltar';
import ParescerPsicologicoService from '../../services/ParescerPsicologicoService';

export default function VisualizarParescerComponente() {

    const { id } = useParams();
    const [parescerPsicologico, setParescerPsicologico] = useState();
    const obterParescerPsicologico = () => {
        ParescerPsicologicoService.getBuscarParescerPsicologicoById(id).then((response) => {
            setParescerPsicologico(response.data)

        });
    };
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [parescer, setParescer] = useState();

    useEffect(async () => {
        if (parescerPsicologico == null) {
            obterParescerPsicologico();
        }

        if (parescerPsicologico != undefined) {
            setNome(parescerPsicologico.discente);
            setEmail(parescerPsicologico.email);
            setParescer(parescerPsicologico.parescerPsicologico);

        }

    }, [parescerPsicologico]);

    return (
        <div>
            <div >
                <Card title="RELATÓRIO DO PSICÓLOGO"></Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card >
                    <Card subTitle='DISCENTE' >
                        <InputText value={nome} disabled />
                    </Card>
                    <Card subTitle='EMAIL' >
                        <InputText value={email} disabled />
                    </Card>
                    <Card subTitle='PARESCER DO PROFISSIONAL DE SAÚDE' >
                        <InputTextarea rows={5} cols={30} value={parescer} disabled />
                    </Card>
                </Card>
            </div>
        </div>

    );
}