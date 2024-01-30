import { Card } from 'primereact/card';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../ToobarDiscente';
import BarraPessoalDiscente from '../BarraPessoalDiscente';
import RotinaQuestionarioSocioeconomicoService from '../../../services/RotinaQuestionarioSocioeconomicoService';
import InstrucoesDiscente from '../../../Components/InstrucoesDiscente';
import BotaoSair from '../../../Components/BotaoSair';

export default function PerfilDiscente() {

    const id = localStorage.getItem('id');
    const history = useHistory();
    RotinaQuestionarioSocioeconomicoService.isRedirecionarQuestionarioSocioeconomico(id)
        .then(Response => {
            if (Response.data) {
                history.push('/discente/QuestionarioSocioeconomico')
            };
        })
        .catch(error => console.error(error))

    return (
        <div>
            <ToobarDiscente></ToobarDiscente>
            <div>
                <Card title='MEU PERFIL ' >
                    <BarraPessoalDiscente idDiscente={id} ></BarraPessoalDiscente>
                    <BotaoSair></BotaoSair>
                    <div>
                        <InstrucoesDiscente></InstrucoesDiscente>
                    </div>
                </Card>
            </div>
        </div>
    );
}