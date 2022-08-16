import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";

export default function DiscenteNome() {

    const [nomes, setNomes] = useState([]);
    const [nome, setNome] = useState([]);
    const [nomeObrigatorio, setNomeObrigatorio] = useState('');

    useEffect(async () => { //nome discente
        var lista = [];
        const discentesIFPB = "http://localhost:8080/discente/listarAllNomesDiscentes";
        axios.get(discentesIFPB)
            .then(Response => {
                var dataNomeDiscente = Response.data;
                dataNomeDiscente.forEach(item => {
                    lista.push(item);
                });

                lista = lista.map(
                    (elementoCurso) => {
                        return {
                            label: elementoCurso,
                            value: elementoCurso
                        }
                    }
                ).sort((a, b) => a.label.localeCompare(b.label));

                setNomes(lista);
            })
            .catch(error => console.log(error))

    }, []);

    useEffect(async () => {
        localStorage.setItem('nomeComponente', nome);

    }, [nome]);

    const validar = localStorage.getItem('errorNomeComponente')
    useEffect(async () => {
        if (validar != null){
            setNomeObrigatorio(validar)
        }
        
    }, [validar]);

    return (
        <div>
            <Dropdown className={nomeObrigatorio} value={nome} options={nomes} onChange={(e) => setNome(e.value)} placeholder="Escolha um discente" />
        </div>

    );
}