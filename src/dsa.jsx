import React from "react";

function Dsa(props) {
  const add = () => {
    const temp = {};
    temp.dsaToday = props.dsa.dsaToday + 1;
    temp.dsaAll = props.dsa.dsaAll;
    props.setdsa(temp);
    localStorage.setItem("dsaToday", temp.dsaToday);
  };

  const subtract = () => {
    const temp = {};
    temp.dsaToday = props.dsa.dsaToday - 1;
    temp.dsaAll = props.dsa.dsaAll;
    if (temp.dsaToday < 0) temp.dsaToday = 0;
    props.setdsa(temp);
    localStorage.setItem("dsaToday", temp.dsaToday);
  };

  const toLocal = () => {
    let temp = props.dsa.dsaAll;
    temp.push(props.dsa.dsaToday);
    props.setdsa({ dsaToday: 0, dsaAll: temp });
    localStorage.setItem("dsaAll", JSON.stringify(temp));
  };
  return (
    <div className="dsa">
      <h1 style={{ textAlign: "center", color: "crimson" }}>Dsa</h1>

      <div className="cpToday">
        Today's Total:
        <p onClick={subtract}>-</p>
        {props.dsa.dsaToday}
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
        {props.dsa.dsaAll
          ? Math.floor(props.dsa.dsaAll.reduce((prev, curr) => prev + curr, 0))
          : ""}
      </p>
      <p style={{ fontSize: "180%" }}>
        Total Days:{" "}
        {props.dsa.dsaAll ? Math.floor(props.dsa.dsaAll.length) : ""}
      </p>
      <p style={{ fontSize: "180%" }}>
        Total Average:{" "}
        {props.dsa.dsaAll
          ? Math.floor(
              props.dsa.dsaAll.reduce((prev, curr) => prev + curr, 0) /
                props.dsa.dsaAll.length
            )
          : ""}
      </p>
    </div>
  );
}
export default Dsa;
