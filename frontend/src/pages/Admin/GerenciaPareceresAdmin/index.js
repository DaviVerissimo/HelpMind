import React from "react";
import GerenciaPareceresComponent from "../../../Components/GerenciaPareceresComponent";
import ToobarAdmin from "../ToobarAdmin";
import Usuario from "../../../services/Usuario";

export default function GerenciaPareceresAdmin(){

    return(
        <div>
            <ToobarAdmin></ToobarAdmin>
            <GerenciaPareceresComponent data={Usuario.get_ADMIN()} ></GerenciaPareceresComponent>
        </div>
    );
}
