
import Leyout from "../shared/leyout"
import Hero from "./hero"
import Services from "./services"
import Products from "./products"
import Details from "./details"
import Experience from "./experience"

const Homepage = () => {
  return (
    <div className="h-screen w-full">
        <Leyout>
               <Hero/>
               <Services/>
               <Products/>
               <Details/>
               <Experience/>
               
        </Leyout>
      
    </div>
  )
}

export default Homepage
