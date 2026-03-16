import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const displayedName = name === "" ? "Your Name" : name;

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEditing}
                onChange={() => setIsEditing(!isEditing)}
            />
            <div>
                {displayedName} is {isStudent ? "a" : "not a"} student
            </div>
            {isEditing && (
                <div>
                    <Form.Group controlId="edit-mode-name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="edit-mode-student"
                        label="Student"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                </div>
            )}
        </div>
    );
}
