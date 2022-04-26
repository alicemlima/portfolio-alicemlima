import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import desenvolvedora from '../../public/img/desenvolvedora.png';
import eu from '../../public/img/eu.png';
import { Container, Row, Col } from 'react-bootstrap';

const Home: NextPage = () => {
  return ( 
    <Container>
      <Row className={styles['infos']}>
      <Col>
        <Image
          src={desenvolvedora} 
          alt="My Image"
        />
        <h2>Olá! Meu nome é Alice e eu sou desenvolvedora Web.
          Com foco em Front-end, um grande interesse e prazer. Mas também, possuo em outras áreas.</h2>
        <h5>Veja mais em "Skills".</h5>
      </Col>
      <Col>
      <Image
          src={eu} 
          alt="My Image"
        />
      </Col>
      </Row>
    </Container>
  );
}

export default Home