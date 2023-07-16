import React from 'react';
import { Card } from 'primereact/card';

const RelatorioDepressaoComponente = ({ estatisticas }) => {
  return (
    <div>
      {estatisticas.map((estatistica, index) => {
        let corTexto = '';
        let status = '';

        if (estatistica.media >= 0 && estatistica.media <= 13) {
          corTexto = 'green'; // Mínima - cor verde
          status = 'Depressão Mínima';
        } else if (estatistica.media >= 14 && estatistica.media <= 19) {
          corTexto = '#FFEB3B'; // Leve - cor amarela
          status = 'Depressão Leve';
        } else if (estatistica.media >= 20 && estatistica.media <= 28) {
          corTexto = 'orange'; // Moderada - cor laranja
          status = 'Depressão Moderada';
        } else {
          corTexto = 'red'; // Grave - cor vermelha
          status = 'Depressão Grave';
        }

        const cardStyle = {
          color: corTexto // Define a cor do texto com base na pontuação
        };

        return (
          <div key={index}>
            {/* <Card subTitle='NOME DO CURSO'> */}
            <div style={{ display: 'flex' }}>
              <Card subTitle={'CURSO'} style={{ ...cardStyle, flex: '40%' }}>
                <h2>{estatistica.curso}</h2>
              </Card>
              <Card subTitle={'STATUS'} style={{ ...cardStyle, flex: '30%' }}>
                <h2>{status}</h2>
              </Card>
              <Card subTitle={'MÉDIA'} style={{ ...cardStyle, flex: '30%' }}>
                <h1>{estatistica.media}</h1>
              </Card>
            </div>
            {/* </Card> */}
          </div>
        );
      })}
    </div>
  );
};

export default RelatorioDepressaoComponente;
