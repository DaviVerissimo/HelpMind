import { Card } from 'primereact/card';
import React, { useEffect, useState } from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import BarraPessoalProfSaude from '../../ProfissionalDeSaude/BarraPessoalProfSaude';
import ServidorService from '../../../services/ServidorService';
import NotificacaoComponente from '../../../Components/NotificacaoComponente';
import Instrucoes from '../../../Components/Instrucoes';
import BotaoSair from '../../../Components/BotaoSair';

export default function PerfilPsicologo() {

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
        localStorage.setItem('metadataPsicologo', profissionaldeSaudeStr);
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
            <ToobarPsicologo></ToobarPsicologo>
            <div>
                <Card title='MEU PERFIL ' >
                    <BarraPessoalProfSaude idDiscente={id} ></BarraPessoalProfSaude>
                    <NotificacaoComponente></NotificacaoComponente>
                    <BotaoSair></BotaoSair>
                    <Instrucoes></Instrucoes>
                </Card>
            </div>
        </div>
    );
}