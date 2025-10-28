import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/auth/login";
import CreateAccount from "./pages/auth/createAccount";


function App() {
  return (
    <>
    <Router>
      
      <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount/>} />
      </Routes>
        
    </Router>
   
    </>
  )
}

export default App