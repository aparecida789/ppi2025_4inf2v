import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(null);       // nº da vez
  const [history, setHistory] = useState([]);                 // números já sorteados
  const [warning, setWarning] = useState("");                 // “Já foi sorteado!”

  function handleClick() {
    const drawn = Math.floor(Math.random() * 40) + 1;         // 1‒40

    if (history.includes(drawn)) {
      setWarning("Já foi sorteado!");
      setLuckyNumber(drawn);          // opcional – mostra o nº repetido
      return;
    }

    // se chegou aqui, é novo
    setHistory([...history, drawn]);
    setLuckyNumber(drawn);
    setWarning("");
  }

  return (
    <div className={styles.container}>
      {/* título ou resultado */}
      {luckyNumber === null ? (
        <h1>Lucky Number 🎲</h1>
      ) : (
        <h1>Lucky Number = {luckyNumber}</h1>
      )}

      {/* botão */}
      <button className={styles.button} onClick={handleClick}>
        I'm feeling lucky today!
      </button>

      {/* aviso de repetição */}
      {warning && <p className={styles.warning}>{warning}</p>}

      {/* lista de sorteados */}
      {history.length > 0 && (
        <>
          <h2 className={styles.subtitle}>Números sorteados:</h2>
          <ul className={styles.list}>
            {history.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}