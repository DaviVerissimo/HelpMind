import { Card } from 'primereact/card';
import React from 'react';
import './styles.css'
import { Button } from 'primereact/button';

import logoImg from '../../../assets/logo.png';
import ToobarPublica from '../ToobarPublica';

export default function Login() {
    return (
        <div>
            <ToobarPublica />
            <div className="login-container p-grid p-justify-center p-align-center p-mt-3" style={{ height: '100%' }} >

                <div className="login p-col-6" >
                    <Card title="SEJA BEM VINDO ESTUDANTE E COMUNIDADE ACADÊMICA"
                        subTitle="aqui opções de ajuda ao estudante, e auxilio aos profissionais de saúde " >

                        <div  >
                            <Button className="p-mb-3 p-col-4" label="ENTRAR COM E-MAIL ACADEMICO" />
                            <h3>ou</h3>
                            <Button className="p-mb-3 p-col-4 p-button-secondary" label="NÂO POSSUO E-MAIL ACADEMICO" />
                        </div>

                        <Card subTitle='Realize login para acessar todas as opções: ' ></Card>
                        <Card subTitle=' • Inventário de Depressão de Beck (BDI)' ></Card>
                        <Card subTitle=' • Inventário de Ansiedade de Beck (BAI)' ></Card>
                        <Card subTitle=' • Questionário socioeconômico ' ></Card>
                        <Card subTitle=' • Material de apoio a saúde mental. (disponível publicamente)' ></Card>
                    </Card>
                </div>
            </div>
        </div>
    );
}