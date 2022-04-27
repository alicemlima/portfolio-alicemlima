import type { NextPage } from 'next'
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../styles/Home.module.css'
import Welcome from '../components/welcome';
import Title from '../components/title';

const About: NextPage = () => {
  return ( 
    <Container> 
       <Title />
        <h5>
          Moro em Natal-RN, Brasil. Tenho 21 anos e sou estudante 
          do bacharelado em Tecnologia da informação na Universidade Federal do Rio Grande do Norte.
          Trabalho e estudo front-end desde 2020, principalmente React, quando desenvolvimento web se tornou uma paixão.
          Adoro web design, além de UI e UX design.
        </h5>
    </Container>
  );
}

export default About