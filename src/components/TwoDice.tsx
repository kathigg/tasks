import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceOne, updateDiceOne] = useState<number>(1);
    const [diceTwo, updateDiceTwo] = useState<number>(6);

    return (
        <div>
            <span data-testid="left-die">{diceOne}</span>
            <div></div>
            <span data-testid="right-die">{diceTwo}</span>
            <div>
                <Button onClick={() => updateDiceOne(d6())}>Roll Left</Button>
            </div>
            <div>
                <Button onClick={() => updateDiceTwo(d6())}>Roll Right</Button>
            </div>
            <div>
                {diceOne === 1 && diceTwo === 1 ?
                    <span>Lose</span>
                :   <span></span>}
            </div>
            <div>
                {diceOne !== 1 && diceTwo !== 1 && diceOne === diceTwo ?
                    <span>Win</span>
                :   <span></span>}
            </div>
        </div>
    );
}
