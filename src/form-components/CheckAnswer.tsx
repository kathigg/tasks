import React, { useState } from "react";
import { Form } from "react-bootstrap";
/*
The CheckAnswer component allows a user to enter an answer to 
a short answer question, and then displays whether they got 
it correct or incorrect. The component takes in a parameter 
representing the expectedAnswer.

You will need a state to handle the user’s given answer
The user’s given answer should initially be the empty string
When the user’s given answer matches the expectedAnswer, 
display ✔️; otherwise display ❌
*/

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [matches, setMatches] = useState<string>("❌");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            setMatches("✔️");
        } else {
            setMatches("❌");
        }
    }
    return (
        <div>
            <div>
                <Form.Group controlId="checkAnswer">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={answer} onChange={updateName} />
                </Form.Group>
            </div>
            <div>{matches}</div>
        </div>
    );
}
