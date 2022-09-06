import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ConsultarEstatisticas from '../../../Components/ConsultarEstatisticas';
import Usuario from '../../../services/Usuario';

export default function ConsultarEstatisticasProfSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ConsultarEstatisticas logado={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ConsultarEstatisticas>
        </div>
    
    );
}



