import React from "react";
import HomeComponente from "../../../Components/HomeComponente";
import ToobarServidorPublica from "../ToobarServidorPublico";

export default function ServidorHome(){
    return(
        <div>
            <ToobarServidorPublica></ToobarServidorPublica>
            <HomeComponente></HomeComponente>
        </div>
    );
}