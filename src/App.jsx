import NavBar from "./components/NavBar"
import Pricing from "./components/Pricing"
import Features from "./components/Features"
import Logo from "./components/Logo"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"
import bgImage from "./assets/Background_Image.jpg"
import BackgroundSlideShow from "./components/BackgroundSlideShow"
import About from "./components/About"

function App() {
  return (
    <div className="min-h-screen text-slate-900" >
        <BackgroundSlideShow />
        <NavBar></NavBar>
        <About></About>
        <Features></Features>
        <Pricing></Pricing>
        <Testimonials></Testimonials>
        <Footer></Footer>
        <h1 className="text-xs">@2026 Copyright </h1>
    </div>
  );
}

export default App
