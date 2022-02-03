import React from 'react';
import './styles.css'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import logoImg from '../../assets/logo.png';


function navegar(pagina, history) {
    history.push(pagina);
}

export default function Home() {
    const history = useHistory();

    return (

        <div className="home-container p-grid p-justify-center p-align-center" style={{ height: '100%' }} >


            <div className="home-ladoEsquerdo p-col-4 " >

                <img src={logoImg} alt="logo"></img>

            </div>

            <div className="home-ladoDireito p-col-8" >
                <Card title="CONHEÇA SUA NOVA FERRAMENTA DE AUXILIO"
                    subTitle="A SAÚDE MENTAL DOS ESTUDANTES DO IFPB" >

                    <div className=" p-grid p-dir-col p-pl-3" >
                        <Button className="p-mb-3 p-col-4" label="SOU ESTUDANTE/SERVIDOR DO IFPB" onClick={() => { history.push('/publica/Login') }} />
                        <Button className="p-mb-3 p-col-4" label="MATERIAIS DE APOIO ONLINE" />
                        <Button className="p-mb-3 p-col-4" label="INVENTARIO BECK" />
                        <Button className="p-mb-3 p-col-4" label="QUEM SOMOS" onClick={() => { history.push('/publica/QuemSomos') }} />
                    </div>
                </Card>


            </div>
        </div>




    );

}