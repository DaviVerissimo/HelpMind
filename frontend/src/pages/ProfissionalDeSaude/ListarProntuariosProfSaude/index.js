
import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaProntuariosComponente from '../../../Components/ListaProntuariosComponente';
import Usuario from '../../../services/Usuario';

export default function ListarProntuariosProfSaude() {
    
    return (
        <div> 
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaProntuariosComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaProntuariosComponente>
        </div>
    )
}



