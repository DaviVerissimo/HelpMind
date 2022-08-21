import React from "react";
import ListaPareceres from "../../../Components/ListaPareceres";
import ToobarProfissionalDeSaude from "../ToobarProfissionalDeSaude";

export default function ListarPareceresPsicologicorProfSaude(){

    return(
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaPareceres></ListaPareceres>
        </div>
    );
}
