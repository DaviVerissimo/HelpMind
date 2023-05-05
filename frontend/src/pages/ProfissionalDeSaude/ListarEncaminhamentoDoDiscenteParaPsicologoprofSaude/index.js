import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaDeEncaminhamentosDoDiscenteComponente from '../../../Components/ListaDeEncaminhamentosDoDiscenteComponente';
import Usuario from '../../../services/Usuario';

export default function ListarEncaminhamentoDoDiscenteParaPsicologoprofSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaDeEncaminhamentosDoDiscenteComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaDeEncaminhamentosDoDiscenteComponente>
        </div>

    );
}



