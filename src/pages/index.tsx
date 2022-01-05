import Card from "../components/Card";
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {

  const [amountDoors, setAmountDoors] = useState(3);
  const [doorWithPresent, setDoorWithPresent] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1> Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Qtde de portas ?" 
            onChange={newAmount => setAmountDoors(newAmount)} 
            value={amountDoors}></NumberInput>
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text="Porta com presente:" 
            onChange={newDoorWithPresent => setDoorWithPresent(newDoorWithPresent)} 
            value={doorWithPresent}></NumberInput>
        </Card>
        <Card bgColor="#28a085">
          <Link href={`game/${amountDoors}/${doorWithPresent}`} passHref>
            <h2 className={styles.link}> Iniciar</h2>
          </Link> 
        </Card>
      </div>
    </div>
  )
}
