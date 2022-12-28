import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import Usuario from '../../../services/Usuario';
import EscolheGraficoComponente from '../../../Components/EscolheGraficoComponente';

export default function EscolherGraficoPsicologo() {

    return (

        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <EscolheGraficoComponente logado={Usuario.get_PSICOLOGO()} ></EscolheGraficoComponente>
        </div>

    );
}