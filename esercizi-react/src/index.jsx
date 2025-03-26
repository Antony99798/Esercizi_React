import {createRoot} from "react-dom/client"
import Container from "./Container";




createRoot(document.getElementById("root")).render(
  <Container title="Cliccami">
    <p>Contenuto visibile quando aperto</p>
  </Container>
);