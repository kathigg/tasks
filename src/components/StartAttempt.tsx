import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [numAttempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        if (inProgress || numAttempts === 0) {
            return;
        }
        setProgress(true);
        setAttempts((attempts) => attempts - 1);
    }

    function stopQuiz(): void {
        setProgress(false);
    }
    function increaseAttempts(): void {
        if (inProgress) {
            return;
        }
        setAttempts((attempts) => attempts + 1);
    }
    return (
        <div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || numAttempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={increaseAttempts} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
            <div>Number of Attempts: {numAttempts}</div>
        </div>
    );
}
