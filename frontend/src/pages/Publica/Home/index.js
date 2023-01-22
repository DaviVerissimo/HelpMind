import React from 'react';
import './styles.css'
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logoImg from '../../../assets/logo.svg';

export default function Home() {

    const history = useHistory();

    return (

        <div className="home-container p-d-flex p-grid p-flex-wrap p-justify-center p-align-center p-p-6" style={{ margin: 0, height: '100%', padding: 0 }}>
            <div className="home-ladoEsquerdo" >
                <img src={logoImg} alt="logo" style={{ height: "20em" }} />
            </div>

            <div className="home-ladoDireito">
                <div className="p-col p-component">
                    Mapeamento e gestão da saúde mental estudantil do IFPB é com o HelpMind!<br />
                    Selecione uma das opções:
                </div>
                <div className="p-col">
                    <Button className="p-col-12" label="SOU ESTUDANTE/SERVIDOR DO IFPB" onClick={() => { history.push('/publica/Login') }} />
                </div>
                <div className="p-col">
                    <Button className="p-col-12" label="MATERIAIS DE APOIO ONLINE" onClick={() => { history.push('/publica/MateriaisOnline') }} />
                </div>
                <div className="p-col">
                    <Button className="p-col-12" label="QUEM SOMOS" onClick={() => { history.push('/publica/QuemSomos') }} />
                </div>

                {/* <Button className={configBotao} label="SIMULAÇÃO DOS INVENTARIOS DE BECK" onClick={() => { history.push('/Publica/SimuladorDeQuestionario/EscolherQuestionarios') }} /> */}

            </div>
        </div>
    );

}