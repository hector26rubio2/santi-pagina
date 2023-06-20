import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { YoutubeEmbed } from "../component/Videos";

export const Inicio = () => {
	return (
		<>
			<h1>Bienvenido a nuestra pagína kids studio </h1>
			<p className="mt-4">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
				deleniti quae blanditiis iusto autem dicta maiores cupiditate, assumenda
				consequatur optio iure expedita quam sunt distinctio nulla
				necessitatibus voluptates. Amet, maiores.
			</p>
			<hr />
			<h2>Temario para grado Tercero</h2>
			<Row className="mt-5">
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/src/assets/fondo.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/src/assets/fondo.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/src/assets/fondo.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/src/assets/fondo.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/public/fondo.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/src/assets/fondo.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>

      <YoutubeEmbed dataUrl="https://www.youtube.com/embed/wGxDfSWC4Ww?start=1" />
		</>
	);
};


