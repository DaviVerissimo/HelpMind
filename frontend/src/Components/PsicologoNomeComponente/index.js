import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";
import URL from '../../services/URL';

export default function PsicologoNomeComponente(props) {

    const [nomes, setNomes] = useState([]);
    const [nome, setNome] = useState([]);

    useEffect(async () => { 
        var lista = [];
        const psicologoIFPB = URL.getDominio() + "/servidor/listarAllNomesPsicologos";
        axios.get(psicologoIFPB)
            .then(Response => {
                var dataNomePsicologo = Response.data;
                dataNomePsicologo.forEach(item => {
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
                onBlur={props.nomePsicologo(nome)}
                placeholder="Escolha um psicólogo"
                style={{ width: '100%' }}
            />
        </div>

    );
}