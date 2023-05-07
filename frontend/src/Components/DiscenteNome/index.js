import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";
import URL from '../../services/URL';

export default function DiscenteNome(props) {

    const [nomes, setNomes] = useState([]);
    const [nome, setNome] = useState([]);
    useEffect(async () => {
        var lista = [];
        const discentesIFPB = URL.getDominio() + "/discente/listarAllNomesDiscentes";
        axios.get(discentesIFPB)
            .then(Response => {
                var dataNomeDiscente = Response.data;
                dataNomeDiscente.forEach(item => {
                    lista.push(item);
                });
                lista = lista.map(
                    (elemento) => {
                        return {
                            label: elemento,
                            value: elemento
                        }
                    }
                ).sort((a, b) => a.label.localeCompare(b.label));
                setNomes(lista);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Dropdown
                className={props.preenchimentoObrigatorio}
                value={nome}
                filter
                options={nomes}
                onChange={(e) => setNome(e.value)}
                onBlur={props.nomeDiscente(nome)}
                placeholder="Escolha um discente"
                style={{ width: '100%' }}
            />
        </div>
    );
}