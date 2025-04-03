import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom"
import { Dashboard } from "./Dashboard";
import { Profilo } from "./Profilo";
import { Impostazioni } from "./impostazioni";
const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/Dashboard">Dashboard</Link>
          
        </div>
        <Routes>
          <Route path = "/redirect" element= {<Navigate to="/Dashboard"/>}/>
          <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="/Profilo" element={<Profilo />} />
          <Route path="/Impostazioni" element={<Impostazioni />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;