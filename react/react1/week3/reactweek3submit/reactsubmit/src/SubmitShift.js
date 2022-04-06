import "./App.css";
import React, { useState, useEffect } from "react";
import { ViewShift } from "./ViewShift";
function SubmitShift() {
  const [inputShift, setInputShift] = useState([]);
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const Api =
    "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw";
  useEffect(() => {
    if (setInputShift) {
      fetch(Api)
        .then((res) => res.json())
        .then((data) => {
          const fetchMap = data.map((data) => ({
            name: data.name,
            start: data.start.split("T")[1],
            end: data.end.split("T")[1],
          }));
          setInputShift(fetchMap);
        });
    }
  }, [setInputShift]);

  function addShift() {
    // let newId;
    // if (inputShift.length === 0) {
    //   newId = 1;
    // } else {
    //   newId = inputShift[inputShift.length - 1].id + 1;
    // }
    const id = inputShift.length === 0 ? 1 : inputShift.length + 1;

    const addedShift = [
      ...inputShift,
      { id: id, name: name, start: start, end: end },
    ];
    console.log(addedShift);
    setInputShift(addedShift);
  }
  function deleteShift(name) {
    setInputShift((shifts) => {
      const shiftsAfterDelete = shifts.filter((shift) => shift.name !== name);
      return shiftsAfterDelete;
    });
  }

  const todoValues = inputShift
    .filter((val) => val.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((item, index) => {
      return (
        <ViewShift
          name={item.name}
          start={item.start}
          end={item.end}
          key={index}
          id={item.id}
          deleteShift={deleteShift}
        />
      );
    });
  return (
    <div>
      <h4> Submit Shift</h4>
      <div className="submitShift">
        Name:{" "}
        <input
          type="text"
          placeholder="Employee Name"
          onChange={(e) => setName(e.target.value)}
        />
        Start Time:
        <input
          type="time"
          onChange={(e) => setStart(e.target.value)}
          placeholder="Start Time"
        />
        End Time:
        <input
          type="time"
          onChange={(e) => setEnd(e.target.value)}
          placeholder="End Time"
        />
        <button
          type="submit"
          onClick={() => {
            addShift();
          }}
        >
          Save Shift
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="search ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <h4>ViewShift</h4>
        {todoValues}
      </div>
    </div>
  );
}
export default SubmitShift;
