import { Card, CardGroup, Button, Container, Tab, Tabs } from "react-bootstrap";
function Home() {
    return (
        <main className="mt-4 py-4">
            <Container fluid>
                <h1>Bem-vindo!</h1>
                <p>Aqui iremos encontrar as últimas novidades e tendências do mundo da tecnologia.</p>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/09/09/21/38/keyboard-933568_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Notícia 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/04/23/19/30/earth-2254769_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Notícia 2</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Notícia 3</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
            <hr />
            <Container fluid>

                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="texto1" title="Para você">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, vitae reprehenderit? Veniam, nesciunt quo ipsa eius nulla qui accusantium cum odit aut, quas aliquid ab. In molestiae cumque natus nemo.

                    </Tab>
                    <Tab eventKey="profile" title="Para empresas">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates, maxime, suscipit inventore laboriosam accusantium consequatur voluptatem unde ad provident nam adipisci repellendus dolores repudiandae laborum, praesentium ea ratione temporibus.
                    </Tab>
                    <Tab eventKey="longer-tab" title="Programas">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab eaque ut repudiandae porro nesciunt, aliquid debitis recusandae aut natus molestiae fugiat officia repellat! Molestias natus laudantium fugiat ut adipisci.
                    </Tab>
                    <Tab eventKey="contact" title="Blog">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo suscipit numquam voluptate ad quas porro maiores exercitationem unde obcaecati ipsam praesentium, quos illo quod a omnis placeat cumque voluptas?
                    </Tab>
                </Tabs>
            </Container>
            <Button variant="outline-secondary" className="mx-2">Saiba mais</Button>{' '}
        </main>
    );
}

export default Home;