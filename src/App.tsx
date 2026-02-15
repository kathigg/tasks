import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import "react-bootstrap";

import themeTeaser from "./assets/Copy of Theme Teasers (1).png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Kathleen Higgins: UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <h1>Hello!</h1>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={themeTeaser}
                            style={{ width: "270px", height: "337px" }}
                            alt="HenHacks is only two weeks away!"
                        />
                    </Col>
                    <Col>
                        <p>{"Things I'm eating for food today:"}</p>
                        <ul>
                            <li>{"Strawberries"}</li>
                            <li>{"Raspberries"}</li>
                            <li>{"1 Mango"}</li>
                            <li>{"Tapenade and Garlic Tuscan Bread"}</li>
                            <li>{"Trader Joe's Fries"}</li>
                            <li>{"Perhaps Spring Rolls"}</li>
                            <li>{"Mochi"}</li>
                            <li>
                                {"Some chocolate covered frozen strawberries"}
                            </li>
                        </ul>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div
                            id="rectangle"
                            style={{
                                width: "10px",
                                height: "10px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
