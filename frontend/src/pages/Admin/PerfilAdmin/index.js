import { Card } from 'primereact/card';
import React, { useEffect, useState } from 'react';
import ToobarAdmin from '../ToobarAdmin';
import BarraPessoalAdmin from '../BarraPessoalAdmin';
import AcessoRapido from '../../../Components/AcessoRapido';
import ServidorService from '../../../services/ServidorService';
import NotificacaoComponente from '../../../Components/NotificacaoComponente';
import Instrucoes from '../../../Components/Instrucoes';
import BotaoSair from '../../../Components/BotaoSair';

export default function PerfilAdmin() {

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
        localStorage.setItem('metadataAdmin', profissionaldeSaudeStr);
    }
    //ate achar uma solução melhor
    useEffect(() => {
        if (localStorage.getItem("recarregarPerfilAdmin") === 'carregadoPerfilAdmin') { }
        else {
            localStorage.setItem('recarregarPerfilAdmin', 'carregadoPerfilAdmin');
            window.location.reload();
        }
    }, []);

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <AcessoRapido></AcessoRapido>
            <NotificacaoComponente></NotificacaoComponente>
            <div>
                <Card title='MEU PERFIL ' >
                    <BarraPessoalAdmin idDiscente={id} ></BarraPessoalAdmin>
                    <BotaoSair></BotaoSair>
                    <Instrucoes></Instrucoes>
                </Card>
            </div>
        </div>
    );
}