import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ConsultarEstatisticas from '../../../Components/ConsultarEstatisticas';
import Usuario from '../../../services/Usuario';

export default function ConsultarEstatisticasAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ConsultarEstatisticas logado={Usuario.get_ADMIN()} ></ConsultarEstatisticas>
        </div>
    
    );
}



