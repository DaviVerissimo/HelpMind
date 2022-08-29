import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ListaQuestionariosDepressaoDeBeckComponente from '../../../Components/ListaQuestionariosDepressaoDeBeckComponente';
import Usuario from '../../../services/Usuario';


export default function ListaQuestionariosDepressaoDeBeckPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ListaQuestionariosDepressaoDeBeckComponente
                data={Usuario.get_PSICOLOGO()} ></ListaQuestionariosDepressaoDeBeckComponente>
        </div>

    )
}
