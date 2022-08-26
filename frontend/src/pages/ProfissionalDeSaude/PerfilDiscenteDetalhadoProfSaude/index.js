import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import PerfilDiscenteDetalhadoComponente from '../../../Components/PerfilDiscenteDetalhadoComponente';
import Usuario from '../../../services/Usuario';

export default function PerfilDiscenteDetalhadoProfSaude() {
    
    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <PerfilDiscenteDetalhadoComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></PerfilDiscenteDetalhadoComponente>
        </div>
    );
}