import { Row } from 'react-bootstrap';
import styles from './styles.module.css';

export default function Title() {
  return (
    <Row className={styles["title"]}>
        <h1>Sobre</h1>
    </Row>
  )
}