import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";

//evento de javascrio onclick Navigate libreria react-router-dom
export const Menu = () => {
	const navigate = useNavigate();
	const irInicio = () => {
		navigate("/inicio");
	};
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand onClick={irInicio}>React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink className="btn" to="/inicio">
							Inicio
						</NavLink>
						<NavLink className="btn" to="/contactenos">
							Contactanos
						</NavLink>
						<NavDropdown title="Tercero" id="basic-nav-dropdown">
							<NavDropdown.Item >
								<Link to="/tercero">Temas</Link>
							</NavDropdown.Item>
              <NavDropdown.Item >
								<Link to="/tercero/matematicas">Matematicas</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Cuerto" id="basic-nav-dropdown">
							<NavDropdown.Item >
								<Link to="/about">Temas</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
