import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";  
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Header from "./components/Header";


function App() {
  

  return (
   
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="*" element={<div>404 Not Found</div>} />

        </Routes>
      </BrowserRouter>
    
  )
}

export default App
