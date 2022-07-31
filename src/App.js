import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import "./components/style/App.css"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
         {/* <Route path="/" */}
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
