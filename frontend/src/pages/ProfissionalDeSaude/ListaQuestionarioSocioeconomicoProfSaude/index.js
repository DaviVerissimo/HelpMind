import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaQuestionarioSocioeconomicoComponente from '../../../Components/ListaQuestionarioSocioeconomicoComponente';
import Usuario from '../../../services/Usuario';

export default function ListaQuestionarioSocioeconomicoProfSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaQuestionarioSocioeconomicoComponente
                data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaQuestionarioSocioeconomicoComponente>
        </div>

    )
}
