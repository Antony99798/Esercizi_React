import { SWRConfig } from "swr";
import MyComponent from "./MyComponent";

function App() {
  return (
    <SWRConfig
      value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}
    >
      <MyComponent />
    </SWRConfig>
  );
}

export default App;
