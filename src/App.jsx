import React, { useState } from 'react';

const countries = [
  { name: "Brasil", curiosity: "É o único país que participou de todas as edições da Copa do Mundo." },
  { name: "Japão", curiosity: "O Japão tem mais de 6800 ilhas, sendo apenas 430 habitadas." },
  { name: "Egito", curiosity: "A Grande Pirâmide de Gizé é a única das Sete Maravilhas do Mundo Antigo ainda de pé." },
  { name: "Islândia", curiosity: "Não existem formigas na Islândia." },
  {name: "Austrália", curiosity: "A Austrália é o lar de mais de 10.000 praias, você poderia visitar uma diferente por 27 anos!"},
  {name: "China", curiosity: "A Muralha da China é a maior estrutura já construída pelo homem e pode ser vista do espaço em condições específicas."},
  {name: "Itália", curiosity: "A Itália é o país com mais Patrimônios Mundiais da UNESCO, totalizando mais de 50"},
  {name: "Rússia", curiosity: "A Rússia é tão grande que cobre 11 fusos horários diferentes"},
  {name: "Canadá", curiosity: "O Canadá tem mais lagos do que todos os outros países do mundo juntos."},
];

function App() {
  const [randomCuriosity, setRandomCuriosity] = useState(null);

  const handleRandomCuriosity = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setRandomCuriosity(countries[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Curiosidades dos Países</h1>
      <button 
        onClick={handleRandomCuriosity} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        clique aqui para mostrar curiosidades de alguns países!
      </button>
      {randomCuriosity && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>{randomCuriosity.name}:</strong> {randomCuriosity.curiosity}
        </div>
      )}
    </div>
  );
}

export default App;
