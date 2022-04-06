import "./App.css";
import React from "react";
import FancyBorder from "./FancyBorder";

export function ViewShift({
  id,
  name,
  start,
  end,
  deleteShift,
  searchName,
  searchStart,
  searchEnd,
}) {
  const endMinutes = end.split(":");
  const totalEndMinutes = Number(endMinutes[0]) * 60 + Number(endMinutes[1]);
  const startMinutes = start.split(":");
  const totalStartMinutes =
    Number(startMinutes[0]) * 60 + Number(startMinutes[1]);
  const actualMinutes = totalEndMinutes - totalStartMinutes;
  const hours = Math.floor(actualMinutes / 60);
  const minutes = actualMinutes % 60;
  const total = hours + ":" + minutes;
  console.log(total);
  return (
    <div className="content">
      <FancyBorder>
        <ul>
          {searchName} {searchStart} {searchEnd}
        </ul>

        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Start-Time:</strong>
            {start}
          </li>
          <li>
            <strong>End-Time:</strong> {end}
          </li>
          <li>
            <strong>Hours:</strong> {total}
          </li>
          <li>
            <strong>Price:</strong> {(150 * actualMinutes) / 60}
          </li>
          <li>
            <button onClick={() => deleteShift(name)}>Delete shift</button>
          </li>
        </ul>
      </FancyBorder>
    </div>
  );
}
