import type { NextPage } from 'next'
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../styles/Home.module.css'
import Welcome from '../components/welcome';

const Home: NextPage = () => {
  return ( 
    <Container>
      <Welcome/>
    </Container>
  );
}

export default Home