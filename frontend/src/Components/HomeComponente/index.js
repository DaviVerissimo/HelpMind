import React from 'react';
import './styles.css'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logoImg from '../../assets/logo.svg';

export default function HomeComponente() {

    var configBotao = "p-mb-3 p-col-4";
    var largura = window. screen. width;
    var tamanhoImagem = '50%';
    var tamanhoBemVimdo = 'p-col-4 p-mb-5';
    
    if (largura < 640){
        configBotao = "p-mb-3";
        tamanhoImagem = '100%'
        tamanhoBemVimdo = 'p-col-12 p-mb-5';
    }

    const history = useHistory();

    return (

        <div className="home-container p-grid p-justify-center p-align-center p-mt-6" style={{ height: '100%' }} >
            <div className="home-ladoEsquerdo p-col-4 " >
                <img src={logoImg} alt="logo" height={tamanhoImagem} width={tamanhoImagem}   ></img>
            </div>

            <div className="home-ladoDireito p-col-8" >
                <Card 
                title="CONHEÇA SUA NOVA FERRAMENTA DE AUXILIO"
                    subTitle="A SAÚDE MENTAL DOS ESTUDANTES DO IFPB" >
                        <Card title='Bem-vindo(a)!' className={tamanhoBemVimdo}
                        subTitle='É com muito prazer que lhe convidamos para conhecer ao software e interagir com este produto educacional' ></Card>
                    <div className=" p-grid p-dir-col p-pl-3" >
                        <Button className={configBotao} label="SOU ESTUDANTE/SERVIDOR DO IFPB" onClick={() => { history.push('/publica/Login') }} />
                        <Button className={configBotao} label="MATERIAIS DE APOIO ONLINE" onClick={() => { history.push('/publica/MateriaisOnline') }} />
                        {/* <Button className={configBotao} label="SIMULAÇÃO DOS INVENTARIOS DE BECK" onClick={() => { history.push('/Publica/SimuladorDeQuestionario/EscolherQuestionarios') }} /> */}
                        <Button className={configBotao} label="QUEM SOMOS" onClick={() => { history.push('/publica/QuemSomos') }} />
                    </div>
                </Card>
            </div>
        </div>
    );

}