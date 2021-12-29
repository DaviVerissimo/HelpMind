import { Card } from 'primereact/card';
import React from 'react';
import './styles.css'
import { Button } from 'primereact/button';

import logoImg from '../../../assets/logo.png';
import ToobarPublica from '../ToobarPublica';

export default function Login() {
    return(
        <div className="login-container p-grid p-justify-center p-align-center" style={{ height: '100%' }} >
            <ToobarPublica></ToobarPublica>
        <div className="login-ladoEsquerdo p-col-4 " >
            <img src={logoImg} alt="logo"></img>
        </div>

        <div className="login-ladoDireito p-col-8" >
            <Card title="SEJA BEM VINDO"
                subTitle="aqui você encontra opções de ajuda" >

                <div className=" p-grid p-dir-col p-pl-3" >
                    <Button className="p-mb-3 p-col-4" label="ENTRAR COM E-MAIL ACADEMICO" />
                    <h3>ou</h3>
                    <Button className="p-mb-3 p-col-4 p-button-secondary" label="NÂO POSSUO E-MAIL ACADEMICO" />
                </div>
            </Card>
        </div>
    </div>
    );
}