import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
    const isCorrect = selectedAnswer === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple-choice-question">
                <Form.Label>Answer:</Form.Label>
                <Form.Select
                    value={selectedAnswer}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setSelectedAnswer(event.target.value);
                    }}
                >
                    <option value="">Select an answer</option>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
