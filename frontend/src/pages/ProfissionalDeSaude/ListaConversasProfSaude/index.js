import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaConversasComponente from '../../../Components/ListarConversasComponente';
import Usuario from '../../../services/Usuario';

export default function ListaConversasProfSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaConversasComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaConversasComponente>
        </div>
    );
}



