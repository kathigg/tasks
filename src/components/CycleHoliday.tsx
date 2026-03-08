import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, useHoliday] = useState<string>("St. Lucia's Day");

    function alphabetHolidayOrder(): string {
        return "";
    }

    function dateHolidayOrder(): string {
        return "";
    }
    return (
        <div>
            <Button>Cycle Alphabetically</Button>
            <Button>Cycle by Time of Year</Button>
        </div>
    );
}
