import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";
import URL from '../../services/URL';

export default function Cursos() {

    const [cursos, setCursos] = useState([]);
    const [curso, setCurso] = useState('');
    const [cursoObrigatorio, setCursoObrigatorio] = useState('');

    useEffect(async () => { //cursos
        var lista = [];
        const cursosIFPB = URL.getDominio() + "/curso/listarAllCursos";
        axios.get(cursosIFPB)
            .then(Response => {
                var dataCurso = Response.data;
                dataCurso.forEach(item => {
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

                setCursos(lista);
            })
            .catch(error => console.log(error))

    }, []);

    useEffect(async () => {
        localStorage.setItem('cursoComponente', curso);

    }, [curso]);

    const validar = localStorage.getItem('errorCursoComponente')
    useEffect(async () => {
        if (validar != null) {
            setCursoObrigatorio(validar)
        }

    }, [validar]);

    return (
        <div>
            <Dropdown
                className={cursoObrigatorio}
                filter
                value={curso}
                options={cursos}
                onChange={(e) => setCurso(e.value)}
                placeholder="Escolha um curso"
            />
        </div>

    );
}
