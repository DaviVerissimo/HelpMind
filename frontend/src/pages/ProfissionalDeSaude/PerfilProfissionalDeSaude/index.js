import { Card } from 'primereact/card';
import React, { useEffect, useState } from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import BarraPessoalProfSaude from '../BarraPessoalProfSaude';
import ServidorService from '../../../services/ServidorService';
import AcessoRapidoProfSaude from '../../../Components/AcessoRapidoProfSaude';
import NotificacaoComponente from '../../../Components/NotificacaoComponente';
import Instrucoes from '../../../Components/Instrucoes';
import BotaoSair from '../../../Components/BotaoSair';

export default function PerfilProfissionalDeSaude() {

    const id = localStorage.getItem('idServidor');
    const [servidor, setServidor] = useState([])
    const requisitarServidor = () => {
        ServidorService.getServidorById(id).then((response) => {
            setServidor(response.data)
        });
    };

    useEffect(() => {
        requisitarServidor()
    }, [])

    if (servidor != undefined && servidor != null) {
        const profissionaldeSaudeStr = JSON.stringify(servidor);
        localStorage.setItem('metadataProfissionaldeSaude', profissionaldeSaudeStr);
    }

    //ate achar uma solução melhor
    useEffect(() => {
        if (localStorage.getItem("recarregarPerfilProfS") === 'recarregarPerfilProfS') { }
        else {
            localStorage.setItem('recarregarPerfilProfS', 'recarregarPerfilProfS');
            window.location.reload();
        }
    }, []);

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <AcessoRapidoProfSaude></AcessoRapidoProfSaude>
            <NotificacaoComponente></NotificacaoComponente>
            <div>
                <Card title='MEU PERFIL ' >
                    <BarraPessoalProfSaude idDiscente={id} ></BarraPessoalProfSaude>
                    <BotaoSair></BotaoSair>
                    <Instrucoes></Instrucoes>
                </Card>
            </div>
        </div>
    );
}