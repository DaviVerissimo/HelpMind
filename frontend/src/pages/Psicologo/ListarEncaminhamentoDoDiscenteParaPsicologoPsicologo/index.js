import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ListaDeEncaminhamentosDoDiscenteComponente from '../../../Components/ListaDeEncaminhamentosDoDiscenteComponente';
import Usuario from '../../../services/Usuario';

export default function ListarEncaminhamentoDoDiscenteParaPsicologoPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ListaDeEncaminhamentosDoDiscenteComponente data={Usuario.get_PSICOLOGO()} ></ListaDeEncaminhamentosDoDiscenteComponente>
        </div>

    );
}



