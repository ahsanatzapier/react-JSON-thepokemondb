import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home";
import Pokemon from "./components/routes/pokemon/pokemon.component";
import Navigation from "./components/routes/navigation/navigation.component";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/pokemon/*" element={<Pokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
