import styles from '../styles/Card.module.css';
import CardProps from '../interfaces/card';


export default function Card(props: CardProps) {
    return (
        <div className={styles.card} style={{
            backgroundColor: props.bgColor ?? '#fff'
        }}>
            {props.children}
        </div>
    )
}