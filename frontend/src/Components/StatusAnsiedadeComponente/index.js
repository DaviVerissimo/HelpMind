import React from 'react';
import { Card } from 'primereact/card';

const StatusAnsiedadeComponente = ({ estatisticas }) => {
  return (
    <div>
      {estatisticas.map((estatistica, index) => {
        let corTexto = '';
        let status = '';

        if (estatistica.media >= 0 && estatistica.media <= 7) {
          corTexto = 'green'; // Mínima - cor verde
          status = 'Ansiedade Mínima';
        } else if (estatistica.media >= 8 && estatistica.media <= 15) {
          corTexto = 'yellow'; // Leve - cor amarela
          status = 'Ansiedade Leve';
        } else if (estatistica.media >= 16 && estatistica.media <= 25) {
          corTexto = 'orange'; // Moderada - cor laranja
          status = 'Ansiedade Moderada';
        } else {
          corTexto = 'red'; // Grave - cor vermelha
          status = 'Ansiedade Grave';
        }

        const cardStyle = {
          color: corTexto // Define a cor do texto com base na pontuação
        };

        return (
          <div key={index}>
            <div>
              {/* <Card subTitle='NOME DO CURSO'> */}
              <div style={{ display: 'flex' }}>
                <Card subTitle='CURSO' style={{ ...cardStyle, flex: '40%' }}>
                  <h2>{estatistica.curso}</h2>
                </Card>
                <Card subTitle={'Status'} style={{ ...cardStyle, flex: '30%' }}>
                  <h2>{status}</h2>
                </Card>
                <Card subTitle={'Média'} style={{ ...cardStyle, flex: '30%' }}>
                  <h1>{estatistica.media}</h1>
                </Card>
              </div>
              {/* </Card> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatusAnsiedadeComponente;
