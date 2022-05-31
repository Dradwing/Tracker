import "./App.css";
import React from "react";
import Cp from "./cp";
import Dsa from "./dsa";
function App() {
  const [cp, setcp] = React.useState({});
  const [dsa, setdsa] = React.useState(0);

  React.useEffect(() => {
    const cpToday = JSON.parse(localStorage.getItem("cpToday"));
    const cpAll = JSON.parse(localStorage.getItem("cpAll"));
    if (cpToday !== null) setcp({ cpToday: cpToday });
    else setcp({ cpToday: 0 });
    if (cpAll !== null) setcp({ cpToday: cpToday, cpAll: cpAll });
    else setcp({ cpToday: cpToday, cpAll: [] });

    const dsaToday = JSON.parse(localStorage.getItem("dsaToday"));
    const dsaAll = JSON.parse(localStorage.getItem("dsaAll"));
    if (dsaToday !== null) setdsa({ dsaToday: dsaToday });
    else setdsa({ dsaToday: 0 });
    if (dsaAll !== null) setdsa({ dsaToday: dsaToday, dsaAll: dsaAll });
    else setdsa({ dsaToday: dsaToday, dsaAll: [] });
  }, []);
  return (
    <div className="App">
      <Cp cp={cp} setcp={setcp} />
      <Dsa dsa={dsa} setdsa={setdsa} />
    </div>
  );
}

export default App;
