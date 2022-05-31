import React from "react";

function Cp(props) {
  const add = () => {
    const temp = {};
    temp.cpToday = props.cp.cpToday + 1;
    temp.cpAll = props.cp.cpAll;
    props.setcp(temp);
    localStorage.setItem("cpToday", temp.cpToday);
  };

  const subtract = () => {
    const temp = {};
    temp.cpToday = props.cp.cpToday - 1;
    temp.cpAll = props.cp.cpAll;
    if (temp.cpToday < 0) temp.cpToday = 0;
    props.setcp(temp);
    localStorage.setItem("cpToday", temp.cpToday);
  };

  const toLocal = () => {
    let temp = props.cp.cpAll;
    temp.push(props.cp.cpToday);
    props.setcp({ cpToday: 0, cpAll: temp });
    localStorage.setItem("cpAll", JSON.stringify(temp));
  };
  return (
    <div className="cp">
      <h1 style={{ textAlign: "center", color: "crimson" }}>CP</h1>

      <div className="cpToday">
        Today's Total:
        <p onClick={subtract}>-</p>
        {props.cp.cpToday}
        <p onClick={add}>+</p>
        <button
          style={{
            backgroundColor: "crimson",
            color: "white",
            border: "none",
            cursor: "pointer",
            padding: "10px",
          }}
          onClick={toLocal}
        >
          Save
        </button>
      </div>
      <p style={{ fontSize: "180%" }}>
        Total Questions:{" "}
        {props.cp.cpAll
          ? Math.floor(props.cp.cpAll.reduce((prev, curr) => prev + curr, 0))
          : ""}
      </p>
      <p style={{ fontSize: "180%" }}>
        Total Days: {props.cp.cpAll ? Math.floor(props.cp.cpAll.length) : ""}
      </p>
      <p style={{ fontSize: "180%" }}>
        Total Average:{" "}
        {props.cp.cpAll
          ? Math.floor(
              props.cp.cpAll.reduce((prev, curr) => prev + curr, 0) /
                props.cp.cpAll.length
            )
          : ""}
      </p>
    </div>
  );
}
export default Cp;
