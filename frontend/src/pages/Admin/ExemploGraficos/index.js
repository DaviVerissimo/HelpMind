import React, { useState } from 'react';
import ToobarAdmin from "../ToobarAdmin";
import Cores from '../../../services/Cores';
import GraficoCircularComponente from '../../../Components/GraficoCircularComponente';
import GraficoBarraEmpilhadaComponente from '../../../Components/GraficoBarraEmpilhadaComponente';
import GraficoBarraVerticalComponente from '../../../Components/GraficoBarraVerticalComponente';
import GraficoBarraHorizontalComponente from '../../../Components/GraficoBarraHorizontalComponente';
import GraficoBarraMultiEixosComponente from '../../../Components/GraficoBarraMultiEixosComponente';
import GraficoBarraHorizontal_4_Colunas_Componente from '../../../Components/GraficoBarraHorizontal_4_Colunas_Componente';
import GraficoBarraVertical_4_colunas_Componente from '../../../Components/GraficoBarraVertical_4_colunas_Componente';

export default function ExemploGraficos() {
    const rotulos = ['A', 'B', 'C', 'Damares', 'fabio', 'Eliana', 'geogia', 'helus', 'ivo',
        'jaminho', 'kamilo', 'Laura', 'margarida'];
    const dados = [300, 50, 100, 70, 15, 17, 12, 14, 13, 25, 5, 10, 15];
    const coresMulticolor = Cores.get_RandonColor();
    const coresEscala = Cores.get_escala_minima_leve_moderada_grave();
    const discentesAnsiedade = [17, 12, 14, 13, 25, 5, 10, 15];
    const ansiedade = ['Ansiedade Minima', 'Ansiedde leve', 'Ansiedade modelada', 'Ansiedade grave']
    const campus = ['Monteiro ', 'Picui ', 'Itabira ', 'patos ', 'Campina Grande']
    const dadosAnsiedade = [[30, 59, 80, 81, 15],
    [19, 86, 27, 90, 102],
    [70, 48, 40, 19, 4],
    [19, 56, 27, 10, 60],
    [25, 40, 30, 52,38]];
    const cursos = ['ADS ', 'TCE ', 'MSI ', 'Enfermagem ', 'Medicina']
    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const dadosMeses = [[65, 59, 80, 81, 56, 55, 10], [28, 48, 40, 19, 86, 27, 90]];
    const dadosXX = [[65, 59, 80, 81, 56, 55, 10], [28, 48, 40, 19, 86, 27, 90], [28, 48, 40, 19, 86, 27, 90]];

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <GraficoCircularComponente rotulos={rotulos} dados={dados} cores={coresMulticolor} ></GraficoCircularComponente>
            <GraficoBarraVerticalComponente rotulos={meses} dados={dadosXX} identificador={cursos}  ></GraficoBarraVerticalComponente>
            <GraficoBarraHorizontalComponente rotulos={rotulos} dados={dadosXX} identificador={cursos} ></GraficoBarraHorizontalComponente>
            <GraficoBarraMultiEixosComponente rotulos={rotulos} dados={dadosXX} identificador={cursos}  ></GraficoBarraMultiEixosComponente>
            <GraficoBarraEmpilhadaComponente rotulos={rotulos} dados={dadosXX} identificador={cursos}></GraficoBarraEmpilhadaComponente>
            <GraficoBarraHorizontal_4_Colunas_Componente rotulos={ansiedade} identificador={cursos} dados={dadosAnsiedade} ></GraficoBarraHorizontal_4_Colunas_Componente>
            <GraficoBarraVertical_4_colunas_Componente rotulos={ansiedade} identificador={campus} dados={dadosAnsiedade} ></GraficoBarraVertical_4_colunas_Componente>
        </div>
    );
}