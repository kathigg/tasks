import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("St. Lucia's Day 🕯️");
    // saint hans day is summer, st lucias is christmas, fastelavn is february
    const holidays: string[] = [
        "St. Lucia's Day 🕯️",
        "Saint Hans Dag 🔥",
        "Fastelavn 👯‍♀️",
        "Påskedag 🐣",
        "Mortensaften 🦆",
    ];
    function dateHolidayOrder(): void {
        setHoliday(
            holiday === "St. Lucia's Day 🕯️" ? "Fastelavn 👯‍♀️"
            : holiday === "Fastelavn 👯‍♀️" ? "Påskedag 🐣"
            : holiday === "Påskedag 🐣" ? "Saint Hans Dag 🔥"
            : holiday === "Saint Hans Dag 🔥" ? "Mortensaften 🦆"
            : holiday === "Mortensaften 🦆" ? "St. Lucia's Day 🕯️"
            : "Saint Hans Dag 🔥",
        );
    }

    function alphabetHolidayOrder(): void {
        setHoliday(
            holiday === "St. Lucia's Day 🕯️" ? "Fastelavn 👯‍♀️"
            : holiday === "Fastelavn 👯‍♀️" ? "Mortensaften 🦆"
            : holiday === "Mortensaften 🦆" ? "Påskedag 🐣"
            : holiday === "Påskedag 🐣" ? "Saint Hans Dag 🔥"
            : holiday === "Saint Hans Dag 🔥" ? "St. Lucia's Day 🕯️"
            : "Fastelavn 👯‍♀️",
        );
    }
    return (
        <div>
            <Button onClick={alphabetHolidayOrder}>Cycle Alphabetically</Button>
            <Button onClick={dateHolidayOrder}>Cycle by Time of Year</Button>
            <span>{"Holiday: " + holiday}</span>
        </div>
    );
}
