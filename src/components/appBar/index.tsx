import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from './styles.module.css';
export default function Appbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles['container']}>
      <Container className={styles['container']}>
      <Navbar.Brand href="/">AliceMLima</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className={styles['nav-link']}>
        <Nav>
          <Nav.Link href="/about">Sobre</Nav.Link>
          <Nav.Link href="#memes">Projetos</Nav.Link>
          <Nav.Link href="#memes">Skills</Nav.Link>
          <Nav.Link href="#memes">Contatos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}