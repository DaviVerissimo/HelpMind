import React from "react";
import ListaPareceres from "../../../Components/ListaPareceres";
import ToobarPsicologo from "../ToobarPsicologo";
import Usuario from "../../../services/Usuario";

export default function ListarPareceresPsicologicorPisicologo(){

    return(
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ListaPareceres data={Usuario.get_PSICOLOGO()} ></ListaPareceres>
        </div>
    );
}
