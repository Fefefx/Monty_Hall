import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import styles from '../../../styles/Game.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Game() {

    const router = useRouter();

    const [valid, setValid] = useState(false);
    const [doors, setDoors] = useState([]);

    useEffect (() => {
        const doors = +router?.query.doors;
        const hasPresent = +router?.query.hasPresent;

        const amountValidDoors = doors >= 3 && doors <= 100;
        const hasValidPresent = hasPresent >= 1 && hasPresent <= doors;

        setValid(amountValidDoors && hasValidPresent);

    }, [router?.query, doors])

    useEffect(() => {
        const doors = +router?.query.doors;
        const hasPresent = +router?.query.hasPresent;
        setDoors(createDoors(doors, hasPresent));
    },[router?.query]);

    function renderDoors() {
      return doors.map(door =>{
        return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))}></Door>
      });
    }
  
    return(
        <div id={styles.game}>
            <div className={styles.doors}>
                {valid ? renderDoors() : <h1> Valores inválidos </h1>}
            </div>
            <div className={styles.buttons}>
                <Link href="/" passHref>
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}