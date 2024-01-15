
import Leyout from "../shared/leyout"
import Hero from "./hero"
import Services from "./services"
import Products from "./products"

const Homepage = () => {
  return (
    <div className="h-screen w-screen">
        <Leyout>
               <Hero/>
               <Services/>
               <Products/>
               
        </Leyout>
      
    </div>
  )
}

export default Homepage
