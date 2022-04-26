import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img from '../../public/desenvolvedora.png';
import { Container, Row, Col } from 'react-bootstrap';

const Home: NextPage = () => {
  return ( 
    <Container>
      <Row>
      <Col className='align-items-center'>
        <Image
          src={img} 
          alt="My Image"
        />
        <h2>Olá! Meu nome é Alice e eu sou desenvolvedora Web.
          Com foco em Front-end, um grande interesse e prazer. Mas também, possuo em outras áreas.</h2>
        <h5>Veja mais em "Skills".</h5>
      </Col>
      <Col>
      </Col>
      </Row>
    </Container>
  )
}

export default Home
