import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';

export default function Periodo() {

    const [periodo, setPeriodo] = useState('');
    const periodos = [
        { name: '1º' },
        { name: '2º' },
        { name: '3º' },
        { name: 'Outro' },
        { name: 'Superior' },
    ];
    const [periodoObrigatorio, setCampusObrigatorio] = useState('');

    useEffect(async () => {
        localStorage.setItem('periodoComponente', periodo.name);

    }, [periodo]);

    const validar = localStorage.getItem('periodoComponente')
    useEffect(async () => {
        if (validar != null) {
            setCampusObrigatorio(validar)
        }

    }, [validar]);

    return (
        <div>
            <Dropdown
                className={periodoObrigatorio}
                optionLabel="name"
                value={periodo}
                options={periodos}
                onChange={(e) => setPeriodo(e.target.value)}
                placeholder="Escolha um periodo"
            />
        </div>

    );
}