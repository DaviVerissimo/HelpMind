import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";
import URL from '../../services/URL';

export default function DiscenteEmail() {
    // aviso: falta ressolver como será passada a validação

    const [listaDeEmail, setListaDeEmail] = useState([]);
    const [email, setEmail] = useState([]);
    const [emailObrigatorio, setEmailObrigatorio] = useState('');

    useEffect(async () => { //email
        var lista = [];
        const discentesIFPB = URL.getDominio() + "/discente/listarAllEmailDiscentes";
        axios.get(discentesIFPB)
            .then(Response => {
                var dataEmailDiscente = Response.data;
                dataEmailDiscente.forEach(item => {
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

                setListaDeEmail(lista);
            })
            .catch(error => console.log(error))

    }, []);

    useEffect(async () => {
        localStorage.setItem('emailComponente', email);

    }, [email]);

    const validar = localStorage.getItem('errorEmailComponente')
    useEffect(async () => {
        if (validar != null){
            setEmailObrigatorio(validar)
        }
        
    }, [validar]);

    return (
        <div>
            <Dropdown className={emailObrigatorio} value={email} options={listaDeEmail} onChange={(e) => setEmail(e.value)} placeholder="Escolha um email" />
        </div>

    );
}