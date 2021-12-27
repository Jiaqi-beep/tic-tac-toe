import { useEffect, useState } from "react";
import { win, draw } from "../helper";

import Layout from "../components/Layout";
import Square from "../components/Square";

import styles from "../styles/tic.module.scss";

export default function Home() {

  const emptyArray = Array(9).fill(null);
  const randomPlayer = Math.random() < 0.5 ? "o" : "x";

  const [board, setBoard] = useState(emptyArray);
  const [player, setPlayer] = useState(randomPlayer);
  const [winner, setWinner] = useState(null);

  useEffect(()=>{
    setWinner(win(board));
  }, [board])

  const noWinner = draw(board);
  const message = winner ? `Player ${winner} win!` : noWinner ? "It's a draw!" : `It's player ${player}'s turn.`;

  function onClick(index) {
    if (board[index] || winner || noWinner) return;
    const hist = board.slice(0, index + 1);
    hist[index] = player;
    const rest = board.slice(index + 1, board.length);
    setPlayer(player === "o" ? "x" : "o");
    setBoard(hist.concat(rest));
  }

  const clear = () => {
    setBoard(emptyArray);
    setPlayer(randomPlayer);
    winner = null;
  }

  return (
    <Layout>
      <main>
        <h1>
          <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank">Tic Tac Toe</a>
        </h1>
        <div className={styles.square}>
          {board.map((value, i) =>
            <Square key={i} value={value} onClick={() => onClick(i)} />
          )}
        </div>
        <button 
          className={styles.clearButton}
          onClick={() => clear()}>clear</button>
        <div className={styles.message}>
          <h2>{message}</h2>
        </div>
      </main>
    </Layout>
  )
}
