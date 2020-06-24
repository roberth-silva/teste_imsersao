import React from 'react';
import Modulo from './Modulo';
import Titulo from './Titulo';
import Contador from './Contador';

function App() {
  return(
    <div>
      <Titulo titulo="Meu nome" />
      <h2>Informação 1</h2>
      <Modulo />      
    </div>
  );
}

export default App;