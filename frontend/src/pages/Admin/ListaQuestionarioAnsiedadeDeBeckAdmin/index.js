import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaQuestionariosAnsiedadeDeBeckComponente from '../../../Components/ListaQuestionariosAnsiedadeDeBeckComponente';
import Usuario from '../../../services/Usuario';

export default function ListaQuestionarioAnsiedadeDeBeckAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ListaQuestionariosAnsiedadeDeBeckComponente data={Usuario.get_ADMIN()} ></ListaQuestionariosAnsiedadeDeBeckComponente>
        </div>
    )
}
