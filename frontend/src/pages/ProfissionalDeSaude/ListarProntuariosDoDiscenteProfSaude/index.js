
import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaProntuariosDoDiscenteComponente from '../../../Components/ListaProntuariosDoDiscenteComponente';
import Usuario from '../../../services/Usuario';

export default function ListarProntuariosDoDiscenteProfSaude() {
    
    return (
        <div> 
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaProntuariosDoDiscenteComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaProntuariosDoDiscenteComponente>
        </div>
    )
}



