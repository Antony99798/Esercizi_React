import React from "react";
import useCounter from "./UseCounter";
import useCurrentLocation from "./UseCurrentLocation";
import useForm from "./UseForm";
import useGithubUser from "./UseGithubUser";

const App = () => {
  const { counter, onIncrement, onDecrement, onReset } = useCounter();
  const {
    currentLocation,
    onGetCurrentLocation,
    error: locationError,
  } = useCurrentLocation();
  const [formData, handleInputChange] = useForm({ username: "" });
  const { user, onGetUser, loading, error } = useGithubUser();

  return (
    <div>
      {/* Contatore */}
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>

      {/* Posizione */}
      <h2>Location:</h2>
      <button onClick={onGetCurrentLocation}>Get Location</button>
      {currentLocation && (
        <p>
          Lat: {currentLocation.latitude}, Lng: {currentLocation.longitude}
        </p>
      )}
      {locationError && <p style={{ color: "red" }}>{locationError.message}</p>}

      {/* Form */}
      <h2>GitHub User Search:</h2>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <button onClick={() => onGetUser(formData.username)}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {user && (
        <div>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} alt={user.login} width={50} />
        </div>
      )}
    </div>
  );
};

export default App;
