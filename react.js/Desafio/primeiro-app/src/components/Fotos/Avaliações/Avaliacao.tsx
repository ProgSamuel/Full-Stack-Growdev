import React from 'react';

const Avaliacao = ({ nota, comentario }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <p><strong>Nota:</strong> {nota}</p>
      <p><strong>Comentário:</strong> {comentario}</p>
    </div>
  );
};

const Avaliacoes = () => {
  const avaliacoes = [
    { nota: 5, comentario: 'Ótima comida e ótimo serviço!' },
    { nota: 4, comentario: 'Gostei, mas poderia ser melhor.' },
    { nota: 4, comentario: 'Ambiente agradável, mas a comida poderia ser mais saborosa.' }
  ];

  return (
    <div>
      <h2>Avaliações</h2>
      {avaliacoes.map((avaliacao, index) => (
        <Avaliacao key={index} nota={avaliacao.nota} comentario={avaliacao.comentario} />
      ))}
    </div>
  );
};

export default Avaliacoes;
