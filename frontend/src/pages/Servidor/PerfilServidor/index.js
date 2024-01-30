import { Card } from 'primereact/card';
import React from 'react';
import ToobarServidorPublica from '../ToobarServidorPublico';
import Instrucoes from '../../../Components/Instrucoes';
import BotaoSair from '../../../Components/BotaoSair';

export default function PerfilServidor() {

    const id = localStorage.getItem('idServidor');

    return (
        <div>
            <ToobarServidorPublica></ToobarServidorPublica>
            <div>
                <Card
                    title='MEU PERFIL '
                    subTitle="ACESSO NÃO CONCEDIDO! SOLICITE PERMISSÃO AO ADMINISTRADOR."
                >
                    <BotaoSair></BotaoSair>
                    <Instrucoes></Instrucoes>
                </Card>
            </div>
        </div>
    );
}