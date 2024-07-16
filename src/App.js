import './App.css';
import Mainpage from "./pages/main/Mainpage";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=8KB3DHI-QbM