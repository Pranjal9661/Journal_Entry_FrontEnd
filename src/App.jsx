import NavBar from "./components/NavBar"
import Pricing from "./components/Pricing"
import Features from "./components/Features"
import Logo from "./components/Logo"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"
import bgImage from "./assets/Background_Image.jpg"
import BackgroundSlideShow from "./components/BackgroundSlideShow"
import About from "./components/About"
import Login from "./components/Login"
import {Routes,Route,useLocation} from "react-router-dom"
import Register from "./components/Register"

function Home(){
  return(
    <>
    <About></About>
    <Features></Features>
    <Pricing></Pricing>
    <Testimonials/>
    
    </>
  )
}
function App() {
  const location = useLocation();
  const hideSlideShow = location.pathname === "/register";
  return (
    <div className="min-h-screen text-slate-900" >
        {!hideSlideShow && <BackgroundSlideShow />}
        <NavBar></NavBar>
         <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
         </Routes>
        <Footer></Footer>
        <h1 className="text-xs">@2026 Copyright </h1>
    </div>
  );
}

export default App
