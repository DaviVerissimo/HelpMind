import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import Usuario from '../../../services/Usuario';
import EscolheGraficoComponente from '../../../Components/EscolheGraficoComponente';


export default function EscolherGraficoProfSaude() {

    return (

        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <EscolheGraficoComponente logado={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></EscolheGraficoComponente>
        </div>

    );
}