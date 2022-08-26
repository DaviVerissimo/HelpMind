import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ListaQuestionariosAnsiedadeDeBeckComponente from '../../../Components/ListaQuestionariosAnsiedadeDeBeckComponente';
import Usuario from '../../../services/Usuario';

export default function ListaQuestionarioAnsiedadeDeBeckPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ListaQuestionariosAnsiedadeDeBeckComponente data={Usuario.get_PSICOLOGO()} ></ListaQuestionariosAnsiedadeDeBeckComponente>
        </div>
    )
}
