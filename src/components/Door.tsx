import styles from '../styles/Door.module.css';
import DoorProps from '../interfaces/door';
import Present from './Present';

export default function Door(props: DoorProps) {

    const door = props.value;
    const selected = door.selected && !door.open ? styles.selected : '';

    const toggleSelected = e => props.onChange(door.toggleSelected());
    const open = e => {
        e.stopPropagation();
        props.onChange(door.openSelected());  
    }; 

    function renderDoor() {
        return (
                <div className={styles.door}>
                    <div className={styles.number}>
                        {door.number}
                    </div>
                <div className={styles.knob} onClick={open}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={toggleSelected}>
            <div className={`${styles.frame} ${selected}`}>
                { door.closed ? renderDoor() :
                 door.hasPresent ? <Present></Present> : false 
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}