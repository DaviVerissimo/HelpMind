import React from "react";
import ListaPareceres from "../../../Components/ListaPareceres";
import ToobarProfissionalDeSaude from "../ToobarProfissionalDeSaude";
import Usuario from "../../../services/Usuario";

export default function ListarPareceresPsicologicorProfSaude(){

    return(
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaPareceres data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaPareceres>
        </div>
    );
}
