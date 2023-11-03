import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Tittles from '../Titles/Titles';
import './Navbar.css';

function Header() {
  return (
    <Container className='Navbar-container'>
      <Navbar>
        <Container>
          <Navbar.Brand><Tittles></Tittles></Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
