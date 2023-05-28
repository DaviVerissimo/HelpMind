import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ListaConversasComponente from '../../../Components/ListarConversasComponente';
import Usuario from '../../../services/Usuario';

export default function ListaConversasPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ListaConversasComponente data={Usuario.get_PSICOLOGO()} ></ListaConversasComponente>
        </div>
    );
}



