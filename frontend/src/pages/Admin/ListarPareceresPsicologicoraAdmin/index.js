import React from "react";
import ListaPareceres from "../../../Components/ListaPareceres";
import ToobarAdmin from "../ToobarAdmin";
import Usuario from "../../../services/Usuario";

export default function ListarPareceresPsicologicoraAdmin(){

    return(
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ListaPareceres data={Usuario.get_ADMIN()} ></ListaPareceres>
        </div>
    );
}
