import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Pokemon from "./routes/pokemon/pokemon.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/pokemon/*" element={<Pokemon />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
