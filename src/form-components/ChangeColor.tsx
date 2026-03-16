import React, { useState } from "react";
import { Form } from "react-bootstrap";

/*
The ChangeColor component offers the user a bunch of radio 
buttons labeled with different colors; choosing a radio button
 updates the text and color of a nearby box of text.

You will need state to represent the chosen color
You are free to make up your own list of colors, but you must 
have AT LEAST 8 unique colors.
Each color must be represented by a radio button.
There should be a box of text with a data-testid="colored-box"
 attribute and value.
The box of text should have the same text and backgroundColor
 style as the currently selected radio button.
HINT: We strongly recommend you use map to render all the 
color’s Form.Check tags rather than hardcoding each one!

HINT: We recommend you use the inline attribute for the radio 
buttons.

Screenshot of the ChangeColor component containing 8 colors, 
with red currently chosen
*/

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "magenta",
        "cyan",
    ];
    const [currentColor, changeColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        changeColor(event.target.value);
    }
    return (
        <div>
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id="color-select"
                        label={color}
                        value={color}
                        key={color}
                        checked={currentColor === color}
                    />
                ))}
            </div>
            <div>
                Current Color is:{" "}
                <span
                    style={{ backgroundColor: currentColor }}
                    data-testid="colored-box"
                >
                    {currentColor}
                </span>
            </div>
        </div>
    );
}
