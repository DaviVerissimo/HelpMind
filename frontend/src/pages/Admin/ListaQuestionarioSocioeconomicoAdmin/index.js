import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaQuestionarioSocioeconomicoComponente from '../../../Components/ListaQuestionarioSocioeconomicoComponente';
import Usuario from '../../../services/Usuario';

export default function ListaQuestionarioSocioeconomicoAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ListaQuestionarioSocioeconomicoComponente
                data={Usuario.get_ADMIN()} ></ListaQuestionarioSocioeconomicoComponente>
        </div>

    )
}
