import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';

export default function PerfilDiscenteDetalhado() {
    //realizar get no useEffects e buscar estudante por Id. 
    const {id} = useParams();
    console.log(id + ' id do discente selecionada')
    const nome = 'Renato Russo';
    const email = 'renatorusso@gmail.com';
    const matricula = '0878814201728';
    const niveldeAnsiedade = '37';
    const statusAnsiedade = '03 ANSIEDADE GRAVE';
    const niveldeDepressao = '6';
    const statusDepressao = '03 DEPRESSÃO MINIMA';
    var configBotao = "p-mb-3 p-col-3";
    var largura = window. screen. width;
    if (largura < 640){
        configBotao = "p-mt-3 ";
    }
    const history = useHistory();
    

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <div>
                <Card title='PERFIL DO DISCENTE ' >
                    <Card subTitle='NOME: ' > <label>{nome}</label> </Card>
                    <Card subTitle='EMAIL: ' > <label>{email}</label> </Card>
                    <Card subTitle='MATRICULA: ' > <label>{matricula}</label> </Card>
                    <Card subTitle='MEDIA DE ANSIEDADE' > <label>{niveldeAnsiedade}</label> </Card>
                    <Card subTitle='STATUS DE ANSIEDADE' > <label>{statusAnsiedade}</label> </Card>
                    <Card subTitle='MEDIA DE DEPRESSÃO' > <label>{niveldeDepressao}</label> </Card>
                    <Card subTitle='STATUS DE DEPRESSÃO' > <label>{statusDepressao}</label> </Card>

                    <Card className='p-col-16' >
                        <div>
                            <Button className={configBotao} label="LISTAR INVENTÁRIO DE DEPRESSÃO DE BECK (BDI)"  onClick={() => { history.push('/profissionalDeSaude/QuestionarioDepressaoDeBeck') }} />
                        </div>
                        <div>
                            <Button className={configBotao} label="LISTAR INVENTÁRIO DE ANSIEDADE DE BECK (BAI)" onClick={() => { history.push('/profissionalDeSaude/QuestionarioAnsiedadeDeBeck') }}/>
                        </div>
                        <div>
                            <Button className={configBotao} label="LISTAR QUESTIONÁRIO SOCIOECONÔMICO (QS)"  onClick={() => {history.push('/profissionalDeSaude/QuestionarioSocioeconomico')}} />
                        </div>
                    </Card>

                    

                </Card>
            </div>
        </div>
    );
}