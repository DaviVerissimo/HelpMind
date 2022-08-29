import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaQuestionariosDepressaoDeBeckComponente from '../../../Components/ListaQuestionariosDepressaoDeBeckComponente';
import Usuario from '../../../services/Usuario';

export default function ListaQuestionariosDepressaoDeBeckAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ListaQuestionariosDepressaoDeBeckComponente
                data={Usuario.get_ADMIN()} ></ListaQuestionariosDepressaoDeBeckComponente>
        </div>

    )
}
