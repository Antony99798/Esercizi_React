import {createRoot} from "react-dom/client"
import Counter from "./Counter"

createRoot(document.getElementById("root")).render(
  <Counter initialvalue={0} incrementAmount={1} />
);