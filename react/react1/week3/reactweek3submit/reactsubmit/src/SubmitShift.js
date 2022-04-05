import "./App.css";
import React, { useState, useEffect } from "react";
import { ViewShift } from "./ViewShift";
function SubmitShift() {
  const [inputShift, setInputShift] = useState([
    { id: 1, name: "Suman", startTime: "3:20", endTime: "12:33" },
    { id: 2, name: "Chunmei", startTime: "15:20", endTime: "21:49" },
  ]);
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  //fetch part not working for me.
  // useEffect(() => {
  //   if (setInputShift) {
  //     fetch(
  //       "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const fetchMap = data.map((data) => ({
  //           name: data.name,
  //           startTime: data.startTime,
  //           endTime: data.endTime,
  //         }));
  //         setInputShift((prev) => [...prev, ...fetchMap]);
  //       });
  //   }
  // }, [setInputShift]);

  function addShift() {
    let newId;
    if (inputShift.length === 0) {
      newId = 1;
    } else {
      newId = inputShift[inputShift.length - 1].id + 1;
    }
    const addedShift = [...inputShift, { id: newId, name, startTime, endTime }];
    setInputShift(addedShift);
  }

  function deleteShift(id) {
    setInputShift((shifts) => {
      const shiftsAfterDelete = shifts.filter((shift) => shift.id !== id);
      return shiftsAfterDelete;
    });
  }

  const todoValues = inputShift
    .filter((val) => val.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((item) => {
      return (
        <ViewShift
          name={item.name}
          startTime={item.startTime}
          endTime={item.endTime}
          key={item.id}
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
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="Start Time"
        />
        End Time:
        <input
          type="time"
          onChange={(e) => setEndTime(e.target.value)}
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
