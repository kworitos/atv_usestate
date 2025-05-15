import { useState } from 'react';

export function App() {
  const [numero, setNumero] = useState(100);
  const [bool, setBool]= useState (true);

  function diminuir() {
    setNumero(numero - 100);
  }

  function aumentar() {
    setNumero(numero + 100);
  }

  function mostrar() {
    setBool(true);
  }

  
  function esconder() {
    setBool(false);
  }

  return (
    <div>

      <h1>numero: {numero}</h1>

      <div>
        <button onClick={diminuir}>diminuir</button> 
        <button onClick={aumentar}>aumentar</button> 

        {bool? <p> {numero} </p>:null}
        {bool ? (
          <button onClick={esconder}>esconder</button>
        ) : (
          <button onClick={mostrar}>mostrar</button>
        )}

      </div>
    </div>
  );
}
