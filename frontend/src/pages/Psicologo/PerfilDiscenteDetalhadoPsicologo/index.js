import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import PerfilDiscenteDetalhadoComponente from '../../../Components/PerfilDiscenteDetalhadoComponente';
import Usuario from '../../../services/Usuario';

export default function PerfilDiscenteDetalhadoPsicologo() {
    
    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <PerfilDiscenteDetalhadoComponente data={Usuario.get_PSICOLOGO()} ></PerfilDiscenteDetalhadoComponente>
        </div>
    );
}