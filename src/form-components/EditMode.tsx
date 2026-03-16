import React, { useState } from "react";
import { Form } from "react-bootstrap";

/*
The EditMode component has two states controlled by a switch: 
the default state shows text indicating the user’s name and 
whether they are a student, and then the alternate state is
 an editable form for editing the user’s name and whether 
 they are a student.

You will need state to handle the component being in “edit mode”
, the user’s name, and whether or not the user is a student.
The state of “edit mode” should be controlled by a switch 
(not a button or checkbox).
Initially, the component is NOT in edit mode, the user’s name
 is literally the string Your Name (as in, that exact string,
  not your actual name), and the user IS a student.
When not in edit mode, the text of the component must include
 Your Name is a student or Your Name is not a student.
As another example, if the user entered their name as Charles
 Babbage and said they were NOT a student, then the text would
  be Charles Babbage is not a student.
Whether or not the user is a student should be controlled by
 a regular checkbox, not a switch or button.
HINT: We said “switch” and we meant it.

HINT: If you can’t figure out why you are failing a test, 
read the test code. The tests are the most specific form 
of description.

HINT: If an element is rendered not visible, then a test 
looking for it will fail. If a test fails, check to see 
if the elements you have written are rendered in the Javascript.
*/

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="is-editing-check"
                    label="Editing?"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </div>
            <div>
                {editMode ?
                    <div>
                        <Form.Group controlId="set-name">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                value={username}
                                onChange={updateName}
                            />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </div>
                :   <div>
                        {" "}
                        {username}{" "}
                        {isStudent ? "is a student." : "is not a student."}
                    </div>
                }
            </div>
        </div>
    );
}
