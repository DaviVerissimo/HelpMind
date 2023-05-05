import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaDeEncaminhamentosComponente from '../../../Components/ListaDeEncaminhamentosComponente';
import Usuario from '../../../services/Usuario';

export default function ListarEncaminhamentoParaPsicologoProfsaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaDeEncaminhamentosComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaDeEncaminhamentosComponente>
        </div>

    );
}



