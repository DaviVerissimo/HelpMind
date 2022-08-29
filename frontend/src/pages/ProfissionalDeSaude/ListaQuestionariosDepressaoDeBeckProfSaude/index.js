import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaQuestionariosDepressaoDeBeckComponente from '../../../Components/ListaQuestionariosDepressaoDeBeckComponente';
import Usuario from '../../../services/Usuario';

export default function ListaQuestionariosDepressaoDeBeckProfSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaQuestionariosDepressaoDeBeckComponente
                data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaQuestionariosDepressaoDeBeckComponente>
        </div>

    )
}
