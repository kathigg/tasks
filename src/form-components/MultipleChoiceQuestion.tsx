import React, { useState } from "react";
import { Form } from "react-bootstrap";
/*
The MultipleChoiceQuestions component allows a user to select
 an answer from a list in a dropdown, and then displays 
 whether they got it correct or incorrect. The component 
 takes in a parameter representing the expectedAnswer and 
 also a parameter representing the list of options.

You will need a state to represent the user’s currently
 selected choice.
The initial state of the selected choice is the first 
element of the options list.
When the user’s given answer matches the expectedAnswer, 
display ✔️; otherwise display ❌
*/

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    const [charDisplay, setCharDisplay] = useState<string>("❌");

    function setAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
        if (event.target.value === expectedAnswer) {
            setCharDisplay("✔️");
        } else {
            setCharDisplay("❌");
        }
    }
    return (
        <div>
            <div>
                <Form.Group controlId="selections">
                    <Form.Label>What is your answer?</Form.Label>
                    <Form.Select value={selected} onChange={setAnswer}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>
                <span>{charDisplay}</span>
            </div>
        </div>
    );
}
