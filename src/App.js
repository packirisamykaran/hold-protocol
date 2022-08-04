import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import "./components/style/App.css"
import Report from "./components/Report";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import Stake from "./components/Stake";


function App() {
  return (
    <div className="App">
     <BrowserRouter basename="/hold-protocol">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route  index element={<Home/>}/>
          <Route path="transaction" element={<Transaction/>}/>
          <Route path="report" element={<Report/>}/>
          <Route path="stake" element={<Stake/>} />
         </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
