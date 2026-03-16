import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

/*
The GiveAttempts component simulates a user taking a quiz 
with a limited number of attempts, but also provides a way 
for them to gain as many attempts as they want via a numeric 
input box.

You will need a state to represent the number of attempts the
 user has left, and another state to represent the number 
 of attempts they are requesting.
The initial number of attempts left should be 3.
The number of attempts left should be visible.
There should be a numeric input box where the user can 
specify their requested number of attempts.
There should be two buttons, one labeled use that 
decreases the attempts by one and one labeled gain that 
increases the attempts by the amount in the input box.
If the user attempts to request an invalid amount 
(e.g., the empty string "") that cannot be parsed as an 
integer, then do not change their number of attempts.
When the user is out of attempts, the use button should 
be disabled
*/

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function updatedRequests(event: React.ChangeEvent<HTMLInputElement>): void {
        if (!isNaN(parseInt(event.target.value))) {
            setRequestedAttempts(event.target.valueAsNumber);
        }
    }
    return (
        <div>
            <div>Attempts left: {remainingAttempts}</div>
            <div>
                <Form.Group controlId="makeRequest">
                    <Form.Label>Number of requests: </Form.Label>
                    <Form.Control
                        value={requestedAttempts}
                        onChange={updatedRequests}
                        type="number"
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setRemainingAttempts(
                            requestedAttempts + remainingAttempts,
                        );
                    }}
                >
                    {"Gain"}
                </Button>
                <Button
                    disabled={remainingAttempts === 0}
                    onClick={() => {
                        setRemainingAttempts(remainingAttempts - 1);
                    }}
                >
                    {"Use"}
                </Button>
            </div>
        </div>
    );
}
