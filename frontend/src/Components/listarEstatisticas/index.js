import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import EstatisticaService from '../../services/EstatisticaService';

export default function ListarEstatisticas() {

    const cursoData = localStorage.getItem('cursoComponente')
    const periodoData = localStorage.getItem('periodoComponente')
    const consulta = {
        "curso": cursoData,
        "periodo": periodoData
    }
    const [quantidadeAnsiedadeModerada, setQuantidadeAnsiedadeModerada] = useState();
    const [statusMedioDepressao, setStatusMedioDepressao] = useState();
    const [statusMedioAnsiedade, setStatusMedioAnsiedade] = useState();
    const [quantiddeAnsiedadeGrave, setQuantiddeAnsiedadeGrave] = useState();
    const [quantidadeDepressaoModerada, setQuantidadeDepressaoModerada] = useState();
    const [quantidadeDiscente, setQuantidadeDiscente] = useState();
    const [quantidadeDepressaoGrave, setQuantidadeDepressaoGrave] = useState();
    const requisitarConsultaEstatistica = () => {
        //true true
        if (cursoData == '' &&
            (
                periodoData != '1º' &&
                periodoData != '2º' &&
                periodoData != '3º' &&
                periodoData != 'Outro' &&
                periodoData != 'Superior')) {
            EstatisticaService.getAllEstatistica().then((response) => {

                setQuantidadeAnsiedadeModerada(response.data.quantidadeAnsiedadeModerada);
                setStatusMedioDepressao(response.data.statusMedioDepressao);
                setStatusMedioAnsiedade(response.data.statusMedioAnsiedade);
                setQuantiddeAnsiedadeGrave(response.data.quantiddeAnsiedadeGrave);
                setQuantidadeDepressaoModerada(response.data.quantidadeDepressaoModerada);
                setQuantidadeDiscente(response.data.quantidadeDiscente);
                setQuantidadeDepressaoGrave(response.data.quantidadeDepressaoGrave);
            });
        }

        //true false
        if (cursoData != '' &&
            (
                periodoData != '1º' &&
                periodoData != '2º' &&
                periodoData != '3º' &&
                periodoData != 'Outro' &&
                periodoData != 'Superior')) {
            EstatisticaService.getByCurso(cursoData).then((response) => {

                setQuantidadeAnsiedadeModerada(response.data.quantidadeAnsiedadeModerada);
                setStatusMedioDepressao(response.data.statusMedioDepressao);
                setStatusMedioAnsiedade(response.data.statusMedioAnsiedade);
                setQuantiddeAnsiedadeGrave(response.data.quantiddeAnsiedadeGrave);
                setQuantidadeDepressaoModerada(response.data.quantidadeDepressaoModerada);
                setQuantidadeDiscente(response.data.quantidadeDiscente);
                setQuantidadeDepressaoGrave(response.data.quantidadeDepressaoGrave);
            });
        }

        //false true
        if (cursoData == '' &&
            !(
                periodoData != '1º' &&
                periodoData != '2º' &&
                periodoData != '3º' &&
                periodoData != 'Outro' &&
                periodoData != 'Superior')) {
            EstatisticaService.getByPeriodo(periodoData).then((response) => {

                setQuantidadeAnsiedadeModerada(response.data.quantidadeAnsiedadeModerada);
                setStatusMedioDepressao(response.data.statusMedioDepressao);
                setStatusMedioAnsiedade(response.data.statusMedioAnsiedade);
                setQuantiddeAnsiedadeGrave(response.data.quantiddeAnsiedadeGrave);
                setQuantidadeDepressaoModerada(response.data.quantidadeDepressaoModerada);
                setQuantidadeDiscente(response.data.quantidadeDiscente);
                setQuantidadeDepressaoGrave(response.data.quantidadeDepressaoGrave);
            });
        }

        //false false
        if (!cursoData == '' &&
            !(
                periodoData != '1º' &&
                periodoData != '2º' &&
                periodoData != '3º' &&
                periodoData != 'Outro' &&
                periodoData != 'Superior')) {
            EstatisticaService.getByCursoPeriodo(consulta).then((response) => {

                setQuantidadeAnsiedadeModerada(response.data.quantidadeAnsiedadeModerada);
                setStatusMedioDepressao(response.data.statusMedioDepressao);
                setStatusMedioAnsiedade(response.data.statusMedioAnsiedade);
                setQuantiddeAnsiedadeGrave(response.data.quantiddeAnsiedadeGrave);
                setQuantidadeDepressaoModerada(response.data.quantidadeDepressaoModerada);
                setQuantidadeDiscente(response.data.quantidadeDiscente);
                setQuantidadeDepressaoGrave(response.data.quantidadeDepressaoGrave);
            });
        }

    };

    useEffect(async () => {

        requisitarConsultaEstatistica()

    }, []);


    return (

        <div>

            <Card title="ESTATÍSTICAS"></Card>

            <Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card subTitle='QUANTIDADE DE DISCENTES: ' > <label>{quantidadeDiscente}</label> </Card>
                <Card subTitle='QUANTIDADE EM DEPRESSÃO GRAVE: ' > <label>{quantidadeDepressaoGrave}</label> </Card>
                <Card subTitle='QUANTIDADE EM DEPRESSÃO MODERADA' > <label>{quantidadeDepressaoModerada}</label> </Card>
                <Card subTitle='QUANTIDADE EM ANSIEDADE GRAVE' > <label>{quantiddeAnsiedadeGrave}</label> </Card>
                <Card subTitle='QUANTIDADE EM ANSIEDADE MODERADA' > <label>{quantidadeAnsiedadeModerada}</label> </Card>
                <Card subTitle='STATUS MEDIO DE DEPRESSÃO' > <label>{statusMedioDepressao}</label> </Card>
                <Card subTitle='STATUS MEDIO DE ANSIEDADE' > <label>{statusMedioAnsiedade}</label> </Card>

            </Card>

        </div>

    );
}