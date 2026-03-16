import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="change-color-options">
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="selected-color"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                    />
                ))}
            </Form.Group>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: selectedColor === "black" ? "white" : "black",
                    width: "120px",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0.5rem auto",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
