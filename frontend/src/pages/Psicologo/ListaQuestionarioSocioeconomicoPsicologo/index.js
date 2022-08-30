import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ListaQuestionarioSocioeconomicoComponente from '../../../Components/ListaQuestionarioSocioeconomicoComponente';
import Usuario from '../../../services/Usuario';

export default function ListaQuestionarioSocioeconomicoPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ListaQuestionarioSocioeconomicoComponente
                data={Usuario.get_PSICOLOGO()} ></ListaQuestionarioSocioeconomicoComponente>
        </div>

    )
}
