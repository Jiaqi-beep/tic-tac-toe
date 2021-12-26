import { useState } from "react";

import Layout from "../components/Layout";
import Square from "../components/Square";

import styles from "../styles/tic.module.scss";

export default function Home() {
  const [board, setBoard] = useState([Array(9).fill("")]);
  const [player, setPlayer] = useState(Math.random() < 0.5 ? "o" : "x");

  function onClick(index) {
    const hist = board.slice(0, index);
    
    setBoard();
  }

  function messageDisplay(){
    const text1 = `It's player ${player}'s turn.`;
    
    return text1;
  }

  return (
    <Layout>
      <main>
        <h1>
          <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">Tic Tac Toe</a>
        </h1>
        <div className={styles.message}>
          <h2>{messageDisplay()}</h2>
        </div>
        <div className={styles.square}>
          {board.map((value, i) =>
            <Square key={i} value={value} onClick={onClick(i)} />
          )}
        </div>
      </main>
    </Layout>
  )
}
