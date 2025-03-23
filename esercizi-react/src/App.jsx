import React, { useState } from "react";

function Welcome(){
  return <div className="welcome">Benvenuto!</div>;
};

function CounterDisplay({ count }){
  return (
    <div style={{ fontSize: "24px", color: "blue" }}>Contatore: {count}</div>
  );
};

function Login(){
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="password"
        placeholder="Inserisci password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{ backgroundColor: password.length < 8 ? "red" : "green" }}
      >
        Login
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Welcome />
      <CounterDisplay count={10} />
      <Login />
    </div>
  );
};

export default App;
