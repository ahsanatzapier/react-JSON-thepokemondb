import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home";
import Pokemon from "./components/routes/pokemon/pokemon.component";
import Header from "./components/routes/header/header.component";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/pokemon/*" element={<Pokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
