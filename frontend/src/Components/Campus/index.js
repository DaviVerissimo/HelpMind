import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";
import URL from '../../services/URL';

export default function Campus(childToParent) {
    // aviso: falta ressolver como será passada a validação

    const [campi, setCampi] = useState([]);
    const [campus, setCampus] = useState([]);// singular
    const [campusObrigatorio, setCampusObrigatorio] = useState('');

    useEffect(async () => { //campus
        var lista = [];
        const campus = URL.getDominio() + "/curso/listarCampus";
        axios.get(campus)
            .then(Response => {
                var dataCampus = Response.data;
                dataCampus.forEach(item => {
                    lista.push(item);
                });

                lista = lista.map(
                    (elementoCampus) => {
                        return {
                            label: elementoCampus,
                            value: elementoCampus
                        }
                    }
                ).sort((a, b) => a.label.localeCompare(b.label));
                setCampi(lista);

            })
            .catch(error => console.log(error))

    }, []);

    useEffect(async () => {
        localStorage.setItem('campusComponente', campus);

    }, [campus]);

    const validar = localStorage.getItem('errorCampusComponente')
    useEffect(async () => {
        if (validar != null) {
            setCampusObrigatorio(validar)
        }

    }, [validar]);

    return (
        <div>
            <Dropdown className={campusObrigatorio} value={campus} options={campi} onChange={(e) => setCampus(e.value)} placeholder="Escolha um campus" />
        </div>

    );
}