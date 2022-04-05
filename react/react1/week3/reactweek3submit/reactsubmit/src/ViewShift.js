import "./App.css";
import React from "react";
import FancyBorder from "./FancyBorder";

export function ViewShift({
  id,
  name,
  startTime,
  endTime,
  deleteShift,
  searchName,
  searchStart,
  searchEnd,
}) {
  const endHoursToMinutes = endTime.split(":");
  const totalEndMinutes =
    Number(endHoursToMinutes[0]) * 60 + Number(endHoursToMinutes[1]);
  const startHoursToMinutes = startTime.split(":");
  const totalStartMinutes =
    Number(startHoursToMinutes[0]) * 60 + Number(startHoursToMinutes[1]);
  const workingMinutes = totalEndMinutes - totalStartMinutes;
  const hours = Math.floor(workingMinutes / 60);
  const minutes = workingMinutes % 60;
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
            {startTime}
          </li>
          <li>
            <strong>End-Time:</strong> {endTime}
          </li>
          <li>
            <strong>Hours:</strong> {total}
          </li>
          <li>
            <strong>Price:</strong> {(150 * workingMinutes) / 60}
          </li>
          <li>
            <button onClick={() => deleteShift(id)}>Delete shift</button>
          </li>
        </ul>
      </FancyBorder>
    </div>
  );
}
