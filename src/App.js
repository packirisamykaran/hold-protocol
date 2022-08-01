import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import "./components/style/App.css"
import Report from "./components/Report";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
     <BrowserRouter basename="/hold-protocol">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route  index element={<Home/>}/>
          <Route path="report" element={<Report/>}/>
         </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
