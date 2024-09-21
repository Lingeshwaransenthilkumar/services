import "./App.css";
import Home from "./pages/home/home";
import { Routes,Route } from "react-router-dom";
import Services from "./pages/services/services";

function App(){
  return(
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
