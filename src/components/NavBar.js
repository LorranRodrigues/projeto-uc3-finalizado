import '../App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Destinos from '../pages/Destinos';
import Pacotes from '../pages/Pacotes';
import Reservas from '../pages/Reservas';
import Contatos from '../pages/Contatos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import Brasil from '../images/brazil.png'
import Franca from '../images/france.png'
import ReinoUnido from '../images/united-kingdom.png'
import Eua from '../images/united-states.png'
import Logo from '../images/icon.png';
import Login from '../pages/Login';
import MinhasReservas from '../pages/MinhasReservas';
import { IoMdHome } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdAirplaneTicket } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';




function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Navbar expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/" className='d-md-none d-block' >TravellCorp</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className=' d-md-flex justify-content-md-around'>
            <Nav className="mr-auto d-flex gap-md-3">
              <Nav.Link as={Link} to="/"> <IoMdHome /> Início</Nav.Link>
              <Nav.Link as={Link} to="/destinos"><FaMapMarkerAlt /> Destinos</Nav.Link>
              <Nav.Link as={Link} to="/pacotes"><PiBagSimpleFill /> Pacotes</Nav.Link>
              <Nav.Link as={Link} to="/reservas"><MdAirplaneTicket /> Reservas</Nav.Link>
              <Nav.Link as={Link} to="/contatos"><IoChatbubbleEllipsesSharp /> Contatos</Nav.Link>
            </Nav>
            <Nav className='d-flex gap-md-3'>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-currency">
                  R$
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* Opções de moeda (por exemplo, USD, EUR, etc.) */}
                  <Dropdown.Item>
                    <div className="d-flex">
                      <div className="col-6">BRL</div>
                      <div className="col-6 d-flex justify-content-end">R$</div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className="d-flex">
                      <div className="col-6">USD</div>
                      <div className="col-6 d-flex justify-content-end">$</div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className="d-flex">
                      <div className="col-6">EUR</div>
                      <div className="col-6 d-flex justify-content-end">Є</div>
                    </div>
                  </Dropdown.Item>
                  {/* Adicione mais opções conforme necessário */}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-country">
                  <img src={Brasil} alt="" width={25} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* Opções de bandeira (por exemplo, Brasil, Estados Unidos, etc.) */}
                  <Dropdown.Item> <img src={Brasil} alt="" width={25} /> Brasil</Dropdown.Item>
                  <Dropdown.Item> <img src={Eua} alt="" width={25} /> Estados Unidos</Dropdown.Item>
                  <Dropdown.Item> <img src={Franca} alt="" width={25} /> França</Dropdown.Item>
                  <Dropdown.Item> <img src={ReinoUnido} alt="" width={25} /> Reino Unido</Dropdown.Item>
                  {/* Adicione mais opções conforme necessário */}
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link as={Link} to="/minhas-reservas"><IoBagCheck /> Suas Reservas</Nav.Link>
              <Nav.Link as={Link} to="/login"><IoLogIn /> Entrar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/pacotes" element={<Pacotes />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/minhas-reservas" element={<MinhasReservas />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Rotas;

