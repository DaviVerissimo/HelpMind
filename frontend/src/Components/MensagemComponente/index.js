import React, {useEffect} from 'react';
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';

export default function MensagemComponente(props) {
    const estilo1 = {
        color: 'green',
        fontSize: '16px',
        fontWeight: 'bold'
    };

    const estilo2 = {
        color: 'white',
        backgroundColor: 'green',
    };

    const mensagem = {
        data: props.data,
        nomeUsuario: props.nomeUsuario,
        profissao: props.profissao,
        conteudo: props.mensagem
    };

    const legendTemplate = (
        <div style={estilo1} className="flex align-items-center text-primary">
            <img src={props.imagem} width="40" ></img>
            <span className="font-bold text-lg"> - {mensagem.data}</span>
            <span className="font-bold text-lg"> - {mensagem.nomeUsuario}</span>
            <span className="font-bold text-lg"> - {mensagem.profissao}</span>
        </div>
    );

    return (
        <div className="card">
            <Card>
                <Fieldset className="p-fieldset-resizable" legend={legendTemplate} style={estilo2} >
                    {mensagem.conteudo}
                </Fieldset>
            </Card>
        </div>
    );
}
