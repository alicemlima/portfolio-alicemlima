import { Button, Row, Col } from 'react-bootstrap';
import Image from 'next/image'

import styles from './styles.module.css';
import desenvolvedora from '../../../public/img/desenvolvedora.png';
import eu from '../../../public/img/eu.png';

export default function Welcome() {
  return (
    <div>
    <Row >
        <Col className={styles['infos']}>
            <Image
                src={desenvolvedora} 
                alt="My Image"
            />
            <h2>Olá! Eu sou a Alice, sou desenvolvedora Web com foco em Front-end, um grande interesse e prazer. Mas também, possuo interesse em outras áreas.</h2>
            <h5>Veja mais em "Skills".</h5>
        </Col>
        <Col className={styles['infos']}>
            <Image
                src={eu} 
                alt="My Image"
            />
        </Col>
    </Row>
    <Col className={styles['buttons']}>
        <Button variant="outline-dark" size='lg'>Download CV</Button>
        <Button variant="outline-dark" size='lg'>Enviar email</Button>
    </Col>
    </div>
  )
}