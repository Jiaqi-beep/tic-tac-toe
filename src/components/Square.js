import styles from "../styles/tic.module.scss";

export default function Square({value, onClick}){
    const style = value === "o" ? styles.squareO : value === null ? styles.squareN : styles.squareX;
    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}