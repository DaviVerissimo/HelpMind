import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import listaSemestre from './listaSemestres';

export default function Semestre() {

    const [semestre, setSemestre] = useState('all');
    // PROVISORIO - criar um algoritmo que crie os semestres dinamicamente baseado na data
    const semestres = listaSemestre.getSemestres();
    const [semestreObrigatorio, setSemestreObrigatorio] = useState('');

    useEffect(async () => {
        localStorage.setItem('SemestreComponente', semestre.name);

    }, [semestre]);

    const validar = localStorage.getItem('SemestreComponente')
    useEffect(async () => {
        if (validar != null) {
            setSemestreObrigatorio(validar)
        }

    }, [validar]);

    return (
        <div>
            <Dropdown
                className={semestreObrigatorio}
                style={{ width: '100%' }}
                optionLabel="name"
                value={semestre}
                options={semestres}
                onChange={(e) => setSemestre(e.target.value)}
                filter
                placeholder="Escolha um semestre"
            />
        </div>

    );
}