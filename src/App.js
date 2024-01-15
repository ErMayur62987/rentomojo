
import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import About from "./components/about"
import Culture from "./components/culture"
import Investors from "./components/investors"
import Carriers from "./components/carriers"
import Benefits from "./components/benefits"
import Landlords from "./components/landlords"
import Contact from "./components/contact"
import Sitemap from "./components/sitemap"
import NotFound from "./components/not-found"
import Homepage from "./components/homepage"

const App = () => {
  return (
    <div className=" w-screen flex justify-center px-16">
      <div>
        <Router>
           <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/culture" element={<Culture/>}/>
              <Route path="/investors" element={<Investors/>}/>
              <Route path="/carriers" element={<Carriers/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/benefits" element={<Benefits/>}/>
              <Route path="/sitemap" element={<Sitemap/>}/>
              <Route path="/landlords" element={<Landlords/>}/>
              <Route path="*" element={<NotFound/>}/>
           </Routes>
        </Router>
    </div> 
    </div>
  )
}

export default App

