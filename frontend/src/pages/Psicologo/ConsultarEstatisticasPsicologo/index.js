import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ConsultarEstatisticas from '../../../Components/ConsultarEstatisticas';
import Usuario from '../../../services/Usuario';

export default function ConsultarEstatisticasPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ConsultarEstatisticas logado={Usuario.get_PSICOLOGO()} ></ConsultarEstatisticas>
        </div>
    
    );
}



