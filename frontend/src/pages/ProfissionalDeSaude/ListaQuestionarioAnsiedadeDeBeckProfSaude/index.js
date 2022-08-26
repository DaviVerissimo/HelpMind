import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaQuestionariosAnsiedadeDeBeckComponente from '../../../Components/ListaQuestionariosAnsiedadeDeBeckComponente';
import Usuario from '../../../services/Usuario';

export default function ListaQuestionarioAnsiedadeDeBeckProfSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaQuestionariosAnsiedadeDeBeckComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaQuestionariosAnsiedadeDeBeckComponente>
        </div>
    )
}
