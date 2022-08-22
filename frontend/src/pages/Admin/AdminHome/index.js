import React from "react";
import HomeComponente from "../../../Components/HomeComponente";
import ToobarAdmin from "../ToobarAdmin";

export default function AdminHome(){
    return(
        <div>
            <ToobarAdmin></ToobarAdmin>
            <HomeComponente></HomeComponente>
        </div>
    );
}